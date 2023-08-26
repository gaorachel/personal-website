import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.css";

export function Header() {
  const router = useRouter();
  const headerTabs = [
    {
      label: "About",
      link: "#about",
    },
    {
      label: "Projects",
      link: "#projects",
    },
    {
      label: "Experience",
      link: "#experience",
    },
  ];

  return (
    <header className={styles.header}>
      {headerTabs.map((tab) => {
        return (
          <Link
            key={tab.label}
            href={tab.link}
            className={styles.tab}
            style={{
              borderBottom: tab.link === router.asPath.slice(1) ? "2px solid var(--aurora-3)" : "none",
              fontWeight: tab.link === router.asPath.slice(1) ? "700" : "400",
            }}
          >
            {tab.label}
          </Link>
        );
      })}
    </header>
  );
}
