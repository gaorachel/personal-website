import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { MdWork, MdComputer } from "react-icons/md";
import { FaPython, FaDatabase } from "react-icons/fa";
import { HiDatabase } from "react-icons/hi";
import { Chip } from "../Chip/Chip";

import "react-vertical-timeline-component/style.min.css";
import styles from "./Journey.module.css";

export function Journey() {
  const events = [
    {
      name: "Web Development",
      description: "Learning frontend development",
      date: "Dec 2022 - Present",
      position: "left",
      skills: ["TypeScript", "React", "NextJS", "HTML", "CSS"],
      icon: <MdComputer />,
      iconBgColor: "var(--frost-1)",
    },
    {
      name: "Data Analyst",
      description: "Providing data analysis and refactoring legacy SQL code",
      date: "Oct 2022 - Present",
      position: "right",
      skills: ["BigQuery", "Oracle", "Tableau", "Project Management"],
      icon: <MdWork />,
      iconBgColor: "var(--frost-4)",
    },
    {
      name: "Supply Chain Manager",
      description: "Delivered data analysis and actionable insights to empower product decisions",
      date: "Apr 2021 - Sep 2022",
      position: "right",
      skills: ["Metabase", "Python", "Product Management"],
      icon: <MdWork />,
      iconBgColor: "var(--frost-4)",
    },
    {
      name: "SQL",
      description: "Learnt SQL to curate data from spreadsheets into databases and do analysis",
      date: "Jun 2020",
      position: "left",
      skills: ["BigQuery", "Data Analysis", "Data Visualisation"],
      icon: <HiDatabase />,
      iconBgColor: "var(--frost-1)",
    },
    {
      name: "Python",
      description: "Learnt Python to assist automation efforts for the whole company",
      date: "Mar 2020",
      position: "left",
      skills: ["Python", "Pandas", "NumPy"],
      icon: <FaPython />,
      iconBgColor: "var(--frost-1)",
    },
    {
      name: "Supply Chain Specialist",
      description:
        "Created automation tools in Python for diverse business functions, replacing manual tasks and slashing time requirements from weeks to minutes",
      date: "Sep 2019 - Mar 2021",
      position: "right",
      skills: ["Python", "Pandas", "NumPy"],
      icon: <MdWork />,
      iconBgColor: "var(--frost-4)",
    },
  ];

  return (
    <>
      <VerticalTimeline className={styles.timeline}>
        {events.map((event) => {
          return (
            <VerticalTimelineElement
              className={styles.card}
              contentStyle={{
                background: "transparent",
                boxShadow: "none",
                color: "var(--frost-1)",
                marginLeft: 6,
                marginRight: 6,
                // marginTop: -20,
                padding: 0,
                textAlign: event.position === "right" ? "start" : "end",
              }}
              contentArrowStyle={{ borderRight: "none" }}
              iconStyle={{
                background: event.iconBgColor,
                boxShadow: "none",
                width: 40,
                height: 40,
                margin: -20,
              }}
              icon={event.icon}
              date={event.date}
              dateClassName={styles.date}
              position={event.position}
              key={event.name}
            >
              <div className={styles.text}>
                <div className={styles.header}>{event.name}</div>
                <div className={styles.description}> {event.description}</div>
                <div className={styles.chips} style={{ alignSelf: event.position === "right" ? "start" : "end" }}>
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
