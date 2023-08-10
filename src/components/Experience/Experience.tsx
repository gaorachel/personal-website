import { jobs } from "./jobs";

import styles from "./Experience.module.css";

export type JobType = {
  id: number;
  title: string;
  location: string;
  company: string;
  employmentPeriod: {
    startDate: string;
    endDate: string;
  };
  workHighlights: string[];
};

type JobProps = {
  job: JobType;
};

function Job({ job }: JobProps) {
  const dateConvertor = (dateString: string) => {
    const date = new Date(dateString);
    if (dateString === "") return "Present";
    return date.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
  };

  return (
    <div className={styles.jobSection}>
      <div className={styles.jobHeader}>
        <span> {job.company} </span>
        <span> {job.location}</span>
      </div>
      <div className={styles.jobSubHeader}>
        <span> {job.title} </span>
        <span>
          {dateConvertor(job.employmentPeriod.startDate)} - {dateConvertor(job.employmentPeriod.endDate)}
        </span>
      </div>
      <div className={styles.jobMain}>
        {job.workHighlights.map((el: string, idx: number) => {
          return <div key={idx}> {`- ${el}`} </div>;
        })}
        <br />
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <>
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
    </>
  );
}
