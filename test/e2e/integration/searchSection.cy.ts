describe('SearchSection', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Text Search', () => {
    it('should display matching tours when user searches by text', () => {
      // Type search text
      cy.get('.search-input').type('Hạ Long');
      
      // Click search button
      cy.get('.search-btn').click();

      // Verify loading state
      cy.get('.search-loading').should('be.visible');
      
      // Wait for results and verify
      cy.get('.tour-card', { timeout: 10000 }).should('have.length', 1);
      cy.get('.tour-card').should('contain', 'Du lịch Hạ Long 3 ngày 2 đêm');
    });

    it('should show empty results for non-matching search', () => {
      cy.get('.search-input').type('Invalid Tour Name');
      cy.get('.search-btn').click();
      
      cy.get('.search-loading').should('be.visible');
      cy.get('.tour-card').should('not.exist');
    });
  });

  describe('Filter Search', () => {
    it('should filter tours based on selected criteria', () => {
      // Select filters
      cy.get('select').eq(0).select('domestic');
      cy.get('select').eq(1).select('hanoi');
      cy.get('select').eq(2).select('north');
      
      // Click search button
      cy.get('.search-btn-main').click();

      // Verify loading state
      cy.get('.search-loading').should('be.visible');
      
      // Wait for results and verify
      cy.get('.tour-card', { timeout: 10000 }).should('have.length', 1);
      cy.get('.tour-card').should('contain', 'Du lịch Hạ Long 3 ngày 2 đêm');
    });

    it('should show all domestic tours when only tour type is selected', () => {
      cy.get('select').eq(0).select('domestic');
      cy.get('.search-btn-main').click();
      
      cy.get('.search-loading').should('be.visible');
      cy.get('.tour-card', { timeout: 10000 }).should('have.length', 3);
    });
  });

  describe('Loading State', () => {
    it('should show and hide loading indicator appropriately', () => {
      cy.get('.search-input').type('Hạ Long');
      cy.get('.search-btn').click();
      
      // Verify loading appears
      cy.get('.search-loading').should('be.visible');
      
      // Verify loading disappears after results
      cy.get('.tour-card', { timeout: 10000 }).should('exist');
      cy.get('.search-loading').should('not.exist');
    });
  });

  describe('Search Results Display', () => {
    it('should display all tour information correctly in results', () => {
      cy.get('.search-input').type('Hạ Long');
      cy.get('.search-btn').click();
      
      cy.get('.tour-card', { timeout: 10000 }).first().within(() => {
        cy.get('h4').should('contain', 'Du lịch Hạ Long 3 ngày 2 đêm');
        cy.get('.tour-description').should('contain', 'Khám phá vịnh Hạ Long');
        cy.get('.tour-duration').should('contain', '3 ngày 2 đêm');
        cy.get('.tour-type').should('contain', 'Tour trong nước');
        cy.get('.tour-price').should('contain', '2.990.000đ');
        cy.get('.book-btn').should('be.visible');
      });
    });
  });
});
