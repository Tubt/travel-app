# Quick Test Commands

## 🧪 Test script sau khi fix:

```bash
cd test

# Test 1: Smoke test
node tusk-test-runner.js test/e2e/smoke/homepage.cy.ts

# Test 2: Integration test
node tusk-test-runner.js test/e2e/integration/userJourney.cy.ts

# Test 3: Relative path (should also work)
node tusk-test-runner.js e2e/smoke/homepage.cy.ts
```

## ✅ Expected output:

```
Running Tusk test for file: test/e2e/smoke/homepage.cy.ts
Cleaned test file path: e2e/smoke/homepage.cy.ts
Detected test tag: checklist_smoke
Running: npx cypress run --spec e2e/smoke/homepage.cy.ts --env grepTags=checklist_smoke
```

## 🎯 Key changes:

- ✅ **Path cleaning**: Removes duplicate "test/" prefix
- ✅ **Debugging**: Shows cleaned path
- ✅ **Works with both**: Full path và relative path

## 🚀 Ready for Tusk!

Script sẽ hoạt động với:

- Tusk input: `test/e2e/smoke/homepage.cy.ts`
- Local test: `e2e/smoke/homepage.cy.ts`
- Both work! 🎉
