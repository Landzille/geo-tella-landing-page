import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/svgs/navigation";
import styles from "./styles.module.css";

const NotFound = () => {
    return (
        <div className={styles.container}>
            <Image
                src="/assets/geo-new.png"
                alt="logo"
                width={140}
                height={48}
                priority
                className={styles.logo}
            />

            <Navigation />

            <p className={styles.code}>404</p>
            <h1>Looks like this place isn&apos;t on the map yet.</h1>
            <p className={styles.subtext}>
                The page you&apos;re looking for doesn&apos;t exist or has moved.
                Let&apos;s get you back on track.
            </p>

            <div className={styles.actions}>
                <Link href="/" className={styles.primaryButton}>
                    Back to Home
                </Link>
                <Link href="/magazines" className={styles.secondaryButton}>
                    Explore Magazines
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
