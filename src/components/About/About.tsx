/**
 * Have to import nivo components like this
 * @see https://github.com/plouc/nivo/issues/2310
 */
import dynamic from "next/dynamic";
const ResponsiveLine = dynamic(() => import("@nivo/line").then((m) => m.ResponsiveLine), { ssr: false });

import styles from "./About.module.css";

function SkillChart() {
  const data = [
    {
      id: "skills",
      color: "hsl(191, 70%, 50%)",
      data: [
        {
          x: "2020-01-01",
          y: 107,
        },
        {
          x: "2020-01-01",
          y: 107,
        },
      ],
    },
  ];

  return (
    <ResponsiveLine
      data={data}
      xScale={{
        type: "point",
        // format: "%Y-%m-%d",
        // precision: "Month",
        // type: "time",
      }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
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
