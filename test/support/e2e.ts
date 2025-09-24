// Import cypress grep for tags support
import "@cypress/grep";

// Import commands.js using ES2015 syntax:
import "./commands";

// Import helper functions
import "./helpers/testHelpers";

// ========================================
// GLOBAL TEST SETUP
// ========================================

beforeEach(() => {
  // Set consistent viewport (default desktop)
  const width = Cypress.env("VIEWPORT_WIDTH") || 1280;
  const height = Cypress.env("VIEWPORT_HEIGHT") || 720;
  cy.viewport(width, height);

  // Clean state before each test
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.clearAllSessionStorage();

  // Visit base URL with reasonable timeout
  cy.visit("/", { timeout: 20000 });

  // Wait for page to be interactive
  cy.get("body").should("be.visible");
});

// Skip mobile tests when running in desktop-only mode
beforeEach(() => {
  if (Cypress.env("DESKTOP_ONLY") === true) {
    const testTitle = Cypress.currentTest.title.toLowerCase();
    const isMobileTest = [
      "mobile",
      "tablet",
      "responsive",
      "320px",
      "768px",
      "small screen",
    ].some((keyword) => testTitle.includes(keyword));

    if (isMobileTest) {
      cy.log("⏭️ Skipping mobile test in desktop-only mode");
      return;
    }
  }
});

// ========================================
// GLOBAL HOOKS
// ========================================

// Clean up after each test
afterEach(function () {
  // Take screenshot on failure
  if (this.currentTest?.state === "failed") {
    const testName = this.currentTest.title.replace(/\s+/g, "-");
    cy.screenshot(`failed-${testName}`, { capture: "fullPage" });
  }
});

// ========================================
// CUSTOM COMMANDS & ASSERTIONS
// ========================================

// Enhanced text assertion
chai.use((chai) => {
  chai.Assertion.addMethod("containText", function (expectedText) {
    const element = this._obj;
    const actualText = element.text().trim();

    this.assert(
      actualText.includes(expectedText),
      `Expected element to contain text "${expectedText}", but got "${actualText}"`,
      `Expected element NOT to contain text "${expectedText}", but it was found`,
      expectedText,
      actualText
    );
  });

  // Add visible text assertion
  chai.Assertion.addMethod("haveVisibleText", function (expectedText) {
    const element = this._obj;

    this.assert(
      element.is(":visible") && element.text().trim() === expectedText,
      `Expected element to be visible with text "${expectedText}"`,
      `Expected element NOT to be visible with text "${expectedText}"`,
      expectedText
    );
  });
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Add global test utilities
Cypress.Commands.add("waitForPageLoad", () => {
  cy.get("body").should("be.visible");
  cy.window().should("have.property", "document");
});

Cypress.Commands.add("skipOnMobile", () => {
  cy.window()
    .its("innerWidth")
    .then((width) => {
      if (width < 768) {
        cy.log("⏭️ Skipping on mobile viewport");
        return;
      }
    });
});

// ========================================
// TYPE DECLARATIONS
// ========================================

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Wait for page to be fully loaded and interactive
       */
      waitForPageLoad(): Chainable<Element>;

      /**
       * Skip test if running on mobile viewport
       */
      skipOnMobile(): Chainable<Element>;
    }
  }
}
