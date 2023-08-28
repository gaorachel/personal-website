import JavaScriptIcon from "./skillIcons/javascript.svg";
import TypeScriptIcon from "./skillIcons/typescript.svg";
import PythonIcon from "./skillIcons/python.svg";
import BigQueryIcon from "./skillIcons/bigquery.svg";
import SQLIcon from "./skillIcons/sql.svg";
import ReactIcon from "./skillIcons/react.svg";
import HTMLIcon from "./skillIcons/html.svg";
import CSSIcon from "./skillIcons/css.svg";
import NextJSIcon from "./skillIcons/nextjs.svg";

import styles from "./About.module.css";
import { Tooltip } from "react-tooltip";

export function About() {
  return (
    <section className={styles.about} id="about">
      <h1 className={styles.name}> Rachel Gao </h1>
      <h2 className={styles.intro}> I am a self taught developer and this is my journey </h2>
      <Tooltip id="skill-icons" place="bottom" />
      <div className={styles.icons}>
        <JavaScriptIcon data-tooltip-id="skill-icons" data-tooltip-content="JavaScript" />
        <TypeScriptIcon data-tooltip-id="skill-icons" data-tooltip-content="TypeScript" />
        <ReactIcon data-tooltip-id="skill-icons" data-tooltip-content="React" />
        <HTMLIcon data-tooltip-id="skill-icons" data-tooltip-content="HTML" />
        <CSSIcon data-tooltip-id="skill-icons" data-tooltip-content="CSS" />
        <NextJSIcon data-tooltip-id="skill-icons" data-tooltip-content="NextJS" />
        <SQLIcon data-tooltip-id="skill-icons" data-tooltip-content="SQL" />
        <BigQueryIcon data-tooltip-id="skill-icons" data-tooltip-content="BigQuery" />
        <PythonIcon data-tooltip-id="skill-icons" data-tooltip-content="Python" />
      </div>
    </section>
  );
}
