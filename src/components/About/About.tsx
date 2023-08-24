/**
 * Have to import nivo components like this
 * @see https://github.com/plouc/nivo/issues/2310
 */
import dynamic from "next/dynamic";
const ResponsiveLine = dynamic(() => import("@nivo/line").then((m) => m.ResponsiveLine), { ssr: false });
import { Point } from "@nivo/line";

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

function SkillChart() {
  const data = [
    {
      id: "skills",
      data: [
        {
          x: "2020-01-01",
          y: "python",
        },
        {
          x: "2020-02-01",
          y: "pandas",
        },
        {
          x: "2020-02-15",
          y: "numpy",
        },
        {
          x: "2020-06-15",
          y: "automate boring stuff",
        },
        {
          x: "2020-10-01",
          y: "sql",
        },
        {
          x: "2020-12-01",
          y: "data analysis",
        },
        {
          x: "2023-02-01",
          y: "web development",
        },
        {
          x: "2023-02-02",
          y: "javascript",
        },
        {
          x: "2023-02-10",
          y: "html",
        },
        {
          x: "2023-03-25",
          y: "react",
        },
        {
          x: "2023-04-11",
          y: "css",
        },

        {
          x: "2023-06-01",
          y: "typescript",
        },
        {
          x: "2023-07-15",
          y: "nextjs",
        },
      ],
    },
  ];

  function CustomTooltip({ point }: { point: Point }) {
    const isFirstHalf = point.index < data[0].data.length / 2;
    return (
      <div
        style={{
          padding: "5px",
          position: "absolute",
          left: isFirstHalf ? 30 : 0,
          right: isFirstHalf ? 0 : 30,
        }}
      >
        {point.data.y as string}
      </div>
    );
  }

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 25, right: 25, bottom: 15, left: 25 }} // make sure showing up full chart
      xFormat="time:%Y-%m-%d"
      xScale={{
        format: "%Y-%m-%d",
        precision: "month",
        type: "time",
        useUTC: false,
      }}
      yScale={{
        type: "band",
      }}
      axisBottom={{
        // format: "%b %Y",
        tickSize: 0,
        // tickValues: "every 6 months",
        // tickRotation: -37,
        renderTick: () => <g />, // we don't want ticks to show
      }}
      axisLeft={{
        tickSize: 0,
        renderTick: () => <g />, // we don't want ticks to show
      }}
      curve="monotoneX"
      enableGridX={false}
      enableGridY={false}
      useMesh
      // enablePointLabel
      // pointSize={8}

      pointSymbol={(data) => {
        if (data.datum.y === "python") return <PythonIcon />;
        if (data.datum.y === "javascript") return <JavaScriptIcon />;
        if (data.datum.y === "typescript") return <TypeScriptIcon />;
        if (data.datum.y === "numpy") return <NumPyIcon />;
        if (data.datum.y === "pandas") return <PandasIcon />;
        if (data.datum.y === "sql") return <SQLIcon />;
        if (data.datum.y === "react") return <ReactIcon />;
        if (data.datum.y === "html") return <HTMLIcon />;
        if (data.datum.y === "css") return <CSSIcon />;
        if (data.datum.y === "automate boring stuff") return <> Automate Boring Stuff </>;
        if (data.datum.y === "nextjs") return <NextJSIcon />;
      }}
      // enablePointLabel
      // pointLabelYOffset={100}
      tooltip={CustomTooltip}
      enableCrosshair={false}
      colors="#eceff4" // --snow-storm-3
    />
  );
}

export function About() {
  const aboutText = `Back in 2020, I started learning Python to 'automate boring stuff' in my operation job. I was genuinely surprised by the power of programming and began exploring data analysis, which ultimately drove me to pursue a career as an analyst. Now, I spend my days writing SQL, building dashboards while dedicating my free time to learning web development.

I truly enjoy visualising things and making users' and business people's jobs easier. Building something from scratch is incredibly fun for me. As my next step, I aspire to become a frontend engineer to create more user interfaces!

When I'm not at the computer, I like to lift weights, wander around the city, and occasionally indulge in urban sketching or playing with Lego.`;

  return (
    <div className={styles.about}>
      <div className={styles.skillChart}>
        <SkillChart />
      </div>
      <div className={styles.aboutText}> {aboutText} </div>
    </div>
  );
}
