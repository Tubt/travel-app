/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface SuiteConfigOverrides {
      tags?: string | string[];
    }
  }
}

export {};
