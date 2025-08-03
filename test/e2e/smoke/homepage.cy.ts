/// <reference types="cypress" />

import { HomePage } from "../../pageObjects/HomePage";
import { TestHelpers } from "../../support/helpers/testHelpers";

describe("Homepage Smoke Tests", () => {
  let homePage: HomePage;

  beforeEach(() => {
    homePage = new HomePage();
    homePage.visit();
  });

  describe("Page Load Tests", { tags: "checklist_smoke" }, () => {
    it("should load homepage successfully", () => {
      // Verify page title
      homePage.verifyPageTitle();

      // Verify main elements are visible
      cy.get(".header").should("be.visible");
      cy.get(".banner-slider").should("be.visible");
      cy.get(".grid").should("be.visible");
      cy.get("footer").should("be.visible");

      // Take screenshot for visual validation
      TestHelpers.takeScreenshot("homepage-loaded");
    });

    it("should display company logo and branding", () => {
      cy.get(".logo-text").should("contain", "DULICHMETOO");
      cy.get("footer").should("contain", "CÔNG TY DU LỊCH DỊCH VỤ METOO");
      cy.get("footer").should("contain", "0909009009");
    });
  });

  describe("Banner Slider Tests", { tags: "checklist_smoke" }, () => {
    it("should display banner slider with navigation", () => {
      homePage.verifySliderIsVisible();

      // Verify navigation buttons
      cy.get(".prev-btn").should("be.visible");
      cy.get(".next-btn").should("be.visible");
      cy.get(".slider-dots").should("be.visible");
    });

    it("should navigate through slides using buttons", () => {
      // Click next button
      homePage.clickNextSlide();
      cy.wait(500);

      // Click previous button
      homePage.clickPrevSlide();
      cy.wait(500);

      // Click on dot navigation
      homePage.clickSliderDot(2);
      cy.wait(500);
    });
  });

  describe("Destination Cards Tests", { tags: "checklist_smoke" }, () => {
    it("should interact with destination cards", () => {
      const destinationName = "Hà Nội";

      // Verify card is visible
      homePage.getDestinationCard(destinationName).should("be.visible");

      // Test like functionality
      homePage.likeDestination(destinationName);

      // Verify like button response
      homePage
        .getDestinationCard(destinationName)
        .find(".like-btn")
        .should("contain", "❤️");
    });
  });

  describe("Footer Tests", { tags: "checklist_smoke" }, () => {
    it("should display footer with all sections", () => {
      homePage.scrollToFooter();

      // Verify footer sections
      cy.get("footer").should("contain", "HỖ TRỢ KHÁCH HÀNG");
      cy.get("footer").should("contain", "THÔNG TIN CẦN BIẾT");
      cy.get("footer").should("contain", "DỊCH VỤ");
      cy.get("footer").should("contain", "DU LỊCH THÔNG MINH");
    });

    it("should allow newsletter signup", () => {
      const email = TestHelpers.generateRandomEmail();

      homePage.scrollToFooter();
      homePage.signupNewsletter(email);

      // Verify signup attempt was made
      cy.get(".newsletter-signup").should("be.visible");
    });
  });

  describe("Responsive Design Tests", { tags: "checklist_smoke" }, () => {
    it("should display correctly on mobile", () => {
      cy.viewport(375, 667);

      // Verify main elements are still visible
      cy.get(".header").should("be.visible");
      cy.get(".grid").should("be.visible");

      // Take screenshot for visual comparison
      TestHelpers.takeScreenshot("homepage-mobile");
    });

    it("should display correctly on tablet", () => {
      cy.viewport(768, 1024);

      // Verify main elements are still visible
      cy.get(".header").should("be.visible");
      cy.get(".grid").should("be.visible");

      // Take screenshot for visual comparison
      TestHelpers.takeScreenshot("homepage-tablet");
    });

    it("should display correctly on desktop", () => {
      cy.viewport(1280, 720);

      // Verify main elements are still visible
      cy.get(".header").should("be.visible");
      cy.get(".grid").should("be.visible");

      // Take screenshot for visual comparison
      TestHelpers.takeScreenshot("homepage-desktop");
    });
  });
});
