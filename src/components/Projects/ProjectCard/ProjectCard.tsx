import { Chip } from "../../Chip/Chip";
import { RiExternalLinkLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { BiWifi0 } from "react-icons/bi";
import Image from "next/image";

import style from "./ProjectCard.module.css";

type ProjectCardType = {
  name: string;
  intro: string;
  websiteURL: string;
  githubURL: string;
  techStack: string[];
  image: string;
};
type ProjectCardProps = {
  project: ProjectCardType;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const imageStyle = { borderRadius: "6px" };

  return (
    <div className={style.card}>
      <Image src={project.image} width={400} height={225} alt={`image of ${project.name}`} style={imageStyle} />

      <div className={style.text}>
        <div className={style.project}>{project.name}</div>
        <div className={style.intro}> {project.intro} </div>
        <div className={style.chips}>
          {project.techStack.map((el) => {
            return <Chip key={el}> {el} </Chip>;
          })}
        </div>
        <div>
          <a href={project.websiteURL} className={style.url}>
            website <RiExternalLinkLine />
          </a>
          <BiWifi0 />
          <a href={project.githubURL} className={style.url}>
            source <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
