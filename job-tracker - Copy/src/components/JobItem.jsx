import React from "react";

function JobItem({ job, onDelete }) {
  return (
    <div className="job-item">
      <h3>{job.companyName}</h3>              {/* Company name দেখাবে */}
      <p>Position: {job.position}</p>        {/* Position */}
      <p>Status: {job.status}</p>            {/* Status */}
      <p>Applied On: {job.dateTime}</p>      {/* নতুন date & time */}
      <button onClick={() => onDelete(job.id)}>Delete</button>
    </div>
  );
}

export default JobItem;
