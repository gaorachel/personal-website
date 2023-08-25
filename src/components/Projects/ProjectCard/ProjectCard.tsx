import { Chip } from "../Chip/Chip";
import { RiExternalLinkLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { BiWifi0 } from "react-icons/bi";

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
      <div className={style.project}>{project.name}</div>

      <div className={style.intro}> {project.intro} </div>
      <div>
        {project.techStack.map((el) => {
          return <Chip key={el}> {el} </Chip>;
        })}
      </div>
      <div>
        <a href={project.websiteURL} className={style.url}>
          {/* {project.name} <RiExternalLinkLine /> */}
          website <RiExternalLinkLine />
        </a>
        <BiWifi0 />
        <a href={project.githubURL} className={style.url}>
          code <BsGithub />
        </a>
      </div>
    </div>
  );
}
