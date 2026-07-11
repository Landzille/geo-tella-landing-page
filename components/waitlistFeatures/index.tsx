import { TrendingUp, ShieldCheck, Crosshair } from "lucide-react";
import styles from "./styles.module.css";

const iconMap = {
    trending: TrendingUp,
    shield: ShieldCheck,
    target: Crosshair,
} as const;

export type FeatureCard = {
    iconName: keyof typeof iconMap;
    title: string;
    description: string;
    variant: "orange" | "green";
};

type Props = {
    badge: string;
    heading: string;
    cards: FeatureCard[];
};

const WaitlistFeatures = ({ badge, heading, cards }: Props) => {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <span className={styles.badge}>{badge}</span>
                <h2 className={styles.heading}>{heading}</h2>
                <div className={styles.cards}>
                    {cards.map((card) => {
                        const Icon = iconMap[card.iconName];
                        return (
                            <div
                                key={card.title}
                                className={`${styles.card} ${card.variant === "green" ? styles.cardGreen : styles.cardOrange}`}
                            >
                                <div className={styles.cardTop}>
                                    <div className={styles.iconWrap}>
                                        <Icon size={28} strokeWidth={1.5} />
                                    </div>
                                </div>
                                <div className={styles.cardBottom}>
                                    <h3 className={styles.cardTitle}>{card.title}</h3>
                                    <p className={styles.cardDesc}>{card.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WaitlistFeatures;
