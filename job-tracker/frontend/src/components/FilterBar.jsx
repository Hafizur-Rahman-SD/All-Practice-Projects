export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="flex gap-4 mt-4 flex-wrap">
      {["All", "Applied", "Interview", "Rejected", "Accepted"].map((status) => (
        <button
          key={status}
          onClick={() => setFilter(status)}
          className={`px-4 py-2 rounded-lg font-medium ${
            filter === status
              ? "bg-indigo-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition`}
        >
          {status}
        </button>
      ))}
    </div>
  );
}
