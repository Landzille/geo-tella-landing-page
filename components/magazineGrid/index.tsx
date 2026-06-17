"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import { magazineData, type Magazine } from "@/utils/magazineData";
import styles from "./styles.module.css";

const PAGE_SIZE = 6;

const trackDownload = (magazine: Magazine) => {
    window.gtag?.("event", "magazine_download", {
        magazine_id: magazine.id,
        magazine_title: magazine.title,
    });
};

const MagazineGrid = () => {
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(magazineData.length / PAGE_SIZE);
    const visibleMagazines = magazineData.slice(
        (page - 1) * PAGE_SIZE,
        page * PAGE_SIZE
    );

    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>Explore Our Magazines</h2>

            <div className={styles.grid}>
                {visibleMagazines.map((magazine) => (
                    <article key={magazine.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={magazine.image}
                                alt={magazine.title}
                                width={480}
                                height={360}
                                className={styles.image}
                            />
                        </div>

                        <div className={styles.cardBody}>
                            <h3>{magazine.title}</h3>
                            <p>{magazine.description}</p>
                            <hr />
                            <a
                                href={magazine.pdfUrl}
                                download
                                onClick={() => trackDownload(magazine)}
                                className={styles.downloadLink}
                            >
                                Download Now
                                <Download size={16} strokeWidth={2} />
                            </a>
                        </div>
                    </article>
                ))}
            </div>

            {totalPages > 1 && (
                <div className={styles.pagination}>
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className={styles.arrowButton}
                        aria-label="Previous page"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (pageNumber) => (
                            <button
                                key={pageNumber}
                                onClick={() => setPage(pageNumber)}
                                className={`${styles.pageButton} ${
                                    pageNumber === page ? styles.pageButtonActive : ""
                                }`}
                            >
                                {pageNumber}
                            </button>
                        )
                    )}

                    <button
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className={styles.arrowButton}
                        aria-label="Next page"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            )}
        </section>
    );
};

export default MagazineGrid;
