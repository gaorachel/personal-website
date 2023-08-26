import { Job } from "./Job/Job";

import styles from "./Experience.module.css";

import type { JobType } from "./Job/Job";

const jobs: JobType[] = [
  {
    id: 3,
    title: "Analyst",
    location: "Hatfield, UK",
    company: "Ocado",
    employmentPeriod: { startDate: "2022-10-01", endDate: "" },
    jobSummary: ["Providing data analysis and refactoring legacy SQL code."],
    skills: ["BigQuery", "Oracle", "Tableau", "Project Management"],
  },
  {
    id: 2,
    title: "Supply Chain Manager",
    location: "London, UK",
    company: "Samarkand Global",
    employmentPeriod: { startDate: "2021-04-01", endDate: "2022-09-01" },
    jobSummary: [
      "Delivered data analysis and actionable insights to empower senior management in their data-oriented decision-making processes.",
    ],
    skills: ["Metabase", "Python", "Product Management"],
  },
  {
    id: 1,
    title: "Supply Chain Specialist",
    location: "London, UK",
    company: "Samarkand Global",
    employmentPeriod: { startDate: "2019-09-01", endDate: "2021-03-01" },
    jobSummary: [
      "Created automation tools in Python for diverse business functions, replacing manual tasks and slashing time requirements from weeks to minutes.",
    ],
    skills: ["Python", "Pandas", "NumPy"],
  },
];

export function Experience() {
  return (
    <>
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
    </>
  );
}
