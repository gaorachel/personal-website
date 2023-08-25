import { ReactNode } from "react";
import style from "./Chip.module.css";

export function Chip({ children }: { children: ReactNode }) {
  return <button className={style.chip}> {children} </button>;
}
