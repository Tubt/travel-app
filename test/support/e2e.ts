// Import cypress grep for tags support
import '@cypress/grep';

// Import commands.js using ES2015 syntax:
import './commands';

// Import helper functions
import './helpers/testHelpers';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Global configuration
Cypress.on('uncaught:exception', () => {
  // Prevent Cypress from failing the test on uncaught exceptions
  // that might come from the application under test
  return false;
});

// Global before hook
beforeEach(() => {
  // Set viewport consistently
  cy.viewport(1280, 720);

  // Clear local storage and cookies before each test
  cy.clearLocalStorage();
  cy.clearCookies();

  // Visit the base URL if not already there
  cy.visit('/');
});

// Custom assertion messages
chai.use(function (chai) {
  chai.Assertion.addMethod('containText', function (expectedText) {
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
