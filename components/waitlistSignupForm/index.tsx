"use client";
import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import styles from "./styles.module.css";

type Props = {
    listId: number;
    ctaLabel: string;
    gaEvent: string;
    viewEvent: string;
    theme: "dark" | "light";
    pdfUrl?: string;
};

const WaitlistSignupForm = ({ listId, ctaLabel, gaEvent, viewEvent, theme, pdfUrl }: Props) => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        window.gtag?.("event", viewEvent);
    }, [viewEvent]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, firstName, listId }),
            });
            if (!res.ok) throw new Error("Failed");
            window.gtag?.("event", gaEvent);
            if (pdfUrl) {
                const a = document.createElement("a");
                a.href = pdfUrl;
                a.download = "GeoTela-Investors-Starter-Pack.pdf";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
            setSuccess(true);
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`${styles.panel} ${theme === "dark" ? styles.panelDark : styles.panelLight}`}>
            {success ? (
                <div className={styles.success}>
                    <CheckCircle
                        size={48}
                        strokeWidth={1.5}
                        color={theme === "dark" ? "#7ddfb0" : "#005629"}
                    />
                    <h3 className={styles.successTitle}>You&apos;re on the list!</h3>
                    <p className={styles.successDesc}>
                        Your invite lands the moment we open the doors.
                    </p>
                    <button
                        className={styles.resetBtn}
                        data-theme={theme}
                        onClick={() => {
                            setSuccess(false);
                            setFirstName("");
                            setEmail("");
                        }}
                    >
                        Go back
                    </button>
                </div>
            ) : (
                <>
                    <div className={styles.formHeader}>
                        <h3 className={styles.formTitle}>Join the waitlist</h3>
                        <p className={styles.formSubtitle}>
                            Takes 15 seconds. Your invite lands the moment we open the doors.
                        </p>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="firstName">
                                First name
                            </label>
                            <input
                                id="firstName"
                                className={styles.input}
                                data-theme={theme}
                                type="text"
                                placeholder="e.g john"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                className={styles.input}
                                data-theme={theme}
                                type="email"
                                placeholder="e.g johndoe@gmail.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {error && <p className={styles.error}>{error}</p>}

                        <button
                            type="submit"
                            className={styles.cta}
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : ctaLabel}
                        </button>

                        <p className={styles.disclaimer}>
                            <em>
                                Free to join. No spam, just your invite and the occasional
                                ground-truth drop.
                            </em>
                        </p>

                        <div className={styles.perks} data-theme={theme}>
                            <span>Free launch tokens</span>
                            <span>Founding Investor badge</span>
                            <span>First access</span>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};

export default WaitlistSignupForm;
