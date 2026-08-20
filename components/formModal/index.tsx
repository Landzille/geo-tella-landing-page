"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ttqTrack, generateEventId } from "@/utils/tiktok";
import { fbqTrack } from "@/utils/meta";

interface InvestorModalProps {
  onClose: () => void;
}

export default function InvestorModal({ onClose }: InvestorModalProps) {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async () => {
    if (!firstName || !email) return;

    setStatus("loading");

    try {
      const eventId = generateEventId();
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName,
          listId: 10,
          eventId,
          url: window.location.href,
        }),
      });

      if (!res.ok) throw new Error("Failed");
      window.gtag?.('event', 'investor_pack_click');
      ttqTrack("Lead", { content_name: "investor_pack_click" }, eventId);
      fbqTrack("Lead", { content_name: "investor_pack_click" });
      fbqTrack("CompleteRegistration", { content_name: "investor_pack_click" });
      setStatus("success");

      setTimeout(() => {
        handleDownload();
        onClose();
        router.push("/");
      }, 2000);
    } catch {
      setStatus("error");
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/investors-starter-pack.pdf";
    link.download = "GeoTela-Investors-Starter-Pack.pdf";
    link.click();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <div className={styles.inner}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              The Market Is Moving. Get In Before It Does.
            </h2>
            <p className={styles.body}>
              1.2 million visitors. 16 cities. Zero paid acquisition. One
              launch. The GeoTela Investors Starter Pack has everything —
              traction data, verification model, and the thesis behind the
              world&apos;s first storytelling navigation platform.
            </p>

            {status === "success" ? (
              <div className={styles.successState}>
                <p className={styles.successMsg}>
                  You&apos;re in! Your Investors Starter Pack is ready.
                </p>
                <button className={styles.cta} onClick={handleDownload}>
                  Download Starter Pack ↓
                </button>
              </div>
            ) : (
              <>
                <div className={styles.fields}>
                  <div className={styles.field}>
                    <label className={styles.label}>First name</label>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="e.g john"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Email</label>
                    <input
                      className={styles.input}
                      type="email"
                      placeholder="e.g johndoe@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p className={styles.errorMsg}>
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  className={styles.cta}
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                >
                  {status === "loading"
                    ? "Submitting..."
                    : "Download Investors Starter Pack"}
                </button>
              </>
            )}
          </div>

          <div className={styles.right}>
            <div className={styles.pdfMockup}>
              <Image
                src="/assets/mockup.png"
                width={1000}
                height={1000}
                alt="mockup image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
