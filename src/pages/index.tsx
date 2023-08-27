import { Header } from "@/components/Header/Header";
import { About } from "@/components/About/About";
import { Projects } from "@/components/Projects/Projects";
import { Experience } from "@/components/Experience/Experience";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Journey } from "@/components/Journey/Journey";

import styles from "./index.module.css";
import "react-tooltip/dist/react-tooltip.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.body}>
        <main className={styles.main}>
          <section id="about">{/* <About /> */}</section>
          <section id="journey">
            <Journey />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </main>
        <Sidebar />
      </div>
    </>
  );
}
