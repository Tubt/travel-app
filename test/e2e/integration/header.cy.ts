/// <reference types="cypress" />

describe("Header Component Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Header Elements Display", { tags: "checklist_integrated" }, () => {
    it("should display the company name 'DULICHVIETNAM' in the logo when rendered on any page", () => {
      // Verify header is visible
      cy.get('[data-testid="header"]').should("be.visible");

      // Verify logo contains company name
      cy.get('[data-testid="logo-text"]')
        .should("be.visible")
        .and("contain.text", "DULICHVIETNAM");
    });

    it("should display the hotline number '1800 8989' in the contact section when rendered on any page", () => {
      // Verify header contact section is visible
      cy.get('[data-testid="header-contact"]').should("be.visible");

      // Verify hotline number is displayed
      cy.get('[data-testid="phone-number"]')
        .should("be.visible")
        .and("contain.text", "1800 8989");
    });

    it("should display all navigation links in the header", () => {
      // Verify main navigation is visible
      cy.get('[data-testid="main-nav"]').should("be.visible");

      // Verify all navigation links are present
      cy.get('[data-testid="nav-link-home"]')
        .should("be.visible")
        .and("contain.text", "Trang chủ");

      cy.get('[data-testid="nav-link-tour"]')
        .should("be.visible")
        .and("contain.text", "Tour Du Lịch");

      cy.get('[data-testid="nav-link-handbook"]')
        .should("be.visible")
        .and("contain.text", "Sổ tay du lịch");

      cy.get('[data-testid="nav-link-about"]')
        .should("be.visible")
        .and("contain.text", "Giới thiệu");
    });

    it("should display support dropdown in header contact section", () => {
      cy.get('[data-testid="support-dropdown"]')
        .should("be.visible")
        .and("contain.text", "Hỗ trợ toàn quốc");
    });
  });

  describe("Header Navigation Tests", { tags: "checklist_integrated" }, () => {
    it("should navigate to the home page when clicking the logo", () => {
      // Navigate away from home first
      cy.get('[data-testid="nav-link-tour"]').click();
      cy.url().should("include", "/tour-du-lich");

      // Click logo to return home
      cy.get('[data-testid="logo-link"]').click();
      cy.url().should("eq", Cypress.config().baseUrl + "/");
    });

    it("should navigate to the 'Tour Du Lịch' page when clicking the tour link", () => {
      cy.get('[data-testid="nav-link-tour"]').click();
      cy.url().should("include", "/tour-du-lich");
    });

    it("should navigate to the 'Sổ tay du lịch' page when clicking the handbook link", () => {
      cy.get('[data-testid="nav-link-handbook"]').click();
      cy.url().should("include", "/so-tay-du-lich");
    });

    it("verify that clicking the 'Giới thiệu' link in the Header navigates to the correct updated route '/gioi-thieu-du-lich'", () => {
      cy.get('[data-testid="nav-link-about"]').click();
      cy.url().should("include", "/gioi-thieu-du-lich");
    });

    it("should navigate back to home page when clicking 'Trang chủ' link", () => {
      // Navigate away from home first
      cy.get('[data-testid="nav-link-tour"]').click();
      cy.url().should("include", "/tour-du-lich");

      // Navigate back to home
      cy.get('[data-testid="nav-link-home"]').click();
      cy.url().should("eq", Cypress.config().baseUrl + "/");
    });
  });

  describe(
    "Active Navigation State Tests",
    { tags: "checklist_integrated" },
    () => {
      it("should show 'active' class on home link when on homepage", () => {
        cy.visit("/");
        cy.get('[data-testid="nav-link-home"]').should("have.class", "active");
      });

      it("should show 'active' class on tour link when on tour page", () => {
        cy.visit("/tour-du-lich");
        cy.get('[data-testid="nav-link-tour"]').should("have.class", "active");
      });

      it("should show 'active' class on handbook link when on handbook page", () => {
        cy.visit("/so-tay-du-lich");
        cy.get('[data-testid="nav-link-handbook"]').should(
          "have.class",
          "active"
        );
      });

      it("verify that the 'Giới thiệu' navigation link correctly shows the 'active' class when the user is on the about page", () => {
        cy.visit("/gioi-thieu-du-lich");
        cy.get('[data-testid="nav-link-about"]').should("have.class", "active");
      });

      it("should only have one active link at a time", () => {
        // Test on different pages
        const pages = [
          { url: "/", activeLink: '[data-testid="nav-link-home"]' },
          { url: "/tour-du-lich", activeLink: '[data-testid="nav-link-tour"]' },
          {
            url: "/so-tay-du-lich",
            activeLink: '[data-testid="nav-link-handbook"]',
          },
          {
            url: "/gioi-thieu-du-lich",
            activeLink: '[data-testid="nav-link-about"]',
          },
        ];

        pages.forEach((page) => {
          cy.visit(page.url);

          // Check that only the expected link is active
          cy.get(page.activeLink).should("have.class", "active");

          // Check that other links are not active
          cy.get('[data-testid^="nav-link-"]')
            .not(page.activeLink)
            .should("not.have.class", "active");
        });
      });
    }
  );

  describe(
    "Header Responsive Design Tests",
    { tags: "checklist_integrated" },
    () => {
      const viewports = [
        { name: "mobile", width: 375, height: 667 },
        { name: "tablet", width: 768, height: 1024 },
        { name: "desktop", width: 1280, height: 720 },
      ];

      viewports.forEach((viewport) => {
        it(`should display header correctly on ${viewport.name}`, () => {
          cy.viewport(viewport.width, viewport.height);

          // Header should be visible on all screen sizes
          cy.get('[data-testid="header"]').should("be.visible");
          cy.get('[data-testid="logo-text"]').should("be.visible");
          cy.get('[data-testid="phone-number"]').should("be.visible");

          // Navigation should be present (may be styled differently)
          cy.get('[data-testid="main-nav"]').should("exist");
        });
      });
    }
  );

  describe(
    "Header Accessibility Tests",
    { tags: "checklist_integrated" },
    () => {
      it("should have proper link attributes for accessibility", () => {
        // All navigation links should be properly accessible
        cy.get('[data-testid^="nav-link-"]').each(($link) => {
          cy.wrap($link).should("have.attr", "href").and("not.be.empty");
        });

        // Logo link should be accessible
        cy.get('[data-testid="logo-link"]')
          .should("have.attr", "href")
          .and("not.be.empty");
      });

      it("should have readable text content", () => {
        // All navigation links should have visible text
        cy.get('[data-testid^="nav-link-"]').each(($link) => {
          cy.wrap($link).should("be.visible").and("not.be.empty");
        });
      });
    }
  );

  describe("Header Performance Tests", { tags: "checklist_integrated" }, () => {
    it("should load header elements quickly", () => {
      const startTime = Date.now();

      cy.visit("/").then(() => {
        // Header should be visible within reasonable time
        cy.get('[data-testid="header"]').should("be.visible");
        cy.get('[data-testid="logo-text"]').should("be.visible");
        cy.get('[data-testid="main-nav"]').should("be.visible");

        const loadTime = Date.now() - startTime;
        expect(loadTime).to.be.lessThan(3000); // Should load within 3 seconds
      });
    });
  });
});
