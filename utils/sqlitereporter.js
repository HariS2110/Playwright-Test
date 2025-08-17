// sqlitereporter.js

const { insertResult } = require("./db");
const { v4: uuidv4 } = require("uuid");

class SQLiteReporter {
  onBegin(config, suite) {
    this.runId = uuidv4(); // unique ID
    console.log(`▶️ Starting test run: ${this.runId}`);
  }

  onTestEnd(test, result) {
    insertResult(
      test.title,
      result.status,
      result.duration,
      this.runId
    );
    console.log(
      `Saved result: ${test.title} - ${result.status} (${result.duration}ms)`
    );
  }

  onEnd() {
    console.log("All test results saved to SQLite DB");
  }
}

module.exports = SQLiteReporter;
