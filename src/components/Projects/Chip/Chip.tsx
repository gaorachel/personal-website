import style from "./Chip.module.css";

export function Chip({ children, props }: any) {
  return <button className={style.chip}> {children} </button>;
}
