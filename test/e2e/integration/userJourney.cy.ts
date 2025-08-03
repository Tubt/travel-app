/// <reference types="cypress" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../support/cypress.d.ts" />

describe("Basic UI Check Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Homepage UI Elements", { tags: "checklist_integrated" }, () => {

    it("should have correct page title", () => {
      cy.title().should("include", "Việt Nam đất nước của sự tươi đẹp");
    });

    it("should display footer sections", () => {
      // Check footer sections exist
      cy.get("footer").should("contain", "HỖ TRỢ KHÁCH HÀNG");
      cy.get("footer").should("contain", "THÔNG TIN CẦN BIẾT");
      cy.get("footer").should("contain", "DỊCH VỤ");
      cy.get("footer").should("contain", "DU LỊCH THÔNG MINH");

      // Check newsletter signup form exists
      cy.get(".newsletter-signup").should("be.visible");
      cy.get(".email-input").should("be.visible");
      cy.get(".signup-btn").should("be.visible");
    });

    it("should display travel menu", () => {
      // Check travel menu exists
      cy.get(".travel-menu").should("be.visible");
      cy.get(".nav-item").should("have.length.greaterThan", 0);
    });
  });

  describe("Responsive Layout Check", { tags: "checklist_integrated" }, () => {
    const viewports = [
      { name: "mobile", width: 375, height: 667 },
      { name: "tablet", width: 768, height: 1024 },
      { name: "desktop", width: 1280, height: 720 },
    ];

    viewports.forEach((viewport) => {
      it(`should display correctly on ${viewport.name}`, () => {
        cy.viewport(viewport.width, viewport.height);

        // Check main elements are still visible
        cy.get(".header").should("be.visible");
        cy.get(".banner-slider").should("be.visible");
        cy.get(".grid").should("be.visible");
        cy.get("footer").should("be.visible");

        // Check at least some cards are visible
        cy.get(".card").should("have.length.greaterThan", 0);
      });
    });
  });

  describe("Content Verification", { tags: "checklist_integrated" }, () => {

    it("should have working links and buttons (visual check only)", () => {
      // Just verify buttons exist and are clickable (but don't actually click)
      cy.get(".like-btn").should("be.visible").and("not.be.disabled");
      cy.get(".details-btn").should("be.visible").and("not.be.disabled");
      cy.get(".prev-btn").should("be.visible").and("not.be.disabled");
      cy.get(".next-btn").should("be.visible").and("not.be.disabled");
      cy.get(".signup-btn").should("be.visible").and("not.be.disabled");
    });
  });
});
