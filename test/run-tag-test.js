#!/usr/bin/env node

const { spawn } = require("child_process");
const path = require("path");

// Get tag from command line arguments
const tag = process.argv[2];
const spec = process.argv[3];

if (!tag) {
  console.log("Usage: node run-tag-test.js <tag> [spec-pattern]");
  console.log("Examples:");
  console.log("  node run-tag-test.js checklist_integrated");
  console.log("  node run-tag-test.js checklist_smoke");
  console.log(
    '  node run-tag-test.js checklist_integrated "e2e/integration/**/*.cy.ts"',
  );
  process.exit(1);
}

// Build cypress command
const args = ["run", "--env", `grepTags=${tag}`];

if (spec) {
  args.push("--spec", spec);
}

console.log(`Running tests with tag: ${tag}`);
if (spec) {
  console.log(`Spec pattern: ${spec}`);
}

// Run cypress
const cypress = spawn("cypress", args, {
  stdio: "inherit",
  cwd: process.cwd(),
});

cypress.on("exit", (code) => {
  process.exit(code);
});
