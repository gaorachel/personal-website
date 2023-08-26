import { BsLinkedin, BsGithub, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Tooltip } from "react-tooltip";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Tooltip id="tooltips" place="left" />
      <a href="https://www.linkedin.com/in/rachel-g-1b2163129/" className={styles.icon}>
        <BsLinkedin size={25} data-tooltip-id="tooltips" data-tooltip-content="LinkedIn" />
      </a>
      <a href="https://github.com/gaorachel" className={styles.icon}>
        <BsGithub size={25} data-tooltip-id="tooltips" data-tooltip-content="GitHub" />
      </a>
      <a href="mailto:rachelgao101@gmail.com" className={styles.icon}>
        <MdEmail size={25} data-tooltip-id="tooltips" data-tooltip-content="Contact me" />
      </a>
      <a href="/Rachel Gao Resume.pdf" className={styles.icon}>
        <BsFillFileEarmarkTextFill size={25} data-tooltip-id="tooltips" data-tooltip-content="Resume" />
      </a>
    </div>
  );
}
