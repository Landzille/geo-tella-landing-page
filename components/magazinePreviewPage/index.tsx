"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Share2, Download, Check } from "lucide-react";
import { slugify, getMagazineLabel, type Magazine } from "@/utils/magazineData";
import styles from "./styles.module.css";

type Props = {
    magazine: Magazine;
    others: Magazine[];
};

const trackDownload = (magazine: Magazine) => {
    window.gtag?.("event", "magazine_download", {
        magazine_id: magazine.id,
        magazine_title: magazine.title,
    });
};

const MagazinePreviewPage = ({ magazine, others }: Props) => {
    const [copied, setCopied] = useState(false);
    const magazineLabel = getMagazineLabel(magazine.title);

    const handleShare = async () => {
        const url = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: magazine.title,
                    text: magazine.description,
                    url,
                });
            } catch {
                // user cancelled the share sheet — nothing to do
            }
            return;
        }
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Link href="/">
                    <Image
                        src="/assets/geo-new.png"
                        alt="logo"
                        width={140}
                        height={48}
                        priority
                        className={styles.logo}
                    />
                </Link>
                <nav className={styles.nav}>
                    <Link href="/">Home</Link>
                    <Link href="/magazines">Magazines</Link>
                    <Link href="/waitlist" className={styles.cta}>
                        Get Early Access — Free
                    </Link>
                </nav>
            </header>

            <div className={styles.hero}>
                <Link href="/magazines" className={styles.backLink}>
                    <ChevronLeft size={16} /> All magazines
                </Link>

                {magazineLabel && <span className={styles.badge}>{magazineLabel}</span>}

                <h1 className={styles.title}>{magazine.title}</h1>
                <p className={styles.subtitle}>{magazine.description}</p>

                <div className={styles.previewRow}>
                    <div className={styles.previewCard}>
                        <div className={styles.previewHeader}>
                            <span className={styles.previewLabel}>Reading preview</span>
                            <a
                                href={magazine.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.previewOpen}
                            >
                                Open full PDF
                            </a>
                        </div>
                        <object
                            data={`${magazine.pdfUrl}#toolbar=0`}
                            type="application/pdf"
                            className={styles.previewFrame}
                            aria-label={`${magazine.title} preview`}
                        >
                            <div className={styles.previewFallback}>
                                Your browser can&apos;t preview PDFs inline.{" "}
                                <a href={magazine.pdfUrl} target="_blank" rel="noopener noreferrer">
                                    Open the PDF directly
                                </a>{" "}
                                instead.
                            </div>
                        </object>
                    </div>

                    <div className={styles.actions}>
                        <button
                            type="button"
                            onClick={handleShare}
                            className={`${styles.actionBtn} ${styles.shareBtn}`}
                        >
                            {copied ? <Check size={16} /> : <Share2 size={16} />}
                            {copied ? "Copied" : "Share"}
                        </button>
                        <a
                            href={magazine.pdfUrl}
                            download
                            onClick={() => trackDownload(magazine)}
                            className={`${styles.actionBtn} ${styles.saveBtn}`}
                        >
                            <Download size={16} />
                            Save
                        </a>
                    </div>
                </div>
            </div>

            {others.length > 0 && (
                <div className={styles.more}>
                    <h2 className={styles.moreHeading}>More magazines</h2>
                    <div className={styles.moreGrid}>
                        {others.map((other) => (
                            <Link
                                key={other.id}
                                href={`/magazines/${slugify(other.title)}`}
                                className={styles.moreCard}
                            >
                                <div className={styles.moreImageWrap}>
                                    <Image
                                        src={other.image}
                                        alt={other.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <span className={styles.moreTitle}>{other.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MagazinePreviewPage;
