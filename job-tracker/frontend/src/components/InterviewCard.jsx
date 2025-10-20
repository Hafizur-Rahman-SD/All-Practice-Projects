export default function InterviewCard({ interview }) {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition flex flex-col gap-2">
      <h3 className="font-bold text-lg">{interview.position}</h3>
      <p className="text-gray-500">
        {interview.date} at {interview.time}
      </p>
      <p className="text-gray-600">{interview.address}</p>
    </div>
  );
}
