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
        title: "Real people, really there",
        description:
            "Every insight comes from contributors on the ground — residents and long-stayers, not weekend visitors or sponsored writers.",
        variant: "orange",
    },
    {
        iconName: "shield",
        title: "No stale guides",
        description:
            "Places change. Our data shows exactly when it was last confirmed, so you're never planning around a picture of the past.",
        variant: "green",
    },
    {
        iconName: "target",
        title: "Nobody's paid to say yes",
        description:
            "No affiliate agendas, no advertiser-friendly reviews. Just what a place is actually like — the good, the loud, and the overhyped.",
        variant: "orange",
    },
];

const ExplorersPage = () => {
    return (
        <div className={styles.page}>
            <WaitlistNav active="explorers" theme="light" />

            {/* ── HERO ── */}
            <section className={styles.hero}>
                <div className={styles.heroLeft}>
                    <span className={styles.badge}>FOR THE INTELLIGENT EXPLORER</span>
                    <h1 className={styles.headline}>
                        You&apos;ve seen the photos. You haven&apos;t seen the place.
                    </h1>
                    <p className={styles.body}>
                        Geotela is location intelligence from people actually on the ground
                        — verified, timestamped, and never paid to say yes. Know what a
                        neighborhood, city, or country is really like before your next
                        trip, stay, or move. Join the waitlist and be first in when we
                        launch.
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
                        listId={12}
                        ctaLabel="Save my spot"
                        viewEvent="explorer_form_view"
                        gaEvent="explorer_waitlist_signup"
                        theme="dark"
                    />
                </div>
            </section>

            <WaitlistFeatures
                badge="WHY PEOPLE TRUST GEOTELA"
                heading="Every Insight Starts With Someone Who's Actually There"
                cards={features}
            />

            <WaitlistCta heading="Stop guessing. Start knowing. Be one of the first explorers in when Geotela launches." />
        </div>
    );
};

export default ExplorersPage;
