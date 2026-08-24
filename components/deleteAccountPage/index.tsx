import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const deletedData = [
  ["Name, email address and profile details", "On request"],
  ["Account credentials", "On request"],
  ["Your saved interests and preferences", "On request"],
  ["Location history associated with your account", "On request"],
  ["Photos you uploaded", "On request"],
  ["Your verification activity", "On request"],
];

const retainedData = [
  [
    "Places and happenings you submitted that other users have verified. These remain on Geotela but are no longer linked to you or to any identifying detail.",
    "Indefinitely, anonymised",
  ],
  [
    "Payment and transaction records, where you have made a purchase. Required by tax and accounting law.",
    "7 years",
  ],
  [
    "Records of content reports and moderation decisions, kept for safety and abuse prevention.",
    "12 months, anonymised",
  ],
  [
    "Backup copies, which are overwritten on our normal backup cycle.",
    "Up to 30 days",
  ],
];

const DeleteAccountPage = () => {
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
        <h1 className={styles.heading}>Delete your Geotela account</h1>
        <p className={styles.intro}>
          This page explains how to delete your Geotela account, what data is
          removed, and what is kept.
        </p>
        <p className={styles.intro}>
          Geotela is published by Geotela Limited Liability Company. You can
          delete your account at any time, either from inside the app or by
          writing to us.
        </p>
        <p className={styles.updated}>Last updated 21 August 2026</p>

        <section className={styles.section}>
          <h2>Delete from inside the app</h2>
          <ol className={styles.steps}>
            <li>Open Geotela and sign in.</li>
            <li>Go to You.</li>
            <li>Tap Settings.</li>
            <li>Tap Delete account.</li>
            <li>
              Confirm. Your account is closed immediately and cannot be
              recovered.
            </li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>If you no longer have the app</h2>
          <p>
            Email <a href="mailto:hello@geotela.com">hello@geotela.com</a>{" "}
            from the address on your account, with the subject line{" "}
            <strong>Delete my account</strong>.
          </p>
          <p>
            We will confirm the request within 7 days and complete deletion
            within 30 days. We may ask one question to confirm the account is
            yours before we proceed.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What is deleted</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>When</th>
                </tr>
              </thead>
              <tbody>
                {deletedData.map(([data, when]) => (
                  <tr key={data}>
                    <td>{data}</td>
                    <td>{when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>What is kept, and for how long</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Retention</th>
                </tr>
              </thead>
              <tbody>
                {retainedData.map(([data, retention]) => (
                  <tr key={data}>
                    <td>{data}</td>
                    <td>{retention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className={styles.warning}>
          <p>
            Deleting your account is permanent. We cannot restore an account,
            its history, or its contributions once deletion is complete.
          </p>
        </div>

        <section className={styles.section}>
          <h2>Questions</h2>
          <p>
            Write to <a href="mailto:hello@geotela.com">hello@geotela.com</a>.
            Our full privacy policy is at{" "}
            <Link href="/privacy">geotela.com/privacy</Link>.
          </p>
        </section>

        <p className={styles.footerNote}>
          Geotela · published by Geotela Limited Liability Company
          <br />
          Last updated 21 August 2026
        </p>
      </div>
    </div>
  );
};

export default DeleteAccountPage;
