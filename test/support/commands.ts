/// <reference types="cypress" />

// ***********************************************
// Custom commands for travel app testing
// ***********************************************

// Select destination command
Cypress.Commands.add("selectDestination", (destinationName: string) => {
  cy.get(".grid .card")
    .contains(destinationName)
    .closest(".card")
    .should("be.visible");
});

// Search travel command
Cypress.Commands.add("searchTravel", (searchParams: never) => {
  if (searchParams.destination) {
    cy.get('[data-testid="destination-select"]').select(
      searchParams.destination
    );
  }

  if (searchParams.checkin) {
    cy.get('[data-testid="checkin-input"]').type(searchParams.checkin);
  }

  if (searchParams.duration) {
    cy.get('[data-testid="duration-select"]').select(searchParams.duration);
  }

  if (searchParams.guests) {
    cy.get('[data-testid="guests-select"]').select(searchParams.guests);
  }

  cy.get('[data-testid="search-button"]').click();
});

// Like destination command
Cypress.Commands.add("likeDestination", (destinationName: string) => {
  cy.selectDestination(destinationName).find(".like-btn").click();
});

// Open destination modal command
Cypress.Commands.add("openDestinationModal", (destinationName: string) => {
  cy.selectDestination(destinationName).find(".details-btn").click();

  cy.get(".modal-overlay").should("be.visible");
});

// Verify modal content command
Cypress.Commands.add("verifyModalContent", (destinationName: string) => {
  cy.get(".modal-content").within(() => {
    cy.get(".modal-header h2").should("contain", destinationName);
    cy.get(".modal-desc").should("be.visible");
    cy.get(".modal-gallery").should("be.visible");
    cy.get(".modal-video iframe").should("be.visible");
  });
});

// Navigate slider command
Cypress.Commands.add("navigateSlider", (direction: never) => {
  if (typeof direction === "number") {
    cy.get(".slider-dots .dot").eq(direction).click();
  } else if (direction === "next") {
    cy.get(".next-btn").click();
  } else if (direction === "prev") {
    cy.get(".prev-btn").click();
  }
});

// Newsletter signup command
Cypress.Commands.add("signupNewsletter", (email: string) => {
  cy.get(".newsletter-signup .email-input").type(email);
  cy.get(".newsletter-signup .signup-btn").click();
});
