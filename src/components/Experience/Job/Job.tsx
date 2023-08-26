import { Chip } from "@/components/Chip/Chip";

import styles from "./Job.module.css";

export type JobType = {
  id: number;
  title: string;
  location: string;
  company: string;
  employmentPeriod: {
    startDate: string;
    endDate: string;
  };
  jobSummary: string[];
  skills: string[];
};

type JobProps = {
  job: JobType;
};

export function Job({ job }: JobProps) {
  const dateConvertor = (dateString: string) => {
    const date = new Date(dateString);
    if (dateString === "") return "Present";
    return date.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.employmentPeriod}>
          {dateConvertor(job.employmentPeriod.startDate)} - {dateConvertor(job.employmentPeriod.endDate)}
        </div>

        <div className={styles.text}>
          <h2 className={styles.header}>
            {job.title} - {job.company}
          </h2>
          <div className={styles.jobSummary}>
            {job.jobSummary.map((el: string, idx: number) => {
              return <div key={idx}> {el} </div>;
            })}
          </div>
          <div className={styles.skills}>
            {job.skills.map((el) => {
              return <Chip key={el}> {el} </Chip>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
