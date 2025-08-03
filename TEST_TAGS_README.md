# Test Tags Usage Guide

## Available Test Tags

Your project has the following test tags defined:

### `checklist_integrated`

- **Location**: `test/e2e/integration/userJourney.cy.ts`
- **Tests**: Homepage UI Elements, Responsive Layout Check, Content Verification
- **Purpose**: Integration testing for core UI components

### `checklist_smoke`

- **Location**: `test/e2e/smoke/homepage.cy.ts`
- **Tests**: Page Load, Banner Slider, Destination Cards, Footer, Responsive Design
- **Purpose**: Smoke testing for basic functionality

## How to Run Tests by Tags

### 1. Predefined Scripts (Recommended)

```bash
# Run all checklist_integrated tests
npm run test:integrated

# Run all checklist_smoke tests
npm run test:smoke

# Legacy - specific integration tests
npm run test:checklist
```

### 2. Direct Cypress Commands

```bash
cd test

# Run specific tag
npm run test:checklist-integrated
npm run test:checklist-smoke

# Or use direct cypress command
npx cypress run --env grepTags=checklist_integrated
npx cypress run --env grepTags=checklist_smoke
```

### 3. Dynamic Tag Runner (Most Flexible)

```bash
cd test

# Run any tag
npm run test:tag checklist_integrated
npm run test:tag checklist_smoke

# Run tag with specific spec file
npm run test:tag checklist_integrated "e2e/integration/**/*.cy.ts"
```

## Docker Usage

To run tagged tests in Docker, update your docker-compose.yml:

```yaml
# For checklist_integrated tests
command: ["sleep 10 && npm run test:checklist-integrated"]

# For checklist_smoke tests
command: ["sleep 10 && npm run test:checklist-smoke"]
```

## Adding New Tags

To add new test tags:

1. **Add tag to test file**:

   ```typescript
   describe("My Test Suite", { tags: "my_new_tag" }, () => {
     it("should do something", () => {
       // test code
     });
   });
   ```

2. **Add script to test/package.json**:

   ```json
   {
     "scripts": {
       "test:my-tag": "cypress run --env grepTags=my_new_tag"
     }
   }
   ```

3. **Add to main package.json** (optional):
   ```json
   {
     "scripts": {
       "test:my-tag": "cd test && npm run test:my-tag"
     }
   }
   ```

## Current Test Structure

```
test/
├── e2e/
│   ├── integration/
│   │   └── userJourney.cy.ts     (checklist_integrated)
│   └── smoke/
│       └── homepage.cy.ts        (checklist_smoke)
└── package.json                  (test scripts)
```
