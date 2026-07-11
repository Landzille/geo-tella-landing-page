import Link from "next/link";
import styles from "./styles.module.css";

type Props = {
    heading: string;
    ctaLabel?: string;
    ctaHref?: string;
};

const WaitlistCta = ({
    heading,
    ctaLabel = "Join the Waitlist",
    ctaHref = "/waitlist",
}: Props) => {
    return (
        <section className={styles.section}>
            <span className={styles.badge}>COMING SOON</span>
            <h2 className={styles.heading}>{heading}</h2>
            <Link href={ctaHref} className={styles.cta}>
                {ctaLabel}
            </Link>
        </section>
    );
};

export default WaitlistCta;
