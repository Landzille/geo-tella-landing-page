import Image from "next/image";
import WaitlistNav from "@/components/waitlistNav";
import WaitlistSignupForm from "@/components/waitlistSignupForm";
import WaitlistFeatures from "@/components/waitlistFeatures";
import WaitlistCta from "@/components/waitlistCta";
import type { FeatureCard } from "@/components/waitlistFeatures";
import styles from "./styles.module.css";

const features: FeatureCard[] = [
    {
        iconName: "trending",
        title: "Direction, not snapshots",
        description:
            "Point-in-time data is everywhere. Geotela shows how an area is moving — improving or declining — from timestamped contributions over time.",
        variant: "orange",
    },
    {
        iconName: "shield",
        title: "Finer than any dataset",
        description:
            "Contributors report at the block level, not the ZIP-code average. See the street-by-street reality that listings and market reports smooth over.",
        variant: "green",
    },
    {
        iconName: "target",
        title: "Trace every number",
        description:
            "No aggregated scores with hidden origins, no sponsored rankings. Every insight is traceable to a verified contributor with real skin in the game.",
        variant: "orange",
    },
];

const InvestorsPage = () => {
    return (
        <div className={styles.page}>
            <WaitlistNav active="investors" theme="dark" />

            {/* ── HERO ── */}
            <section className={styles.hero} id="form">
                <div className={styles.heroLeft}>
                    <span className={styles.badge}>FOR THE INVESTMENT SEEKER</span>
                    <h1 className={styles.headline}>
                        The place everyone&apos;s watching. The data nobody&apos;s
                        sharing.
                    </h1>
                    <p className={styles.body}>
                        Institutional investors pay consultants for ground-level
                        intelligence. Geotela puts it in your hands — verified by people
                        on the ground, timestamped, and never sponsored. See where a
                        market is heading, not just where it stands. Join the waitlist and
                        claim the information edge before everyone else has it.
                    </p>

                    <div className={styles.testimonialCard}>
                        <Image
                            src="/assets/user-1.png"
                            alt="Verified resident"
                            width={48}
                            height={48}
                            className={styles.avatar}
                        />
                        <div>
                            <p className={styles.testimonialMeta}>
                                Verified resident · updated 2 wks ago
                            </p>
                            <p className={styles.testimonialQuote}>
                                Gorgeous block by day, but the bar strip two streets over
                                runs until 3am
                            </p>
                        </div>
                    </div>

                    <div className={styles.dots}>
                        <span className={styles.dot} />
                        <span className={`${styles.dot} ${styles.dotActive}`} />
                        <span className={styles.dot} />
                    </div>
                </div>

                <div className={styles.heroRight}>
                    <WaitlistSignupForm
                        listId={11}
                        ctaLabel="Get Early Access — Free"
                        viewEvent="investor_form_view"
                        gaEvent="investor_waitlist_signup"
                        theme="light"
                    />
                </div>
            </section>

            <WaitlistFeatures
                badge="WHY GEOTELA"
                heading="The Intelligence Behind Every Insight"
                cards={features}
            />

            <WaitlistCta heading="Invest on ground truth, not gut feeling. Be one of the first investors in when Geotela launches." />
        </div>
    );
};

export default InvestorsPage;
