
import React, { useState } from "react";
import JobFrom from "./components/JobFrom";
import FilterBar from "./components/FilterBar";
import JobList from "./components/JobList";
import { saveJobs, loadJobs } from "./Utils/storage";


function App() {
  const [jobs, setJobs] = useState([]);               // Job list state
  const [currentFilter, setCurrentFilter] = useState("all"); // Filter state

  // Add new job handler
  const addJob = (job) => {
    setJobs((prevJobs) => [
      ...prevJobs,
      { ...job, id: Date.now() },                     // Unique id assign
    ]);
  };

  // Delete job handler
  const deleteJob = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  // Filter jobs based on currentFilter state
  const filteredJobs =
    currentFilter === "all"
      ? jobs
      : jobs.filter((job) => job.status === currentFilter);

  return (
    <div className="container">
      <h1>🎯 Job Application Tracker</h1>
      <p>
        Keep track of your job applications and their statuses. Add, filter, and
        delete jobs easily.
      </p>
      <FilterBar
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <JobFrom onAddJob={addJob} />
      <JobList jobs={filteredJobs} onDelete={deleteJob} />
    </div>
  );
}

export default App;
