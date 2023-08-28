import { ProjectCard } from "./ProjectCard/ProjectCard";

import style from "./Projects.module.css";

export function Projects() {
  const projectData = [
    {
      name: "Flavour Quest",
      intro: "A full-stack web app using ChatGPT to generate personalised recipes based on user input",
      websiteURL: "https://flavour-quest-rg.vercel.app/",
      githubURL: "https://github.com/gaorachel/flavour-quest",
      techStack: [
        "TypeScript",
        "ReactJS",
        "NextJS",
        "ChatGPT",
        "Google Search API",
        "Chakra UI",
        "React Testing Library",
        "Jest",
      ],
      image: "/images/flavourQuest.png",
    },
    {
      name: "Place Finder",
      intro:
        "An app to help you discover and explore cafes, pubs, and restaurants around a specific postcode in the UK",
      websiteURL: "https://place-finder-rg.vercel.app/",
      githubURL: "https://github.com/gaorachel/place-finder",
      techStack: ["TypeScript", "ReactJS", "Mapbox API", "CSS", "HTML"],
      image: "/images/placeFinder.png",
    },
    {
      name: "Youtube Visual Clone",
      intro: "YouTube home page visual clone",
      websiteURL: "https://youtube-visual-clone-rg.vercel.app/",
      githubURL: "https://github.com/gaorachel/youtube-visual-clone",
      techStack: ["JavaScript", "ReactJS", "CSS", "HTML"],
      image: "/images/youtubeVisualClone.png",
    },
    {
      name: "Random City Info",
      intro: "An app to show you the current weather and its local time of a random capital city",
      websiteURL: "https://random-city-info-rg.vercel.app/",
      githubURL: "https://github.com/gaorachel/random-city-info",
      techStack: ["JavaScript", "ReactJS", "HTML", "CSS"],
      image: "/images/randomCityInfo.png",
    },
  ];

  return (
    <section id="projects">
      <h1 className={style.header}> Projects </h1>
      {projectData.map((project) => {
        return (
          <div className={style.section} key={project.name}>
            <ProjectCard project={project} />
          </div>
        );
      })}
    </section>
  );
}
