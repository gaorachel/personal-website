/**
 * Have to import nivo components like this
 * @see https://github.com/plouc/nivo/issues/2310
 */
import dynamic from "next/dynamic";
const ResponsiveLine = dynamic(() => import("@nivo/line").then((m) => m.ResponsiveLine), { ssr: false });

import styles from "./About.module.css";
import { Point } from "@nivo/line";

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
          x: "2020-06-01",
          y: "openpyxl",
        },
        {
          x: "2020-06-15",
          y: "automate bring stuff",
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
          x: "2023-02-01",
          y: "javascript",
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
      margin={{ top: 15, right: 15, bottom: 15, left: 15 }} // make sure showing up full chart
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
      useMesh={true}
      tooltip={CustomTooltip}
      pointSize={8}
      enableCrosshair={false}
      colors="#b48ead" // --aurora-5
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
