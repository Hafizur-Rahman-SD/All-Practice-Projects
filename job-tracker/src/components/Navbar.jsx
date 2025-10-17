// src/components/Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <header
      style={{
        backgroundColor: "#2563eb",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "8px",
        color: "white",
        marginBottom: "20px",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>🏠 Home</h2>

      <div>
        <button
          style={{
            backgroundColor: "white",
            color: "#2563eb",
            border: "none",
            padding: "8px 15px",
            borderRadius: "5px",
            marginRight: "10px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onClick={() => alert("Login feature coming soon!")}
        >
          Login
        </button>

        <button
          style={{
            backgroundColor: "#16a34a",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onClick={() => alert("Sign Up feature coming soon!")}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Navbar;