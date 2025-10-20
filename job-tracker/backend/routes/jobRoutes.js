import express from "express";
import db from "../config/db.js";

const router = express.Router();

// Get all jobs
router.get("/", (req, res) => {
  db.query("SELECT * FROM jobs", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Add a new job
router.post("/", (req, res) => {
  const { position, company, date_applied, status, note } = req.body;
  db.query(
    "INSERT INTO jobs (position, company, date_applied, status, note) VALUES (?, ?, ?, ?, ?)",
    [position, company, date_applied, status, note],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Job added successfully!", id: result.insertId });
    }
  );
});

export default router;
