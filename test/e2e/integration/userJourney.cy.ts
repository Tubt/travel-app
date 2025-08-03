/// <reference types="cypress" />
/// <reference path="../../support/cypress.d.ts" />

describe('Basic UI Check Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Homepage UI Elements', { tags: 'checklist_integrated' }, () => {
    it('should display all main UI components', () => {
      // Check page loads successfully
      cy.get('body').should('be.visible');

      // Check header exists
      cy.get('.header').should('be.visible');
      cy.get('.logo-text').should('contain', 'DULICHMETOO');

      // Check banner slider exists
      cy.get('.banner-slider').should('be.visible');
      cy.get('.slide').should('have.length.greaterThan', 0);

      // Check navigation buttons exist (but don't click)
      cy.get('.prev-btn').should('be.visible');
      cy.get('.next-btn').should('be.visible');
      cy.get('.slider-dots').should('be.visible');

      // Check search section exists
      cy.get('.search-section').should('be.visible');
      cy.get('select').should('have.length.greaterThan', 0);
      cy.get('input[type="date"]').should('be.visible');

      // Check destination cards exist
      cy.get('.grid').should('be.visible');
      cy.get('.card').should('have.length.greaterThan', 0);

      // Check each card has required elements
      cy.get('.card').each(($card) => {
        cy.wrap($card).find('.card-img, .card-video').should('exist');
        cy.wrap($card).find('h3').should('be.visible');
        cy.wrap($card).find('.card-desc').should('be.visible');
        cy.wrap($card).find('.like-btn').should('be.visible');
        cy.wrap($card).find('.details-btn').should('be.visible');
      });

      // Check footer exists
      cy.get('footer').should('be.visible');
      cy.get('footer').should('contain', 'CÔNG TY DU LỊCH DỊCH VỤ METOO');
      cy.get('footer').should('contain', '0909009009');
    });

    it('should display specific destination cards', () => {
      // Check specific destinations are present
      cy.contains('Hà Nội').should('be.visible');
      cy.contains('Sapa').should('be.visible');
      cy.contains('Hạ Long').should('be.visible');
      cy.contains('Phú Quốc').should('be.visible');
      cy.contains('Đà Nẵng').should('be.visible');
      cy.contains('Hội An').should('be.visible');
    });

    it('should have correct page title', () => {
      cy.title().should('include', 'Việt Nam đất nước của sự tươi đẹp');
    });

    it('should display footer sections', () => {
      // Check footer sections exist
      cy.get('footer').should('contain', 'HỖ TRỢ KHÁCH HÀNG');
      cy.get('footer').should('contain', 'THÔNG TIN CẦN BIẾT');
      cy.get('footer').should('contain', 'DỊCH VỤ');
      cy.get('footer').should('contain', 'DU LỊCH THÔNG MINH');

      // Check newsletter signup form exists
      cy.get('.newsletter-signup').should('be.visible');
      cy.get('.email-input').should('be.visible');
      cy.get('.signup-btn').should('be.visible');
    });

    it('should display travel menu', () => {
      // Check travel menu exists
      cy.get('.travel-menu').should('be.visible');
      cy.get('.nav-item').should('have.length.greaterThan', 0);
    });
  });

  describe('Responsive Layout Check', { tags: 'checklist_integrated' }, () => {
    const viewports = [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1280, height: 720 },
    ];

    viewports.forEach((viewport) => {
      it(`should display correctly on ${viewport.name}`, () => {
        cy.viewport(viewport.width, viewport.height);

        // Check main elements are still visible
        cy.get('.header').should('be.visible');
        cy.get('.banner-slider').should('be.visible');
        cy.get('.grid').should('be.visible');
        cy.get('footer').should('be.visible');

        // Check at least some cards are visible
        cy.get('.card').should('have.length.greaterThan', 0);
      });
    });
  });

  describe('Content Verification', () => {
    it('should have proper content structure', () => {
      // Check each destination card has proper structure
      cy.get('.card')
        .first()
        .within(() => {
          // Should have either image or video
          cy.get('.card-img, .card-video').should('exist');

          // Should have title
          cy.get('h3').should('be.visible').and('not.be.empty');

          // Should have description
          cy.get('.card-desc').should('be.visible').and('not.be.empty');

          // Should have action buttons
          cy.get('.like-btn').should('be.visible');
          cy.get('.details-btn').should('be.visible');
        });
    });

    it('should have working links and buttons (visual check only)', () => {
      // Just verify buttons exist and are clickable (but don't actually click)
      cy.get('.like-btn').should('be.visible').and('not.be.disabled');
      cy.get('.details-btn').should('be.visible').and('not.be.disabled');
      cy.get('.prev-btn').should('be.visible').and('not.be.disabled');
      cy.get('.next-btn').should('be.visible').and('not.be.disabled');
      cy.get('.signup-btn').should('be.visible').and('not.be.disabled');
    });
  });
});
