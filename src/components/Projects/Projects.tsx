import { RiExternalLinkLine } from "react-icons/ri";

import style from "./Projects.module.css";

function projectData() {}

export function Projects() {
  return (
    <>
      <h1 className={style.section}> Projects </h1>
      <div>
        <a href="https://flavour-quest-rg.vercel.app/" className={style.project}>
          Flavour Quest <RiExternalLinkLine />
        </a>
        <div> - A full-stack web app using ChatGPT to generate personalised recipes based on user input. </div>
        <div> TypeScript, ReactJS, NextJS | ChatGPT | Google Search API | Chakra UI </div>
      </div>
      <div>
        <a href="https://place-finder-rg.vercel.app/" className={style.project}>
          Place Finder <RiExternalLinkLine />
        </a>
        <div>
          - An app to help you discover and explore cafes, pubs, and restaurants around a specific postcode in the UK.
        </div>
        <div> TypeScript | ReactJS </div>
      </div>
      <div>
        <a href="https://youtube-visual-clone-rg.vercel.app/" className={style.project}>
          Youtube Visual Clone <RiExternalLinkLine />
        </a>
        <div> - YouTube home page visual clone </div>
        <div> JavaScript | CSS | HTML </div>
      </div>
      <div>
        <a href="https://random-city-info-rg.vercel.app/" className={style.project}>
          Random City Info <RiExternalLinkLine />
        </a>
        <div> - An app to show you the current weather and its local time of a random capital city. </div>
        <div> JavaScript | ReactJS | HTML | CSS </div>
      </div>
    </>
  );
}
