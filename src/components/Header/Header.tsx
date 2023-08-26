import Link from "next/link";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="#about" className={styles.tab}>
        About
      </Link>
      <Link href="#projects" className={styles.tab}>
        Projects
      </Link>
      <Link href="#experience" className={styles.tab}>
        Experience
      </Link>
      <Link href="#contact" className={styles.tab}>
        Contact
      </Link>
      <Link href="#cv" className={styles.tab}>
        CV
      </Link>
    </header>
  );
}
