# Tusk Integration Guide

## What is Tusk?
Tusk is a test runner service that can trigger your GitHub Actions workflows and run tests on individual files, providing detailed feedback and analytics.

## Required Workflow Inputs

Your `checklist.yml` workflow now uses the official **Use-Tusk/test-runner@v1** action with these required inputs:

- **`runId`** - Unique identifier for the Tusk test run
- **`tuskUrl`** - URL to the Tusk server
- **`commitSha`** - Specific commit SHA to test

## Required Secret

Add this secret to your GitHub repository:
- **`TUSK_AUTH_TOKEN`** - Your Tusk authentication token

## How It Works

1. **Tusk triggers workflow** with required parameters
2. **Checkout specific commit** using the provided SHA
3. **Install Node.js dependencies** for both main app and test directory
4. **Build and start Docker app service** (runs on port 3000)
5. **Tusk test runner action**:
   - Scans for test files matching: `^test/e2e/.*\.cy\.(js|ts)$`
   - Runs each test file individually using our custom runner
   - Automatically detects test tags based on file path
   - Reports results back to Tusk dashboard

## Test File Detection & Tags

Our **`tusk-test-runner.js`** script automatically detects test tags based on file paths:

- Files containing `smoke` → `checklist_smoke` tag
- Files containing `integration` → `checklist_integrated` tag  
- Default → `checklist_integrated` tag

### Current Test Structure:
```
test/e2e/
├── integration/
│   └── userJourney.cy.ts      → checklist_integrated
└── smoke/
    └── homepage.cy.ts         → checklist_smoke
```

## Tusk Configuration

The official Tusk action handles:
- ✅ **Individual file execution** - Runs tests file by file
- ✅ **Result reporting** - Automatic pass/fail status
- ✅ **Artifact collection** - Screenshots, videos, logs
- ✅ **Performance tracking** - Test duration and trends
- ✅ **Failure analysis** - Detailed error reporting

## Manual Testing

You can manually trigger the workflow via GitHub's "Run workflow" button:

```
runId: manual-test-123
tuskUrl: https://your-tusk-instance.com  
commitSha: abc123... (your current commit SHA)
```

## Local Development vs Tusk

**Local Development** (run all tests with same tag):
```bash
npm run test:integrated    # All checklist_integrated tests
npm run test:smoke         # All checklist_smoke tests
npm run docker:down        # cleanup
```

**Tusk** (runs each test file individually):
- Provides granular file-level results
- Better failure isolation 
- Detailed performance metrics per file
- Historical trend analysis

## Docker Services

The workflow:
1. Starts your **app service** in Docker (port 3000)
2. Keeps it running during test execution
3. Tusk runner executes **Cypress tests against the running app**
4. Cleans up Docker services after completion

## Benefits of Official Tusk Integration

✅ **File-level granularity** - Know exactly which test files pass/fail  
✅ **Better debugging** - Isolated test execution  
✅ **Performance insights** - Per-file execution times  
✅ **Trend analysis** - Historical data in Tusk dashboard  
✅ **Automatic retries** - Tusk handles flaky test detection  
✅ **Rich reporting** - Screenshots, videos, logs per test file 