import JavaScriptIcon from "./skillIcons/javascript.svg";
import TypeScriptIcon from "./skillIcons/typescript.svg";
import PythonIcon from "./skillIcons/python.svg";
import BigQueryIcon from "./skillIcons/bigquery.svg";
import SQLIcon from "./skillIcons/sql.svg";
import ReactIcon from "./skillIcons/react.svg";
import HTMLIcon from "./skillIcons/html.svg";
import CSSIcon from "./skillIcons/css.svg";
import NextJSIcon from "./skillIcons/next.svg";
import GitIcon from "./skillIcons/git.svg";
import JestIcon from "./skillIcons/jest.svg";
import Tailwind from "./skillIcons/tailwind.svg";

import styles from "./About.module.css";
import { Tooltip } from "react-tooltip";

export function About() {
  return (
    <section className={styles.about} id="about">
      <h1 className={styles.name}> Rachel Gao </h1>
      <h2 className={styles.intro}> I am a self taught developer and this is my journey </h2>
      <div className={styles.desc}>
        <p>
          {`Back in 2020, I started learning Python to "automate boring stuff" in my operation job. I was genuinely
          surprised by the power of programming and began exploring data analysis. Now, I spend my days writing SQL,
          building dashboards while dedicating my free time to learning web development. I truly enjoy visualising
          things and making users' and business people's jobs easier. As my next step, I aspire to become a frontend
          engineer to create more!`}
        </p>
        <br />
        <p>
          {` When I'm not at the computer, I like to lift weights, wander around the city, and occasionally indulge in
          urban sketching or playing with Lego.`}
        </p>
      </div>
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
        <GitIcon data-tooltip-id="skill-icons" data-tooltip-content="Git" />
        <JestIcon data-tooltip-id="skill-icons" data-tooltip-content="Jest" />
        <Tailwind data-tooltip-id="skill-icons" data-tooltip-content="Tailwind" />
      </div>
    </section>
  );
}
