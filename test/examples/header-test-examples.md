# Header Component Test Examples

This document provides examples of how to properly test the Header component after the fixes applied.

## Issues Fixed

### 1. Route Mismatch

**Problem**: Header component navigation link for "Giới thiệu" pointed to `/gioi-thieu` but the actual route was `/gioi-thieu-du-lich`
**Solution**: Updated Header.tsx to use the correct route path

### 2. Missing Test Attributes

**Problem**: No `data-testid` attributes made it difficult for test generation tools to reliably target elements
**Solution**: Added comprehensive `data-testid` attributes to all testable elements

### 3. Inconsistent Test Patterns

**Problem**: No dedicated Header tests and inconsistent patterns made it hard for AI tools to understand testing expectations
**Solution**: Created comprehensive test suite with clear patterns

## Test Data Attributes Added

```html
<!-- Header Structure -->
<header data-testid="header">
  <div data-testid="logo">
    <Link data-testid="logo-link">
      <span data-testid="logo-text">DULICHVIETNAM</span>
    </Link>
  </div>

  <nav data-testid="main-nav">
    <Link data-testid="nav-link-home">Trang chủ</Link>
    <Link data-testid="nav-link-tour">Tour Du Lịch</Link>
    <Link data-testid="nav-link-handbook">Sổ tay du lịch</Link>
    <Link data-testid="nav-link-about">Giới thiệu</Link>
  </nav>

  <div data-testid="header-contact">
    <div data-testid="support-dropdown">Hỗ trợ toàn quốc ▼</div>
    <div data-testid="hotline">
      <span data-testid="phone-number">1800 8989</span>
    </div>
  </div>
</header>
```

## Example Test Cases

### Basic Element Display Tests

```typescript
it("should display the company name 'DULICHVIETNAM' in the logo", () => {
  cy.get('[data-testid="logo-text"]')
    .should("be.visible")
    .and("contain.text", "DULICHVIETNAM");
});

it("should display the hotline number '1800 8989'", () => {
  cy.get('[data-testid="phone-number"]')
    .should("be.visible")
    .and("contain.text", "1800 8989");
});
```

### Navigation Tests

```typescript
it("should navigate to the correct route when clicking 'Giới thiệu'", () => {
  cy.get('[data-testid="nav-link-about"]').click();
  cy.url().should("include", "/gioi-thieu-du-lich");
});
```

### Active State Tests

```typescript
it("should show 'active' class on about link when on about page", () => {
  cy.visit("/gioi-thieu-du-lich");
  cy.get('[data-testid="nav-link-about"]').should("have.class", "active");
});
```

## Page Object Methods

The HomePage page object now includes these Header-specific methods:

### Navigation

- `navigateToHome()`
- `navigateToTour()`
- `navigateToHandbook()`
- `navigateToAbout()`
- `clickLogo()`

### Verification

- `verifyHeaderVisible()`
- `verifyLogoText(expectedText?)`
- `verifyPhoneNumber(expectedNumber?)`
- `verifyNavigationLinksVisible()`
- `verifyActiveNavigationLink(linkName)`
- `verifySupportDropdownVisible()`

## What This Fixes for Tusk

1. **Reliable Element Targeting**: `data-testid` attributes provide stable selectors that won't break with CSS changes
2. **Clear Test Patterns**: Comprehensive test examples show Tusk exactly how to structure tests
3. **Correct Assertions**: Fixed route paths ensure navigation tests will pass
4. **Comprehensive Coverage**: Examples cover all aspects (display, navigation, state, accessibility, responsive)
5. **Page Object Integration**: Shows how to use page objects for maintainable tests

## Running the Tests

```bash
# Run all header tests
npm run cypress:run -- --spec "e2e/integration/header.cy.ts"

# Run tests with specific tags
npm run test:checklist

# Run in Docker (preferred)
docker compose -f docker-compose.dev.yml run --rm cypress-dev npm run cypress:run
```

These fixes should resolve Tusk's inability to generate valid test code for the Header component.
