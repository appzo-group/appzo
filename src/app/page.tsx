import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <h1 className={styles.title}>Welcome to appzo.app</h1>
        <p className={styles.text}>
          appzo.app is a modern digital resource and file hosting platform built
          for speed, reliability, and long-term scalability.
        </p>
        <p className={styles.text}>
          This domain powers backend services, structured content delivery, and
          secure resource management for modern applications.
        </p>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} appzo.app — All rights reserved.
        </footer>
      </main>
    </div>
  );
}
