const { add } = require("../src/app.js");

if (add(2, 3) === 5) {
  console.log("Test Passed ✔️");
} else {
  console.error("Test Failed ❌");
  process.exit(1);
}
