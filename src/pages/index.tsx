import { Header } from "@/components/Header/Header";
import { About } from "@/components/About/About";
import { Projects } from "@/components/Projects/Projects";
import { Journey } from "@/components/Journey/Journey";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Footer } from "@/components/Footer/Footer";

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
        <Footer />
      </main>
      <Sidebar />
    </>
  );
}
