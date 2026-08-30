"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { magazineData, slugify } from "@/utils/magazineData";
import styles from "./styles.module.css";

const PAGE_SIZE = 6;

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
                        <Link href={`/magazines/${slugify(magazine.title)}`}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={magazine.image}
                                    alt={magazine.title}
                                    width={480}
                                    height={360}
                                    className={styles.image}
                                />
                            </div>
                        </Link>

                        <div className={styles.cardBody}>
                            <h3>
                                <Link href={`/magazines/${slugify(magazine.title)}`}>
                                    {magazine.title}
                                </Link>
                            </h3>
                            <p>{magazine.description}</p>
                            <hr />
                            <Link
                                href={`/magazines/${slugify(magazine.title)}`}
                                className={styles.downloadLink}
                            >
                                Preview
                                <Eye size={16} strokeWidth={2} />
                            </Link>
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
