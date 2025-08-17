// db.js
const Database = require("better-sqlite3");
const path = require("path");

//DB in project root
const dbPath = path.join(__dirname, "test-results.db");
const db = new Database(dbPath);

// Create table
db.exec(`
  CREATE TABLE IF NOT EXISTS test_results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    test_name TEXT,
    status TEXT,
    duration_ms INTEGER,
    run_id TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

function insertResult(test_name, status, duration_ms, run_id) {
  const stmt = db.prepare(`
    INSERT INTO test_results (test_name, status, duration_ms, run_id)
    VALUES (?, ?, ?, ?)
  `);
  stmt.run(test_name, status, duration_ms, run_id);
}

module.exports = { insertResult };
