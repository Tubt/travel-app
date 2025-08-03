# 🧪 Cypress Test Framework - Travel App

Đây là framework test automation chuyên nghiệp được xây dựng bằng Cypress cho ứng dụng du lịch MeToo Travel.

## 📁 Cấu trúc Framework

```
test/
├── cypress.config.ts          # Cấu hình Cypress chính
├── fixtures/                  # Test data và mock data
│   └── testData.json         # Dữ liệu test cho destinations, users, v.v.
├── pageObjects/              # Page Object Models
│   └── HomePage.ts          # POM cho trang chủ
├── support/                  # Utilities và helpers
│   ├── commands.ts          # Custom Cypress commands
│   ├── e2e.ts              # Setup và configuration global
│   └── helpers/
│       └── testHelpers.ts   # Helper functions
├── e2e/                     # Test cases
│   ├── smoke/              # Smoke tests (critical functionality)
│   │   └── homepage.cy.ts  # Smoke tests cho homepage
│   ├── integration/        # Integration tests
│   │   └── userJourney.cy.ts # End-to-end user journeys
│   └── regression/         # Regression tests
└── results/                # Test results
    ├── screenshots/        # Screenshots khi test fail
    └── videos/            # Videos recording
```

## 🚀 Cài đặt và Chạy Tests

### Prerequisites

- Node.js (v14 hoặc mới hơn)
- Travel app đang chạy trên `http://localhost:5173`

### Chạy Tests

```bash
# Mở Cypress Test Runner (interactive mode)
npm run cypress:open

# Chạy tất cả tests (headless mode)
npm run test:all

# Chạy smoke tests
npm run test:smoke

# Chạy integration tests
npm run test:integration

# Chạy regression tests
npm run test:regression

# Chạy tests với browser specific
npm run test:chrome
npm run test:firefox

# Chạy tests với screen sizes khác nhau
npm run test:mobile    # 375x667
npm run test:tablet    # 768x1024
npm run test:desktop   # 1280x720

# Chạy tests với headed mode (xem browser)
npm run test:headed
```

## 📋 Test Categories

### 🟢 Smoke Tests (`e2e/smoke/`)

Tests các chức năng cơ bản và critical:

- Page load và rendering
- Navigation cơ bản
- Core user interactions
- Critical UI elements

### 🔵 Integration Tests (`e2e/integration/`)

Tests các user journeys hoàn chỉnh:

- Complete booking flow
- Multi-step user interactions
- Cross-component functionality
- End-to-end scenarios

### 🟡 Regression Tests (`e2e/regression/`)

Tests để đảm bảo không có regression bugs:

- Previous bug fixes
- Edge cases
- Browser compatibility
- Performance regression

## 🏗️ Framework Components

### Page Object Models

```typescript
// Sử dụng HomePage POM
import { HomePage } from "../pageObjects/HomePage";

const homePage = new HomePage();
homePage.visit();
homePage.searchForDestination({ destination: "Hà Nội" });
homePage.openDestinationDetails("Sapa");
```

### Custom Commands

```typescript
// Đã được setup sẵn các custom commands
cy.selectDestination("Hà Nội");
cy.searchTravel({ destination: "Sapa", guests: "2" });
cy.likeDestination("Phú Quốc");
cy.openDestinationModal("Đà Nẵng");
cy.signupNewsletter("test@example.com");
```

### Test Helpers

```typescript
import { TestHelpers } from "../support/helpers/testHelpers";

// Generate test data
const email = TestHelpers.generateRandomEmail();
const destination = TestHelpers.generateRandomDestination();

// Screenshots
TestHelpers.takeScreenshot("test-step-1");

// Navigation helpers
TestHelpers.scrollToBottom();
TestHelpers.waitForPageLoad();
```

### Test Data (Fixtures)

```typescript
// Load test data từ fixtures
cy.fixture("testData").then((data) => {
  const searchParams = data.searchParams.valid;
  const destinations = data.destinations;
});
```

## ⚙️ Configuration

### Environment Variables

Framework hỗ trợ multiple environments:

```typescript
// cypress.config.ts
env: {
  environment: 'local',     // local | staging | production
  apiUrl: 'http://localhost:3001/api',
  emailDomain: '@metoo.com'
}
```

### Browser Settings

- Default viewport: 1280x720
- Default timeout: 10 seconds
- Retry on failure: 2 times (run mode)
- Video recording: enabled
- Screenshot on failure: enabled

## 📊 Reporting

### Test Results

- **Videos**: Tự động record tất cả test runs
- **Screenshots**: Tự động capture khi test fail
- **Logs**: Chi tiết logs trong Cypress Dashboard
- **Performance**: Load time tracking

### Artifacts Location

```
test/results/
├── screenshots/    # PNG files của failed tests
└── videos/        # MP4 recordings của test runs
```

## 🔧 Best Practices

### 1. Test Organization

- **Smoke tests**: Chạy nhanh, test critical paths
- **Integration tests**: Test complete user flows
- **Regression tests**: Test edge cases và bug fixes

### 2. Page Object Pattern

```typescript
// ✅ Good - Sử dụng POM
homePage.searchForDestination(searchParams);

// ❌ Bad - Direct selectors trong test
cy.get(".search-input").type("Hà Nội");
```

### 3. Test Data Management

```typescript
// ✅ Good - Sử dụng fixtures
cy.fixture("testData").then((data) => {
  homePage.searchForDestination(data.searchParams.valid);
});

// ❌ Bad - Hardcoded data
cy.get(".search-input").type("Hà Nội");
```

### 4. Waiting Strategies

```typescript
// ✅ Good - Smart waiting
cy.get(".modal-overlay").should("be.visible");

// ❌ Bad - Fixed waits
cy.wait(3000);
```

## 🐛 Debugging

### Local Debugging

```bash
# Mở Cypress với debug mode
npm run cypress:open

# Chạy single test với headed mode
npx cypress run --spec "e2e/smoke/homepage.cy.ts" --headed
```

### Common Issues

1. **Element not found**: Check selector hoặc timing
2. **Test timeout**: Increase timeout trong config
3. **Flaky tests**: Add proper waits và assertions

## 📈 CI/CD Integration

### GitHub Actions Example

```yaml
- name: Run Cypress Tests
  run: |
    npm run dev &
    npm run test:smoke
    npm run test:integration
```

### Docker Support

```bash
# Chạy tests trong Docker container
docker run -it --rm -v $PWD:/e2e -w /e2e cypress/included:latest
```

## 🤝 Contributing

### Adding New Tests

1. Tạo test file trong folder phù hợp (`smoke/`, `integration/`, `regression/`)
2. Sử dụng Page Object Models
3. Add test data vào `fixtures/testData.json`
4. Follow naming conventions: `*.cy.ts`

### Adding New Page Objects

1. Tạo file trong `pageObjects/`
2. Implement methods cho page interactions
3. Export class và update imports

### Test Naming Conventions

- **File names**: `featureName.cy.ts`
- **Test descriptions**: Clear, readable, action-based
- **Test IDs**: Use `data-testid` attributes

## 📚 Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Page Object Model Pattern](https://cypress-io.github.io/cypress-realworld-app/)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)

---

**Framework Version**: 1.0.0  
**Last Updated**: December 2024  
**Maintainer**: Travel App Test Team
