import { Chip } from "../../Chip/Chip";
import { RiExternalLinkLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { BiWifi0 } from "react-icons/bi";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";

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
  const { width } = useWindowSize();
  if (!width) return null;

  let imgWidth = 0;
  let imgHeight = 0;
  if (width <= 420) {
    imgWidth = 300;
    imgHeight = 168.75;
  } else if (width <= 750 && width > 420) {
    imgWidth = 400;
    imgHeight = 225;
  } else if (width <= 900 && width > 750) {
    imgWidth = 300;
    imgHeight = 168.75;
  }
  if (width > 900) {
    imgWidth = 400;
    imgHeight = 225;
  }

  return (
    <div className={style.card}>
      <Image
        src={project.image}
        width={imgWidth}
        height={imgHeight}
        alt={`image of ${project.name}`}
        style={{ borderRadius: 6 }}
      />

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
