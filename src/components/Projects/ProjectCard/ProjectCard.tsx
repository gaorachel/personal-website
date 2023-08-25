import { Chip } from "../Chip/Chip";
import { RiExternalLinkLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";

import style from "./ProjectCard.module.css";

type ProjectCardType = {
  name: string;
  intro: string;
  websiteURL: string;
  githubURL: string;
  techStack: string[];
};
type ProjectCardProps = {
  project: ProjectCardType;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={style.card}>
      <h1 className={style.project}>{project.name}</h1>

      <a href={project.websiteURL} className={style.url}>
        {/* {project.name} <RiExternalLinkLine /> */}
        website <RiExternalLinkLine />
      </a>
      {" | "}
      <a href={project.githubURL} className={style.url}>
        code <BsGithub />
      </a>
      <div> {project.intro} </div>
      {project.techStack.map((el) => {
        return <Chip key={el}> {el} </Chip>;
      })}
    </div>
  );
}
