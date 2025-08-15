// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Add custom commands to help with TUSK-generated tests
Cypress.Commands.add("importFromSrc", (modulePath: string) => {
  // Helper command to import modules from src with proper path resolution
  return cy.then(() => {
    const fullPath = `../../src/${modulePath}`;
    return import(fullPath);
  });
});

// Declare the custom command for TypeScript
declare global {
  namespace Cypress {
    interface Chainable {
      importFromSrc(modulePath: string): Chainable<any>;
    }
  }
}

export {};
