/// <reference types="cypress" />

import { TestHelpers } from "../../support/helpers/testHelpers";

describe("Search Functionality E2E Tests", () => {
  beforeEach(() => {
    cy.visit("/"); // Uses baseUrl from cypress.config.js
    cy.wait(1000); // Wait for page to fully load
  });

  describe("Search Section Rendering", { tags: "checklist_integrated" }, () => {
    it("should display search section with all elements", () => {
      // Verify search section is visible
      cy.get('[data-testid="search-section"]').should("be.visible");
      cy.get('[data-testid="destination-search-box"]').should("be.visible");
      
      // Verify search title
      cy.get('[data-testid="destination-search-title"]')
        .should("be.visible")
        .and("contain", "TÌM TOUR HOT THEO ĐỊA DANH, ĐIỂM ĐẾN");
      
      // Verify input and button
      cy.get('[data-testid="destination-search-input"]')
        .should("be.visible")
        .and("have.attr", "placeholder", "Nhập thành phố / khu vực");
      
      cy.get('[data-testid="destination-search-button"]')
        .should("be.visible")
        .and("contain", "🔍");
    });

    it("should display tour departure search box", () => {
      cy.get('[data-testid="tour-departure-search-box"]').should("be.visible");
      cy.get('[data-testid="tour-type-select"]').should("be.visible");
      cy.get('[data-testid="departure-location-select"]').should("be.visible");
      cy.get('[data-testid="destination-select"]').should("be.visible");
      cy.get('[data-testid="tour-search-button"]').should("be.visible");
    });
  });

  describe("Search by Destination Name", { tags: "checklist_integrated" }, () => {
    it("should search for Da Nang and show correct results", () => {
      // Type in search box
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("Da Nang");
      
      // Click search button
      cy.get('[data-testid="destination-search-button"]').click();
      
      // Wait for results
      cy.wait(500);
      
      // Verify search results info appears
      cy.get('[data-testid="search-results-info"]').should("be.visible");
      cy.get('[data-testid="search-results-text"]')
        .should("contain", "Tìm thấy")
        .and("contain", "Da Nang");
      
      // Verify Da Nang card is visible
      cy.get('[data-testid="destination-card-1"]').should("be.visible");
      cy.get('[data-testid="card-title-1"]').should("contain", "Da Nang");
      
      // Take screenshot
      TestHelpers.takeScreenshot("search-da-nang");
    });

    it("should search for Ha Noi using Enter key", () => {
      // Type and press Enter
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("Ha Noi{enter}");
      
      // Wait for results
      cy.wait(500);
      
      // Verify results
      cy.get('[data-testid="search-results-info"]').should("be.visible");
      cy.get('[data-testid="destination-card-2"]').should("be.visible");
      cy.get('[data-testid="card-title-2"]').should("contain", "Ha Noi");
    });

    it("should search for Phu Quoc", () => {
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("Phu Quoc");
      
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      
      // Verify Phu Quoc card is visible
      cy.get('[data-testid="destination-card-3"]').should("be.visible");
      cy.get('[data-testid="card-title-3"]').should("contain", "Phu Quoc");
    });
  });

  describe("Search by Vietnamese Characters", { tags: "checklist_integrated" }, () => {
    it("should search with Vietnamese diacritics - Hà Nội", () => {
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("Hà Nội");
      
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      
      cy.get('[data-testid="search-results-info"]').should("be.visible");
      cy.get('[data-testid="destination-card-2"]').should("be.visible");
    });

    it("should search with Vietnamese diacritics - Đà Nẵng", () => {
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("Đà Nẵng");
      
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      
      cy.get('[data-testid="destination-card-1"]').should("be.visible");
    });
  });

  describe("Search by Description Content", { tags: "checklist_integrated" }, () => {
    it("should search for destinations with beaches - 'biển'", () => {
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("biển");
      
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      
      // Should find multiple destinations with beaches
      cy.get('[data-testid="search-results-info"]').should("be.visible");
      cy.get('[data-testid="destination-grid"]')
        .find('[data-testid^="destination-card-"]')
        .should("have.length.greaterThan", 0);
    });

    it("should search for food - 'phở'", () => {
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("phở");
      
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      
      // Should find destinations mentioning phở
      cy.get('[data-testid="search-results-info"]').should("be.visible");
      cy.get('[data-testid="destination-grid"]')
        .find('[data-testid^="destination-card-"]')
        .should("have.length.greaterThan", 0);
    });
  });

  describe("No Results Scenarios", { tags: "checklist_integrated" }, () => {
    it("should show no results message for non-existent destination", () => {
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("xyz123nonexistent");
      
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      
      // Verify no results message
      cy.get('[data-testid="no-results-message"]')
        .should("be.visible")
        .and("contain", "Không tìm thấy kết quả nào")
        .and("contain", "xyz123nonexistent");
      
      // Verify no destination cards are shown
      cy.get('[data-testid="destination-grid"]')
        .find('[data-testid^="destination-card-"]')
        .should("have.length", 0);
      
      TestHelpers.takeScreenshot("search-no-results");
    });
  });

  describe("Empty and Clear Search", { tags: "checklist_integrated" }, () => {
    it("should show all destinations when search is cleared", () => {
      // First perform a search
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("Da Nang");
      
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      
      // Verify filtered results
      cy.get('[data-testid="search-results-info"]').should("be.visible");
      
      // Clear search
      cy.get('[data-testid="destination-search-input"]').clear();
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      
      // Should show all destinations (6 total)
      cy.get('[data-testid="destination-grid"]')
        .find('[data-testid^="destination-card-"]')
        .should("have.length", 6);
      
      // Search results info should not be visible
      cy.get('[data-testid="search-results-info"]').should("not.exist");
    });
  });

  describe("Multiple Consecutive Searches", { tags: "checklist_integrated" }, () => {
    it("should handle multiple searches in sequence", () => {
      // First search
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("Da Nang");
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      cy.get('[data-testid="destination-card-1"]').should("be.visible");
      
      // Second search
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("Ha Noi");
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      cy.get('[data-testid="destination-card-2"]').should("be.visible");
      
      // Third search
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("Nha Trang");
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      cy.get('[data-testid="destination-card-5"]').should("be.visible");
    });
  });

  describe("Search with Interaction", { tags: "checklist_integrated" }, () => {
    it("should allow liking a destination from search results", () => {
      // Search for Da Nang
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("Da Nang");
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      
      // Like the destination
      cy.get('[data-testid="like-button-1"]').click();
      
      // Verify like count increased
      cy.get('[data-testid="like-button-1"]')
        .should("contain", "❤️ Like")
        .and("contain", "1");
    });

    it("should allow opening modal from search results", () => {
      // Search for Phu Quoc
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("Phu Quoc");
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      
      // Click "Xem thêm" button
      cy.get('[data-testid="details-button-3"]').click();
      cy.wait(500);
      
      // Verify modal is open
      cy.get(".modal").should("be.visible");
      cy.get(".modal").should("contain", "Phu Quoc");
    });
  });

  describe("Case Insensitive Search", { tags: "checklist_integrated" }, () => {
    it("should find results regardless of case - lowercase", () => {
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("da nang");
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      
      cy.get('[data-testid="destination-card-1"]').should("be.visible");
    });

    it("should find results regardless of case - uppercase", () => {
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("HA NOI");
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      
      cy.get('[data-testid="destination-card-2"]').should("be.visible");
    });

    it("should find results regardless of case - mixed case", () => {
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("PhU qUoC");
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      
      cy.get('[data-testid="destination-card-3"]').should("be.visible");
    });
  });

  describe("Search Results Count", { tags: "checklist_integrated" }, () => {
    it("should display correct count for single result", () => {
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("Ho Chi Minh");
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      
      cy.get('[data-testid="search-results-text"]')
        .should("contain", "Tìm thấy")
        .and("contain", "1")
        .and("contain", "kết quả");
    });

    it("should display correct count for multiple results", () => {
      cy.get('[data-testid="destination-search-input"]')
        .clear()
        .type("biển");
      cy.get('[data-testid="destination-search-button"]').click();
      cy.wait(500);
      
      cy.get('[data-testid="search-results-text"]')
        .should("contain", "Tìm thấy")
        .and("contain", "kết quả");
    });
  });

  describe("Responsive Search on Mobile", { tags: "checklist_integrated" }, () => {
    it("should work correctly on mobile viewport", () => {
      cy.viewport(375, 667);
      
      // Search should still work
      cy.get('[data-testid="destination-search-input"]')
        .should("be.visible")
        .clear()
        .type("Nha Trang");
      
      cy.get('[data-testid="destination-search-button"]')
        .should("be.visible")
        .click();
      
      cy.wait(500);
      
      cy.get('[data-testid="destination-card-5"]').should("be.visible");
      
      TestHelpers.takeScreenshot("search-mobile");
    });
  });
});

