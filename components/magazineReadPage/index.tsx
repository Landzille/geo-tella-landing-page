"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ChevronLeft, Download } from "lucide-react";
import { slugify, type Magazine } from "@/utils/magazineData";
import styles from "./styles.module.css";

const PdfViewer = dynamic(() => import("@/components/pdfViewer"), {
    ssr: false,
    loading: () => <div style={{ padding: "120px 24px", textAlign: "center", color: "#475467" }}>Loading…</div>,
});

const trackDownload = (magazine: Magazine) => {
    window.gtag?.("event", "magazine_download", {
        magazine_id: magazine.id,
        magazine_title: magazine.title,
    });
};

const MagazineReadPage = ({ magazine }: { magazine: Magazine }) => {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <Link href={`/magazines/${slugify(magazine.title)}`} className={styles.backLink}>
                        <ChevronLeft size={16} /> Back to preview
                    </Link>
                    <span className={styles.title}>{magazine.title}</span>
                </div>
                <a
                    href={magazine.pdfUrl}
                    download
                    onClick={() => trackDownload(magazine)}
                    className={styles.downloadLink}
                >
                    <Download size={15} />
                    Save
                </a>
            </header>

            <div className={styles.viewerWrap}>
                <div className={styles.viewerCard}>
                    <PdfViewer
                        pdfUrl={magazine.pdfUrl}
                        magazineId={magazine.id}
                        magazineTitle={magazine.title}
                        variant="full"
                    />
                </div>
            </div>
        </div>
    );
};

export default MagazineReadPage;
