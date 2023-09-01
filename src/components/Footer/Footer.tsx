import Link from "next/link";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.section}>
      <p>
        {" "}
        Created with{" "}
        <Link href="https://www.nordtheme.com/" className={styles.link}>
          Nord{" "}
        </Link>
        colours.
      </p>
      <p>
        Built with{" "}
        <Link href="https://nextjs.org/" className={styles.link}>
          NextJS{" "}
        </Link>
        and deployed on{" "}
        <Link href="https://vercel.com/" className={styles.link}>
          Vercel
        </Link>
        .
      </p>
      <p> © Rachel Gao 2023 </p>
    </footer>
  );
}
