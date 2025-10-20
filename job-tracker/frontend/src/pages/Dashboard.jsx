import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import InterviewForm from "../components/InterviewForm";
import InterviewCard from "../components/InterviewCard";
import FilterBar from "../components/FilterBar";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  // Sample Jobs
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "ABC Corp",
      position: "React Developer",
      status: "Applied",
      dateApplied: "2025-10-20",
      timeApplied: "10:00",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "XYZ Ltd",
      position: "Node.js Developer",
      status: "Interview",
      dateApplied: "2025-10-21",
      timeApplied: "14:00",
    },
  ]);

  // Sample Interviews
  const [interviews, setInterviews] = useState([
    {
      id: 1,
      position: "React Developer",
      date: "2025-10-22",
      time: "11:00",
      address: "123 Main St, Dhaka",
      email: "hr@abc.com",
    },
    {
      id: 2,
      position: "Node.js Developer",
      date: "2025-10-25",
      time: "15:00",
      address: "456 Park Ave, Dhaka",
      email: "contact@xyz.com",
    },
  ]);

  const [filter, setFilter] = useState("All");

  // Add Job
  const addJob = (job) => setJobs((prev) => [job, ...prev]);

  // Add Interview
  const addInterview = (interview) => setInterviews((prev) => [interview, ...prev]);

  // Filtered Jobs
  const filteredJobs = filter === "All" ? jobs : jobs.filter((job) => job.status === filter);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <p className="text-gray-600 text-center">Please login to view your dashboard.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800">Welcome, {user.displayName || "User"}</h1>

      {/* Filter Bar */}
      <div className="mt-4">
        <FilterBar filter={filter} setFilter={setFilter} />
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Forms */}
        <div className="md:col-span-1 flex flex-col gap-6">
          <JobForm addJob={addJob} />
          <InterviewForm addInterview={addInterview} />
        </div>

        {/* Right Column: Lists */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Jobs */}
          <div>
            <h2 className="text-xl font-bold mb-2 text-gray-700">Jobs</h2>
            <JobList jobs={filteredJobs} />
          </div>

          {/* Interviews */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2 text-gray-700">Interviews</h2>
            {interviews.length === 0 ? (
              <p className="text-gray-500">No interviews scheduled yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interviews.map((interview) => (
                  <InterviewCard key={interview.id} interview={interview} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
