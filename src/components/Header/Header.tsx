import Link from "next/link";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import { useWindowSize } from "@uidotdev/usehooks";

import styles from "./Header.module.css";
import { useState } from "react";

const handleClick = () => {
  return <div className={styles.header}> </div>;
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { width } = useWindowSize();
  if (!width) return null;

  const headerTabs = [
    {
      label: "About",
      link: "#about",
    },
    {
      label: "My journey",
      link: "#journey",
    },
    {
      label: "Projects",
      link: "#projects",
    },
  ];

  const HeaderTabs = () => {};

  const MobileMode = () => {
    return (
      <div className={styles.menu} style={{ width: isOpen ? 105 : 0 }}>
        {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
        {!isOpen && (
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={styles.menuButton}
          >
            <FiMenu className={styles.menuIcon} />
          </button>
        )}
        {isOpen &&
          headerTabs.map((tab) => {
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
      </div>
    );
  };

  const WebMode = () => {
    return (
      <div className={styles.header}>
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
      </div>
    );
  };

  return width < 550 ? <MobileMode /> : <WebMode />;
}
