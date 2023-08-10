import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience/Experience";
import { Contact } from "@/components/Contact";
import { CV } from "@/components/CV";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <header> about projects experience contact cv </header>
      <main>
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
