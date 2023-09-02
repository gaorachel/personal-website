import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { MdWork, MdComputer } from "react-icons/md";
import { FaPython, FaDatabase } from "react-icons/fa";
import { HiDatabase } from "react-icons/hi";
import { Chip } from "../Chip/Chip";
import { useWindowSize } from "@uidotdev/usehooks";

import "react-vertical-timeline-component/style.min.css";
import styles from "./Journey.module.css";

export function Journey() {
  const { width } = useWindowSize();
  if (!width) return null;

  const events = [
    {
      name: "Web Development",
      description: "Learning frontend development",
      date: "Dec 2022 - Present",
      position: "left",
      skills: ["TypeScript", "React", "NextJS", "HTML", "CSS"],
      icon: <MdComputer width={10} height={10} />,
      color: "var(--frost-1)",
    },
    {
      name: "Data Analyst",
      description: "Providing data analysis and refactoring legacy SQL code",
      date: "Oct 2022 - Present",
      position: "right",
      skills: ["BigQuery", "Oracle", "Tableau", "Project Management"],
      icon: <MdWork />,
      color: "var(--frost-3)",
    },
    {
      name: "Supply Chain Manager",
      description:
        "Delivered data analysis and actionable insights; \n collaborated with the tech team to enhance optimisations and develop features",
      date: "Apr 2021 - Sep 2022",
      position: "right",
      skills: ["Metabase", "Python", "Product Management"],
      icon: <MdWork />,
      color: "var(--frost-3)",
    },
    {
      name: "SQL",
      description: "Learnt SQL to curate data from spreadsheets into databases and do analysis",
      date: "Jun 2020",
      position: "left",
      skills: ["BigQuery", "Data Analysis", "Data Visualisation"],
      icon: <HiDatabase />,
      color: "var(--frost-1)",
    },
    {
      name: "Python",
      description: "Learnt Python to assist automation efforts for the whole company",
      date: "Mar 2020",
      position: "left",
      skills: ["Python", "Pandas", "NumPy"],
      icon: <FaPython />,
      color: "var(--frost-1)",
    },
    {
      name: "Supply Chain Specialist",
      description:
        "Created automation tools in Python for diverse business functions, replacing manual tasks and slashing time requirements from weeks to minutes",
      date: "Sep 2019 - Mar 2021",
      position: "right",
      skills: ["Python", "Pandas", "NumPy"],
      icon: <MdWork />,
      color: "var(--frost-3)",
    },
  ];

  return (
    <section id="journey">
      <VerticalTimeline className={styles.timeline}>
        {events.map((event) => {
          const finalPosition = width < 1170 ? "right" : event.position;

          return (
            <VerticalTimelineElement
              className={styles.card}
              contentStyle={{
                background: "transparent",
                boxShadow: "none",
                color: "var(--frost-1)",
                marginLeft: 6,
                marginRight: 6,
                padding: 0,
                textAlign: finalPosition === "right" ? "start" : "end",
              }}
              contentArrowStyle={{ borderRight: "none" }}
              icon={event.icon}
              iconClassName={styles.icon}
              iconStyle={{ background: event.color }}
              position={finalPosition}
              key={event.name}
            >
              <div className={styles.text}>
                <div style={{ color: event.color }}> {event.date} </div>
                <div className={styles.header}>{event.name}</div>
                <div className={styles.description}> {event.description}</div>
                <div className={styles.chips} style={{ alignSelf: finalPosition === "right" ? "start" : "end" }}>
                  {event.skills.map((skill, index) => {
                    return <Chip key={`${event.name}-${index}`}> {skill} </Chip>;
                  })}
                </div>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
