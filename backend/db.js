const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Database path
const dbPath = path.join(
    __dirname,
    "../databases/SmartResumeAnalyzer.db"
);

// Connect to SQLite database
const db = new sqlite3.Database(dbPath, (err) => {

    if (err) {
        console.log("Database connection failed!");
        console.log(err.message);
    } else {
        console.log("Database connected successfully!");
    }

});

module.exports = db;