/*import react file to add this file*/

import React from "react";

function FilterBar({ currentFilter, setCurrentFilter }) {
  return (
    <div className="filter-bar">
      <button
        onClick={() => setCurrentFilter("all")}
        className={currentFilter === "all" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setCurrentFilter("Applied")}
        className={currentFilter === "Applied" ? "active" : ""}
      >
        Applied
      </button>
      <button
        onClick={() => setCurrentFilter("Interview")}
        className={currentFilter === "Interview" ? "active" : ""}
      >
        Interview
      </button>
      <button
        onClick={() => setCurrentFilter("Offered")}
        className={currentFilter === "Offered" ? "active" : ""}
      >
        Offered
      </button>
      <button
        onClick={() => setCurrentFilter("Rejected")}
        className={currentFilter === "Rejected" ? "active" : ""}
      >
        Rejected
      </button>
    </div>
  );
}

export default FilterBar;
