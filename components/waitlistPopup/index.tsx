"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { X, CheckCircle } from "lucide-react";
import styles from "./styles.module.css";
import { ttqTrack, generateEventId } from "@/utils/tiktok";
import { fbqTrack } from "@/utils/meta";

const POPUP_DELAY_MS = 5000;
const SEEN_KEY = "geotela_waitlist_popup_seen";

// Pages where a "join the waitlist" popup is redundant, or would
// break an intentionally full-viewport / distraction-free layout.
const EXCLUDED_PATHS = [
    "/waitlist",
    "/waitlist/explorers",
    "/waitlist/investors",
    "/investors-starter-pack",
];

const isExcluded = (pathname: string) =>
    EXCLUDED_PATHS.includes(pathname) || pathname.endsWith("/read");

const WaitlistPopup = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [ready, setReady] = useState(false);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    // Tracks whether the popup has already been shown this browser
    // session (tab), so it fires at most once per visit regardless
    // of how many pages the user moves across.
    const shownRef = useRef(false);

    useEffect(() => {
        try {
            if (sessionStorage.getItem(SEEN_KEY)) shownRef.current = true;
        } catch {
            // sessionStorage unavailable (e.g. private mode) — fall
            // back to showing once per mount, which is still once
            // per tab in practice.
        }
        if (shownRef.current) return;
        const timer = setTimeout(() => setReady(true), POPUP_DELAY_MS);
        return () => clearTimeout(timer);
    }, []);

    // Once the 5s delay has elapsed, show as soon as we're on a page
    // where the popup is allowed — immediately if that's already the
    // current page, or the moment the user navigates to one.
    useEffect(() => {
        if (!ready || shownRef.current || isExcluded(pathname)) return;
        shownRef.current = true;
        try {
            sessionStorage.setItem(SEEN_KEY, "1");
        } catch {
            // ignore
        }
        setOpen(true);
    }, [ready, pathname]);

    useEffect(() => {
        if (!open) return;
        window.gtag?.("event", "waitlist_popup_view");
        ttqTrack("ViewContent", { content_name: "waitlist_popup" });
        fbqTrack("ViewContent", { content_name: "waitlist_popup" });

        const body = document.body;
        const prevOverflow = body.style.overflow;
        body.style.overflow = "hidden";

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);

        return () => {
            body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    if (!open) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        setError("");
        try {
            const eventId = generateEventId();
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    listId: 9,
                    eventId,
                    url: window.location.href,
                }),
            });
            if (!res.ok) throw new Error("Failed");
            window.gtag?.("event", "waitlist_signup");
            ttqTrack("Lead", { content_name: "waitlist_signup" }, eventId);
            fbqTrack("Lead", { content_name: "waitlist_signup" });
            fbqTrack("CompleteRegistration", { content_name: "waitlist_signup" });
            setSuccess(true);
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
            <div
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-label="Join the GeoTela waitlist"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={styles.closeBtn}
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                >
                    <X size={16} strokeWidth={2} />
                </button>

                {success ? (
                    <div className={styles.success}>
                        <CheckCircle size={44} strokeWidth={1.5} color="#005629" />
                        <h2 className={styles.title}>You&apos;re on the list!</h2>
                        <p className={styles.desc}>
                            Your invite lands the moment we open the doors.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className={styles.header}>
                            <span className={styles.badge}>EARLY ACCESS</span>
                            <h2 className={styles.title}>
                                Don&apos;t miss your invite to <span className={styles.green}>GeoTela</span>
                            </h2>
                            <p className={styles.desc}>
                                Join the waitlist and lock in free launch tokens, a founding
                                badge, and first access &mdash; before we open the doors.
                            </p>
                        </div>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit" disabled={loading}>
                                {loading ? "Submitting..." : "Claim founding access"}
                            </button>
                        </form>
                        {error && <p className={styles.error}>{error}</p>}
                    </>
                )}
            </div>
        </div>
    );
};

export default WaitlistPopup;
