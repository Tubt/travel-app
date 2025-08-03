#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Get the test file from command line arguments (passed by Tusk)
const testFile = process.argv[2];

if (!testFile) {
  console.log('Usage: node tusk-test-runner.js <test-file-path>');
  process.exit(1);
}

console.log(`Running Tusk test for file: ${testFile}`);

// Determine test tag based on file path
let testTag = 'checklist_integrated'; // default

if (testFile.includes('smoke')) {
  testTag = 'checklist_smoke';
} else if (testFile.includes('integration')) {
  testTag = 'checklist_integrated';
}

console.log(`Detected test tag: ${testTag}`);

// Run cypress with specific file and tag
const args = [
  'run',
  '--spec', testFile,
  '--env', `grepTags=${testTag}`
];

console.log(`Running: cypress ${args.join(' ')}`);

const cypress = spawn('cypress', args, {
  stdio: 'inherit',
  cwd: process.cwd()
});

cypress.on('exit', (code) => {
  console.log(`Test completed with exit code: ${code}`);
  process.exit(code);
}); 