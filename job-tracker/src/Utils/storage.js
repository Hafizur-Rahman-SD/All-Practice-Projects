// src/utils/storage.js

const JOBS_KEY = "job-tracker-jobs";

export const saveJobs = (jobs) => {
  localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
};

export const loadJobs = () => {
  const jobsJSON = localStorage.getItem(JOBS_KEY);
  return jobsJSON ? JSON.parse(jobsJSON) : [];
};


// storage.js
// This file has two utility functions for working with localStorage:
// 1) saveJobs(jobs) → Saves the jobs array to localStorage as a JSON string.
// 2) loadJobs() → Loads the jobs array from localStorage and returns it as an array.
// The JOBS_KEY constant is used as a unique key for storing the job data.
// This allows the job data to persist even after refreshing or reopening the browser.
