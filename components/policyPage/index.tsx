import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const PolicyPage = () => {
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
        <h1 className={styles.heading}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: August 24, 2026</p>

        <div className={styles.summary}>
          <p className={styles.summaryLabel}>Summary</p>
          <p>
            To function correctly, this app requires certain essential
            permissions. With your consent, we can also use analytics to improve
            your experience and app performance. By clicking &quot;Accept,&quot;
            you agree to our data and privacy policies as described in our
            Privacy Policy. You can manage your permissions in Settings at any
            time.
          </p>
        </div>

        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy describes how Geotela (referred to as
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses,
            stores, and shares your personal information when you use the
            Geotela mobile application and our related services (collectively,
            the &quot;Services&quot;). We are committed to protecting your
            privacy and handling your data with transparency. By using our
            Services, you agree to the collection and use of your information as
            described in this policy. If you do not agree, please do not use our
            Services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>
          <p>
            We collect information to provide and improve our Services. The
            types of data we collect depend on how you use our app.
          </p>

          <h3>A. Information You Provide to Us</h3>
          <ul>
            <li>
              <strong>Account Information:</strong> When you create an account,
              we collect your name, email address, phone number, location and a
              secure password. If you use our land investment features, we may
              also collect business information such as company name.
            </li>
            <li>
              <strong>Profile Information:</strong> You may choose to provide
              additional information for your profile, such as a profile
              picture, or birthdays.
            </li>
            <li>
              <strong>Communication Data:</strong> We collect information from
              your communications with us, such as support requests, feedback,
              and other inquiries.
            </li>
          </ul>

          <h3>B. Information Collected Automatically</h3>
          <ul>
            <li>
              <strong>Location Data:</strong> This is a core function of the
              Geotela app. We collect your precise or approximate location data
              from your mobile device. This includes real-time and historical
              GPS coordinates. We may collect this data even when the app is in
              the background or not in active use to enable features like
              continuous tracking and geofencing. We will ask for your consent
              before collecting this data.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect information about how you
              use our app, such as the features you access, the time and
              duration of your sessions, and any errors or crashes. This data
              helps us improve app performance and user experience.
            </li>
            <li>
              <strong>Device Information:</strong> We collect information about
              your mobile device, including the device type, operating system,
              unique device identifiers (e.g., IMEI), mobile network
              information, and IP address.
            </li>
            <li>
              <strong>Log Data:</strong> Our servers automatically record
              information when you use our app. This includes your IP address,
              browser type, and the date and time of your request.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>
              <strong>To Provide Our Services:</strong> To enable the core
              functions of the app, such as real-time location tracking,
              creating geofences, sending alerts, and recommending events,
              investment opportunities or location history.
            </li>
            <li>
              <strong>To Improve and Develop the Services:</strong> We analyze
              usage data to understand how our app is used, identify areas for
              improvement, and develop new features.
            </li>
            <li>
              <strong>To Communicate with You:</strong> To send you important
              notifications about your account, security alerts, and updates to
              our Services. With your consent, we may also send you marketing
              communications.
            </li>
            <li>
              <strong>To Ensure Security and Prevent Fraud:</strong> We use
              device and usage data to monitor for and prevent fraudulent
              activity and to protect the security of our users and Services.
            </li>
            <li>
              <strong>To Comply with Legal Obligations:</strong> We may use and
              disclose your information as required by law, such as in response
              to a court order or subpoena.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell your personal data. We may share your information
            with the following third parties:
          </p>
          <ul>
            <li>
              <strong>With Other Users:</strong> Your location and other profile
              information may be visible to other users within your designated
              group or community, as enabled by the app&apos;s features.
            </li>
            <li>
              <strong>Service Providers:</strong> We may use third-party
              companies and individuals to facilitate our Services. These
              service providers have access to your information only to perform
              these tasks on our behalf and are obligated not to disclose or use
              it for any other purpose. This may include cloud hosting
              providers, analytics services, and customer support platforms.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> We may disclose your
              information if required to do so by law or in the good faith
              belief that such action is necessary to comply with legal
              processes, protect our rights or property, or ensure the safety of
              our users or the public.
            </li>
            <li>
              <strong>In a Business Transfer:</strong> If Geotela is involved in
              a merger, acquisition, or asset sale, your information may be
              transferred as part of that transaction.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information for as long as your account is
            active or as needed to provide you with the Services. We will also
            retain and use your information as necessary to comply with our
            legal obligations, resolve disputes, and enforce our agreements.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Your Rights and Choices</h2>
          <p>
            Depending on your location and applicable law (e.g., GDPR, CCPA),
            you may have the following rights regarding your data:
          </p>
          <ul>
            <li>
              <strong>Access:</strong> You can request a copy of the personal
              data we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> You can request that we correct any
              inaccurate or incomplete information.
            </li>
            <li>
              <strong>Deletion:</strong> You can request that we delete your
              personal data.
            </li>
            <li>
              <strong>Data Portability:</strong> You can request a copy of your
              personal data in a structured, machine-readable format.
            </li>
            <li>
              <strong>Right to Withdraw Consent:</strong> You can withdraw your
              consent for location tracking or other data collection at any time
              through your device settings. Please be aware that withdrawing
              consent for location data will significantly impact the
              functionality of the Services.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal information from unauthorized
            access, use, or disclosure. These measures include data encryption,
            secure servers, and access controls. However, no method of
            transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Children&apos;s Privacy</h2>
          <p>
            Our Services are not intended for use by children under the age of
            13. We do not knowingly collect personal information from children
            under 13. If you believe we have collected such information, please
            contact us immediately.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new policy on this page and
            updating the &quot;Last Updated&quot; date. We encourage you to
            review this policy periodically.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:{" "}
            <a href="mailto:hello@geotela.com">hello@geotela.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PolicyPage;
