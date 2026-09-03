"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ChevronLeft, Share2, Download, Check } from "lucide-react";
import { slugify, getMagazineLabel, type Magazine } from "@/utils/magazineData";
import styles from "./styles.module.css";

const PdfViewer = dynamic(() => import("@/components/pdfViewer"), {
  ssr: false,
  loading: () => <div className={styles.previewFallback}>Loading preview…</div>,
});

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

const copyToClipboard = async (url: string) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(url);
    return;
  }
  // Fallback for browsers / in-app webviews without the Clipboard API.
  const textarea = document.createElement("textarea");
  textarea.value = url;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(textarea);
  if (!ok) throw new Error("copy command failed");
};

const MagazinePreviewPage = ({ magazine, others }: Props) => {
  const [copied, setCopied] = useState(false);
  const [shareError, setShareError] = useState(false);
  const magazineLabel = getMagazineLabel(magazine.title);

  const handleShare = async () => {
    const url = window.location.href;
    const shareData = { title: magazine.title, text: magazine.description, url };

    if (navigator.share) {
      try {
        if (!navigator.canShare || navigator.canShare(shareData)) {
          await navigator.share(shareData);
          return;
        }
      } catch (err) {
        if ((err as Error)?.name === "AbortError") return; // user cancelled
        // otherwise fall through to the clipboard fallback below
      }
    }

    try {
      await copyToClipboard(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setShareError(true);
      setTimeout(() => setShareError(false), 2500);
    }
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
              <Link
                href={`/magazines/${slugify(magazine.title)}/read`}
                target="_blank"
                className={styles.previewOpen}
              >
                Open full preview
              </Link>
            </div>
            <PdfViewer
              pdfUrl={magazine.pdfUrl}
              magazineId={magazine.id}
              magazineTitle={magazine.title}
            />
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              onClick={handleShare}
              className={`${styles.actionBtn} ${styles.shareBtn}`}
            >
              {copied ? <Check size={16} /> : <Share2 size={16} />}
              {copied ? "Copied" : shareError ? "Couldn't share" : "Share"}
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
