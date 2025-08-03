#!/usr/bin/env node

const { spawn } = require("child_process");
const path = require("path");

// Get the test file from command line arguments (passed by Tusk)
const testFile = process.argv[2];

if (!testFile) {
  console.log("Usage: node tusk-test-runner.js <test-file-path>");
  process.exit(1);
}

console.log(`Running Tusk test for file: ${testFile}`);
console.log(`Current working directory: ${process.cwd()}`);
console.log(`Script version: v2.3 - with all fixes`);

// Remove "test/" prefix if present (since we're already in test directory)
const cleanTestFile = testFile.startsWith("test/")
  ? testFile.substring(5)
  : testFile;
console.log(`Cleaned test file path: ${cleanTestFile}`);

// Determine test tag based on file path
let testTag = "checklist_integrated"; // default

if (cleanTestFile.includes("smoke")) {
  testTag = "checklist_smoke";
} else if (cleanTestFile.includes("integration")) {
  testTag = "checklist_integrated";
}

console.log(`Detected test tag: ${testTag}`);

// Run cypress with specific file and tag
const args = [
  "cypress",
  "run",
  "--config-file",
  "cypress.config.js",
  "--spec",
  cleanTestFile,
  "--env",
  `grepTags=${testTag}`,
];

console.log(`Running: npx ${args.join(" ")}`);

const cypress = spawn("npx", args, {
  stdio: "inherit",
  cwd: process.cwd(),
});

cypress.on("exit", (code) => {
  console.log(`Test completed with exit code: ${code}`);
  process.exit(code);
});
