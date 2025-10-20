export default function JobCard({ job }) {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition flex flex-col gap-2">
      <h3 className="font-bold text-lg">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-500">{job.position}</p>
      <p className="text-gray-500">{job.status}</p>
      <p className="text-gray-400 text-sm">
        Applied on {job.dateApplied} at {job.timeApplied}
      </p>
    </div>
  );
}
