/**

 * This is the main React component of the Job Application Tracker.
 *
 * Features:
 * - Manages the list of job applications with a `jobs` state.
 * - Allows adding new jobs through the JobForm component.
 * - Allows deleting jobs through the JobList component.
 * - Uses a `currentFilter` state to filter jobs by status (e.g., "all", "applied", "rejected").
 * - Displays filtered jobs dynamically based on the selected filter.
 * - Connects three child components: FilterBar (to change filters), JobForm (to add jobs), and JobList (to display and delete jobs).
 * 
 * The code uses React hooks (`useState`) for state management and organizes components in a simple, clean structure.
 * 
 * Author: [Hafizur Rahman SD]
 */



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
      <h2>Hafizur Rahman</h2>
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
