// src/utils/storage.js

const JOBS_KEY = "job-tracker-jobs";

export const saveJobs = (jobs) => {
  localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
};

export const loadJobs = () => {
  const jobsJSON = localStorage.getItem(JOBS_KEY);
  return jobsJSON ? JSON.parse(jobsJSON) : [];
};
