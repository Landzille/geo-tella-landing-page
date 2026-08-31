"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X, CheckCircle } from "lucide-react";
import styles from "./styles.module.css";
import { ttqTrack, generateEventId } from "@/utils/tiktok";
import { fbqTrack } from "@/utils/meta";

const POPUP_DELAY_MS = 5000;

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
    if (isExcluded(pathname)) return null;
    // Keying by pathname remounts (and so resets) the popup on every
    // navigation, re-arming the 5s timer for the new page.
    return <PopupForPath key={pathname} />;
};

const PopupForPath = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => setOpen(true), POPUP_DELAY_MS);
        return () => clearTimeout(timer);
    }, []);

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
