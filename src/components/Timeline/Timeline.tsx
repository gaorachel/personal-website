import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { MdWork, MdComputer } from "react-icons/md";
import { FaPython, FaDatabase } from "react-icons/fa";
import { Chip } from "../Chip/Chip";

import "react-vertical-timeline-component/style.min.css";
import styles from "./Timeline.module.css";

export function Timeline() {
  const events = [
    {
      name: "Learning web development",
      description: "Self learning frontend-focus web development",
      date: "Dec 2022 - Present",
      position: "left",
      skills: ["TypeScript", "React", "NextJS", "HTML", "CSS"],
      icon: <MdComputer />,
      iconBgColor: "var(--frost-1)",
    },
    {
      name: "Analyst - Ocado",
      description: "Providing data analysis and refactoring legacy SQL code.",
      date: "Oct 2022 - Present",
      position: "right",
      skills: ["BigQuery", "Oracle", "Tableau", "Project Management"],
      icon: <MdWork />,
      iconBgColor: "var(--frost-4)",
    },
    {
      name: "Supply Chain Manager - Samarkand Global",
      description:
        "Delivered data analysis and actionable insights to empower senior management in their data-oriented decision-making processes.",
      date: "Apr 2021 - Sep 2022",
      position: "right",
      skills: ["Metabase", "Python", "Product Management"],
      icon: <MdWork />,
      iconBgColor: "var(--frost-4)",
    },
    {
      name: "Learning SQL",
      description:
        "Designed and developed databases using BigQuery. Collected data from spreadsheets into databases for forthcoming analysis. ",
      date: "Jun 2020",
      position: "left",
      skills: ["Data Analysis", "Data Visualisation"],
      icon: <FaDatabase />,
      iconBgColor: "var(--frost-1)",
    },
    {
      name: "Learning Python",
      description: "Start to use Python to automate repeated work for myself and later for the whole company.",
      date: "Mar 2020",
      position: "left",
      skills: ["Python", "Pandas", "NumPy"],
      icon: <FaPython />,
      iconBgColor: "var(--frost-1)",
    },
    {
      name: "Supply Chain Specialist - Samarkand Global",
      description:
        "Created automation tools in Python for diverse business functions, replacing manual tasks and slashing time requirements from weeks to minutes.",
      date: "Sep 2019 - Mar 2021",
      position: "right",
      skills: ["Python", "Pandas", "NumPy"],
      icon: <MdWork />,
      iconBgColor: "var(--frost-4)",
    },
  ];

  return (
    <>
      <VerticalTimeline>
        {events.map((event) => {
          return (
            <VerticalTimelineElement
              contentStyle={{ background: "var(--polar-night-1)", boxShadow: "none", color: "var(--frost-1)" }}
              contentArrowStyle={{ borderRight: "none" }}
              iconStyle={{
                background: event.iconBgColor,
                boxShadow: "none",
                // width: "40px",
                // height: "40px",
                // margin: "-20px",
              }}
              icon={event.icon}
              date={event.date}
              dateClassName={styles.date}
              position={event.position}
              key={event.name}
            >
              <div className={styles.card}>
                <div className={styles.header}>{event.name}</div>
                <div className={styles.description}> {event.description}</div>
                <div className={styles.chips}>
                  {event.skills.map((skill) => {
                    return <Chip key={event.name}> {skill} </Chip>;
                  })}
                </div>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
}
