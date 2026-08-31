"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Globe, TrendingUp, ArrowUpRight } from "lucide-react";
import styles from "./styles.module.css";
import { ttqTrack } from "@/utils/tiktok";
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

    const handleIntentClick = (intent: "explore" | "invest") => {
        ttqTrack("ClickButton", {
            content_name: intent === "invest" ? "invest_intent" : "explore_intent",
        });
        setOpen(false);
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

                <div className={styles.cards}>
                    <Link
                        href="/waitlist/explorers"
                        className={`${styles.card} ${styles.cardExplore}`}
                        onClick={() => handleIntentClick("explore")}
                    >
                        <div className={styles.cardTop}>
                            <Globe size={24} strokeWidth={1.5} />
                            <ArrowUpRight size={16} className={styles.arrowIcon} />
                        </div>
                        <div className={styles.cardBottom}>
                            <h3>I&apos;m here to explore</h3>
                            <p>Stories, culture and history behind every place.</p>
                        </div>
                    </Link>

                    <Link
                        href="/waitlist/investors"
                        className={`${styles.card} ${styles.cardInvest}`}
                        onClick={() => handleIntentClick("invest")}
                    >
                        <div className={styles.cardTop}>
                            <TrendingUp size={24} strokeWidth={1.5} />
                            <ArrowUpRight size={16} className={styles.arrowIcon} />
                        </div>
                        <div className={styles.cardBottom}>
                            <h3>I&apos;m looking to invest</h3>
                            <p>Growth signals and the thesis behind the platform.</p>
                        </div>
                    </Link>
                </div>

                <button className={styles.dismiss} onClick={() => setOpen(false)}>
                    Not now
                </button>
            </div>
        </div>
    );
};

export default WaitlistPopup;
