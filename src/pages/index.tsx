import { Header } from "@/components/Header/Header";
import { About } from "@/components/About/About";
import { Projects } from "@/components/Projects/Projects";
import { Experience } from "@/components/Experience/Experience";
import { Contact } from "@/components/Contact";
import { CV } from "@/components/CV";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="cv">
          <CV />
        </section>
      </main>
    </>
  );
}
