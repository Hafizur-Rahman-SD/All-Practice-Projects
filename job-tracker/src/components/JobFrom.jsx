

import React, { useState } from "react";

function JobForm({ onAddJob }) {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("Applied");

  // নতুন state যোগ করলাম DateTime এর জন্য
  const [dateTime, setDateTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!companyName || !position) return;

    // onAddJob কল করার সময় নতুন ফিল্ড ও পাঠাবো
    onAddJob({ companyName, position, status, dateTime });

    // ইনপুট ফিল্ডগুলো রিসেট করবো
    setCompanyName("");
    setPosition("");
    setStatus("Applied");
    setDateTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offered">Offered</option>
        <option value="Rejected">Rejected</option>
      </select>

      {/* নতুন Input Field: date & time */}
      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        required
      />

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default JobForm;
