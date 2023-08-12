import styles from "./About.module.css";

export function About() {
  const aboutText = `Back in 2020, I started learning Python to 'automate boring stuff' in my operation job. I was genuinely surprised by the power of programming and began exploring data analysis, which ultimately drove me to pursue a career as an analyst. Now, I spend my days writing SQL, building dashboards while dedicating my free time to learning web development.

I truly enjoy visualising things and making users' and business people's jobs easier. Building something from scratch is incredibly fun for me. As my next step, I aspire to become a frontend engineer to create more user interfaces!

When I'm not at the computer, I like to lift weights, wander around the city, and occasionally indulge in urban sketching or playing with Lego.`;

  return (
    <>
      <div className={styles.about}> {aboutText} </div>
    </>
  );
}
