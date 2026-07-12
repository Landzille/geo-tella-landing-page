"use client";
import styles from "./styles.module.css";

type Props = {
    heading: string;
    ctaLabel?: string;
    scrollToId?: string;
};

const WaitlistCta = ({
    heading,
    ctaLabel = "Join the Waitlist",
    scrollToId = "form",
}: Props) => {
    const handleClick = () => {
        document
            .getElementById(scrollToId)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className={styles.section}>
            <span className={styles.badge}>COMING SOON</span>
            <h2 className={styles.heading}>{heading}</h2>
            <button className={styles.cta} onClick={handleClick}>
                {ctaLabel}
            </button>
        </section>
    );
};

export default WaitlistCta;
