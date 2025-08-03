# Running Tagged Tests with Docker

## ❌ What DOESN'T Work
```bash
# This will fail - Docker Compose doesn't accept Cypress flags
docker compose up --build cypress --env grepTags=checklist_integrated
```

## ✅ What WORKS - 4 Methods

### Method 1: Simple Scripts (Recommended)
```bash
# Run checklist_integrated tests
npm run docker:test-integrated

# Run checklist_smoke tests  
npm run docker:test-smoke

# Default (currently set to checklist_integrated)
npm run docker:test
```

### Method 2: Using Compose Override Files
```bash
# For integrated tests
docker compose -f docker-compose.yml -f docker-compose.integrated.yml up --build

# For smoke tests
docker compose -f docker-compose.yml -f docker-compose.smoke.yml up --build
```

### Method 3: Edit docker-compose.yml Command
Edit the command in `docker-compose.yml`:
```yaml
services:
  cypress:
    command: ["sleep 10 && npm run test:checklist-integrated"]
    # or
    command: ["sleep 10 && npm run test:checklist-smoke"]
```

### Method 4: Environment Variable Override
```bash
# Set environment in docker-compose.yml
services:
  cypress:
    environment:
      - CYPRESS_grepTags=checklist_integrated
    command: ["sleep 10 && npx cypress run --env grepTags=$CYPRESS_grepTags"]
```

## 🎯 Quick Examples

### Run Integrated Tests
```bash
npm run docker:test-integrated
```

### Run Smoke Tests  
```bash
npm run docker:test-smoke
```

### Run All Tests (Default)
```bash
npm run docker:test
```

### Clean Up After Tests
```bash
npm run docker:down
```

## 📁 Docker Compose Files

- `docker-compose.yml` - Main file (app + cypress with integrated tests)
- `docker-compose.integrated.yml` - Override for integrated tests only
- `docker-compose.smoke.yml` - Override for smoke tests only
- `docker-compose.dev.yml` - Development mode

## 🔧 How It Works

1. **Main compose file** defines the base services (app + cypress)
2. **Override files** only change the cypress command
3. **Docker compose merges** the files automatically
4. **npm scripts** make it easy to remember commands

## 🚀 Best Practices

1. **Use npm scripts** - easier to remember
2. **Clean up after tests** - run `npm run docker:down`
3. **Check test results** in `test/results/` folder
4. **Use specific tags** instead of running all tests

## 🐛 Troubleshooting

**Issue**: `unknown flag: --env`
**Solution**: Don't pass Cypress flags to Docker Compose. Use the methods above instead.

**Issue**: Tests not running with correct tag
**Solution**: Check that your test files have the correct tag syntax:
```typescript
describe("My Tests", { tags: "my_tag" }, () => {
  // tests here
});
``` 