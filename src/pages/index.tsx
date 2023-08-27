import { Header } from "@/components/Header/Header";
import { About } from "@/components/About/About";
import { Projects } from "@/components/Projects/Projects";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Journey } from "@/components/Journey/Journey";

import styles from "./index.module.css";
import "react-tooltip/dist/react-tooltip.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <About />
        <Journey />
        <Projects />
      </main>
      <Sidebar />
    </>
  );
}
