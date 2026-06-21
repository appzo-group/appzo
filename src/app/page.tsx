import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <main className={styles.container}>
          <h1 className={styles.title}>Welcome to Appzo</h1>
          <p className={styles.text}>
            Appzo powers backend services, structured content delivery,
            and secure resource management for modern applications.
          </p>


        </main>

        <section className={styles.cards}>
          <a
            className={styles.card}
            href="https://agent.appzo.app/"
            aria-label="Appzo Registered Agent — U.S. LLC formation and registered agent service for Bangladesh entrepreneurs"
          >
            <span className={styles.cardIcon} aria-hidden="true">
              <Image
                src="/images/Appzo-Registered-Agent-logo.jpg"
                alt="Appzo Registered Agent Logo"
                width={128}
                height={128}
                className={styles.cardIcon}
              />
            </span>
            <h2 className={styles.cardTitle}>
              Helping Bangladeshi Entrepreneurs Establish U.S. LLCs and Grow
              Globally
            </h2>
            <p className={styles.cardText}>
              Launch your U.S. business from Bangladesh with professional U.S.
              LLC formation, registered agent service, EIN assistance,
              compliance support, and business growth guidance.
            </p>
            <span className={styles.cardCta}>
              Explore Service <span aria-hidden="true">→</span>
            </span>
          </a>

          <a
            className={styles.card}
            href="https://tools.appzo.app/"
            aria-label="Appzo Tools — free online image converter, compressor, and resize images online"
          >
            <span className={styles.cardIcon} aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </span>
            <h2 className={styles.cardTitle}>
              Free Online Image Tools — Convert, Resize &amp; Compress
            </h2>
            <p className={styles.cardText}>
              Use free online tools to convert, resize, compress, and optimize
              images quickly. A browser-based image converter and image
              compressor — no installation required.
            </p>
            <span className={styles.cardCta}>
              Use Free Tools <span aria-hidden="true">→</span>
            </span>
          </a>
        </section>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} Appzo — All rights reserved.
        </footer>
      </div>
    </div>
  );
}
