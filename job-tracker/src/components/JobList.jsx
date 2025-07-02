

import React from "react";
import JobItem from "./JobItem";

function JobList({ jobs, onDelete }) {
  if (jobs.length === 0) {
    return <p>No jobs found. Please add one!</p>;
  }

  return (
    <div>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default JobList;
