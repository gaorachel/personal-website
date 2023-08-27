import JavaScriptIcon from "./skillIcons/javascript.svg";
import NumPyIcon from "./skillIcons/numpy.svg";
import PandasIcon from "./skillIcons/pandas.svg";
import TypeScriptIcon from "./skillIcons/typescript.svg";
import PythonIcon from "./skillIcons/python.svg";
import BigQueryIcon from "./skillIcons/bigQuery.svg";
import SQLIcon from "./skillIcons/sql.svg";
import ReactIcon from "./skillIcons/react.svg";
import HTMLIcon from "./skillIcons/html.svg";
import CSSIcon from "./skillIcons/css.svg";
// import ReactIcon from "./skillIcons/react.svg";
import NextJSIcon from "./skillIcons/nextjs.svg";

import styles from "./About.module.css";

export function About() {
  return (
    <section className={styles.about} id="about">
      <h1 className={styles.name}> Rachel Gao </h1>
      <h2 className={styles.intro}> I am a self taught developer and this is my journey </h2>
      <div className={styles.icons}>
        <JavaScriptIcon /> <TypeScriptIcon /> <ReactIcon /> <HTMLIcon /> <CSSIcon /> <NextJSIcon />
        <SQLIcon />
        <BigQueryIcon style={{ height: "22px", width: "22px" }} />
        <PythonIcon />
        {/* <PandasIcon /> */}
        {/* <NumPyIcon /> */}
      </div>
    </section>
  );
}
