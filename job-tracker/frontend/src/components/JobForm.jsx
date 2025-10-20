import { useState } from "react";

export default function JobForm({ addJob }) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    position: "",
    status: "Applied",
    dateApplied: "",
    timeApplied: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob({ ...form, id: Date.now() });
    setForm({
      title: "",
      company: "",
      position: "",
      status: "Applied",
      dateApplied: "",
      timeApplied: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4"
    >
      <h3 className="text-xl font-bold text-gray-700">Add New Job</h3>
      <input
        type="text"
        name="title"
        placeholder="Job Title"
        value={form.title}
        onChange={handleChange}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={form.company}
        onChange={handleChange}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={form.position}
        onChange={handleChange}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Rejected</option>
        <option>Accepted</option>
      </select>
      <input
        type="date"
        name="dateApplied"
        value={form.dateApplied}
        onChange={handleChange}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />
      <input
        type="time"
        name="timeApplied"
        value={form.timeApplied}
        onChange={handleChange}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition"
      >
        Add Job
      </button>
    </form>
  );
}
