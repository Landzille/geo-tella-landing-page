import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const SupportPage = () => {
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

      <div className={styles.content}>
        <h1 className={styles.heading}>Support</h1>
        <p className={styles.lede}>
          Questions, problems, or something that needs reporting. We read every
          message.
        </p>

        <div className={styles.contact}>
          <p className={styles.contactLabel}>Email us</p>
          <a className={styles.mail} href="mailto:hello@geotela.com">
            hello@geotela.com
          </a>
          <p className={styles.contactNote}>
            We reply within 24 hours on working days. If you are reporting
            content or a safety concern, put <strong>Urgent</strong> in the
            subject line and we will look at it first.
          </p>
        </div>

        <section className={styles.section}>
          <h2>Common questions</h2>

          <details className={styles.faq}>
            <summary className={styles.faqSummary}>
              How do I report an insight?
            </summary>
            <div className={styles.faqBody}>
              <p>
                Open the insight and tap the flag icon at the top right. Choose
                a reason and submit. Reports go to our moderation team and we
                act on them within 24 hours.
              </p>
              <p>
                You do not need to contact us separately after reporting, though
                you can if you want a reply.
              </p>
            </div>
          </details>

          <details className={styles.faq}>
            <summary className={styles.faqSummary}>
              Why is my feed empty or nearly empty?
            </summary>
            <div className={styles.faqBody}>
              <p>
                Geotela shows what has been contributed near you, so coverage
                varies by area. If your surroundings are quiet, use the search
                field on the Map tab to look at any city or region.
              </p>
              <p>
                You can also widen your interests under You, then Edit
                Preferences, which lets more through.
              </p>
            </div>
          </details>

          <details className={styles.faq}>
            <summary className={styles.faqSummary}>
              Why does Geotela ask for my location?
            </summary>
            <div className={styles.faqBody}>
              <p>
                To show what is happening around you and to fill in coordinates
                when you contribute something. Nothing is tracked in the
                background.
              </p>
              <p>
                The app works without location access. You can search for a
                place by name instead.
              </p>
            </div>
          </details>

          <details className={styles.faq}>
            <summary className={styles.faqSummary}>
              How does verification work?
            </summary>
            <div className={styles.faqBody}>
              <p>
                Anyone can contribute an insight. Other users then attest to it
                or refute it, and the status you see on each insight reflects
                that. An insight marked Fully Verified has been confirmed by
                several people.
              </p>
              <p>
                If you believe something verified is wrong, report it.
                Verification is a signal, not a guarantee.
              </p>
            </div>
          </details>

          <details className={styles.faq}>
            <summary className={styles.faqSummary}>
              Something in an insight is inaccurate. What now?
            </summary>
            <div className={styles.faqBody}>
              <p>
                Use the refute option on the insight, or report it if it is
                misleading rather than merely out of date. If it concerns you or
                your business, email us and we will review it directly.
              </p>
            </div>
          </details>

          <details className={styles.faq}>
            <summary className={styles.faqSummary}>
              How do I change my interests or experience?
            </summary>
            <div className={styles.faqBody}>
              <p>
                Go to <strong>You</strong>, then Edit Preferences for interests.
                To switch between experiences, use{" "}
                <strong>Switch Experience</strong> on the same screen.
              </p>
            </div>
          </details>

          <details className={styles.faq}>
            <summary className={styles.faqSummary}>
              How do I delete my account?
            </summary>
            <div className={styles.faqBody}>
              <p>
                In the app, go to <strong>You</strong>, then Settings, then
                Delete account. Deletion is permanent.
              </p>
              <p>
                Full details, including what is kept and for how long, are on
                our <Link href="/delete-account">account deletion page</Link>.
              </p>
            </div>
          </details>

          <details className={styles.faq}>
            <summary className={styles.faqSummary}>
              The app crashed or something is broken.
            </summary>
            <div className={styles.faqBody}>
              <p>
                Email <a href="mailto:hello@geotela.com">hello@geotela.com</a>{" "}
                and tell us your device, your operating system version, and what
                you were doing when it happened. A screenshot helps a great
                deal.
              </p>
            </div>
          </details>
        </section>

        <section className={styles.section}>
          <h2>Community rules, briefly</h2>
          <p>
            Contribute things you have seen or can stand behind. No harassment,
            no hate speech, no sexual content, no impersonation, and nothing
            that puts anyone at risk. We remove content that breaks these rules
            and suspend accounts that keep doing it.
          </p>
        </section>

        <div className={styles.footerLinks}>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/delete-account">Delete account</Link>
          <Link href="mailto:hello@geotela.com">hello@geotela.com</Link>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
