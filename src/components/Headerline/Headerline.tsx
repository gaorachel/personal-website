import { ReactNode } from "react";

import styles from "./Headerline.module.css";

export const Headerline = ({ children }: { children: ReactNode }) => {
  return <h1 className={styles.headerline}> {children} </h1>;
};
