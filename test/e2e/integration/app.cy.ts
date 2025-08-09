describe('App Routing', () => {
  /**
   * Test scenario: App should render the GioiThieuPage when navigating to '/gioi-thieu-du-lich'.
   * This test verifies that the new route for the "About" page, updated in the pull request,
   * correctly loads the corresponding page component.
   */
  it("should render the GioiThieuPage when navigating to /gioi-thieu-du-lich", () => {
    // Navigate directly to the new "Giới thiệu" page route
    cy.visit('/gioi-thieu-du-lich');

    // Assert that the URL is correct
    cy.url().should('include', '/gioi-thieu-du-lich');

    // Assert that the main heading of the GioiThieuPage is visible,
    // confirming the correct component has been rendered.
    cy.contains('h1', 'Giới Thiệu').should('be.visible');

    // For added confidence, assert that the page's subtitle is also present.
    cy.contains('p', 'Về DULICHMETOO - Đơn vị tổ chức tour chuyên nghiệp').should('be.visible');
  });
});
