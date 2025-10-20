import JobCard from "./JobCard";

export default function JobList({ jobs }) {
  if (jobs.length === 0) {
    return <p className="text-gray-500 text-center mt-4">No jobs added yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
