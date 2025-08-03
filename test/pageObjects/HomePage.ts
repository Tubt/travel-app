// Page Object Model for Home Page

export class HomePage {
  // Page elements selectors
  private readonly elements = {
    // Header elements
    header: ".header",
    logo: ".logo-text",
    mainNav: ".main-nav",
    headerContact: ".header-contact",

    // Banner slider elements
    bannerSlider: ".banner-slider",
    slides: ".slide",
    nextButton: ".next-btn",
    prevButton: ".prev-btn",
    sliderDots: ".slider-dots .dot",

    // Sidebars
    leftSidebar: ".sidebar-left",
    rightSidebar: ".sidebar-right",

    // Travel menu
    travelMenu: ".travel-menu",
    menuItems: ".nav-item",

    // Search section
    searchSection: ".search-section",
    destinationSelect: '[data-testid="destination-select"]',
    checkinInput: '[data-testid="checkin-input"]',
    durationSelect: '[data-testid="duration-select"]',
    guestsSelect: '[data-testid="guests-select"]',
    searchButton: '[data-testid="search-button"]',

    // Destination grid
    destinationGrid: ".grid",
    destinationCards: ".card",
    cardImages: ".card-img",
    cardTitles: ".card h3",
    cardDescriptions: ".card-desc",
    likeButtons: ".like-btn",
    detailsButtons: ".details-btn",

    // Modal elements
    modalOverlay: ".modal-overlay",
    modalContent: ".modal-content",
    modalHeader: ".modal-header",
    modalTitle: ".modal-header h2",
    closeButton: ".close-btn",
    modalDescription: ".modal-desc",
    modalGallery: ".modal-gallery",
    galleryImages: ".gallery-img",
    modalVideo: ".modal-video iframe",

    // Footer
    footer: "footer",
    footerSections: ".footer-section",
    newsletterInput: ".email-input",
    newsletterButton: ".signup-btn",
    companyInfo: ".company-info",
  };

  // Page actions
  visit(): void {
    cy.visit("/");
    this.waitForPageLoad();
  }

  waitForPageLoad(): void {
    cy.get(this.elements.header).should("be.visible");
    cy.get(this.elements.destinationGrid).should("be.visible");
  }

  // Header actions
  clickLogo(): void {
    cy.get(this.elements.logo).click();
  }

  navigateToSection(sectionName: string): void {
    cy.get(this.elements.mainNav).contains(sectionName).click();
  }

  // Banner slider actions
  clickNextSlide(): void {
    cy.get(this.elements.nextButton).click();
  }

  clickPrevSlide(): void {
    cy.get(this.elements.prevButton).click();
  }

  clickSliderDot(index: number): void {
    cy.get(this.elements.sliderDots).eq(index).click();
  }

  verifySliderIsVisible(): void {
    cy.get(this.elements.bannerSlider).should("be.visible");
    cy.get(this.elements.slides).should("have.length.greaterThan", 0);
  }

  // Search functionality
  searchForDestination(searchParams: {
    destination?: string;
    checkin?: string;
    duration?: string;
    guests?: string;
  }): void {
    if (searchParams.destination) {
      cy.get(this.elements.destinationSelect).select(searchParams.destination);
    }

    if (searchParams.checkin) {
      cy.get(this.elements.checkinInput).type(searchParams.checkin);
    }

    if (searchParams.duration) {
      cy.get(this.elements.durationSelect).select(searchParams.duration);
    }

    if (searchParams.guests) {
      cy.get(this.elements.guestsSelect).select(searchParams.guests);
    }

    cy.get(this.elements.searchButton).click();
  }

  // Destination card actions
  getDestinationCard(destinationName: string): Cypress.Chainable {
    return cy
      .get(this.elements.destinationCards)
      .contains(destinationName)
      .closest(".card");
  }

  clickDestinationCard(destinationName: string): void {
    this.getDestinationCard(destinationName).click();
  }

  likeDestination(destinationName: string): void {
    this.getDestinationCard(destinationName)
      .find(this.elements.likeButtons)
      .click();
  }

  openDestinationDetails(destinationName: string): void {
    this.getDestinationCard(destinationName)
      .find(this.elements.detailsButtons)
      .click();

    cy.get(this.elements.modalOverlay).should("be.visible");
  }

  // Modal actions
  verifyModalIsOpen(destinationName: string): void {
    cy.get(this.elements.modalOverlay).should("be.visible");
    cy.get(this.elements.modalContent).should("be.visible");
    cy.get(this.elements.modalTitle).should("contain", destinationName);
  }

  closeModal(): void {
    cy.get(this.elements.closeButton).click();
    cy.get(this.elements.modalOverlay).should("not.exist");
  }

  verifyModalContent(destinationName: string): void {
    cy.get(this.elements.modalContent).within(() => {
      cy.get(this.elements.modalTitle).should("contain", destinationName);
      cy.get(this.elements.modalDescription).should("be.visible");
      cy.get(this.elements.modalGallery).should("be.visible");
      cy.get(this.elements.modalVideo).should("be.visible");
    });
  }

  // Footer actions
  signupNewsletter(email: string): void {
    cy.get(this.elements.newsletterInput).type(email);
    cy.get(this.elements.newsletterButton).click();
  }

  scrollToFooter(): void {
    cy.get(this.elements.footer).scrollIntoView();
  }

  // Verification methods
  verifyPageTitle(): void {
    cy.title().should("include", "Việt Nam đất nước của sự tươi đẹp");
  }

  verifyDestinationCardsVisible(): void {
    cy.get(this.elements.destinationCards).should("have.length.greaterThan", 0);
    cy.get(this.elements.destinationCards).each(($card) => {
      cy.wrap($card).should("be.visible");
    });
  }

  verifySearchSectionVisible(): void {
    cy.get(this.elements.searchSection).should("be.visible");
    cy.get(this.elements.destinationSelect).should("be.visible");
    cy.get(this.elements.searchButton).should("be.visible");
  }

  getLikeCount(destinationName: string): Cypress.Chainable {
    return this.getDestinationCard(destinationName)
      .find(this.elements.likeButtons)
      .invoke("text");
  }
}
