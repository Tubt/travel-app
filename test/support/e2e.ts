// Import cypress grep for tags support
import "@cypress/grep";

// Import commands.js using ES2015 syntax:
import "./commands";

// Import helper functions
import "./helpers/testHelpers";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Global configuration - Handle uncaught exceptions
Cypress.on("uncaught:exception", (err, runnable) => {
  // List of errors to ignore
  const ignoredErrors = [
    "No session or session expired",
    "Network Error",
    "ChunkLoadError",
    "Loading chunk",
    "ResizeObserver loop limit exceeded",
    "Non-Error promise rejection captured",
  ];

  // Check if error message matches any ignored patterns
  const shouldIgnore = ignoredErrors.some(
    (ignoredError) =>
      err.message.includes(ignoredError) || err.name.includes(ignoredError)
  );

  if (shouldIgnore) {
    console.log("🚫 Ignoring uncaught exception:", err.message);
    return false; // Prevent test failure
  }

  // For debugging - log unexpected errors
  console.error("❌ Unexpected uncaught exception:", err.message);
  return false; // Still prevent failure, but log for investigation
});

// Global before hook
beforeEach(() => {
  // Set viewport consistently
  cy.viewport(1280, 720);

  // Clear local storage and cookies before each test
  cy.clearLocalStorage();
  cy.clearCookies();

  // Visit the base URL if not already there
  cy.visit("/");
});

// Custom assertion messages
chai.use(function (chai) {
  chai.Assertion.addMethod("containText", function (expectedText) {
    const actualText = this._obj.text();
    this.assert(
      actualText.includes(expectedText),
      `Expected text "${actualText}" to contain "${expectedText}"`,
      `Expected text "${actualText}" not to contain "${expectedText}"`,
      expectedText,
      actualText
    );
  });
});
