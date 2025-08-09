// Page Object Model for Home Page

export class HomePage {
  // Page elements selectors
  private readonly elements = {
    // Header elements
    header: '[data-testid="header"]',
    logo: '[data-testid="logo-text"]',
    logoLink: '[data-testid="logo-link"]',
    mainNav: '[data-testid="main-nav"]',
    headerContact: '[data-testid="header-contact"]',
    supportDropdown: '[data-testid="support-dropdown"]',
    hotline: '[data-testid="hotline"]',
    phoneNumber: '[data-testid="phone-number"]',
    navLinkHome: '[data-testid="nav-link-home"]',
    navLinkTour: '[data-testid="nav-link-tour"]',
    navLinkHandbook: '[data-testid="nav-link-handbook"]',
    navLinkAbout: '[data-testid="nav-link-about"]',

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
    cy.get(this.elements.logoLink).click();
  }

  navigateToSection(sectionName: string): void {
    cy.get(this.elements.mainNav).contains(sectionName).click();
  }

  // Specific header navigation methods
  navigateToHome(): void {
    cy.get(this.elements.navLinkHome).click();
  }

  navigateToTour(): void {
    cy.get(this.elements.navLinkTour).click();
  }

  navigateToHandbook(): void {
    cy.get(this.elements.navLinkHandbook).click();
  }

  navigateToAbout(): void {
    cy.get(this.elements.navLinkAbout).click();
  }

  // Header verification methods
  verifyHeaderVisible(): void {
    cy.get(this.elements.header).should("be.visible");
  }

  verifyLogoText(expectedText: string = "DULICHVIETNAM"): void {
    cy.get(this.elements.logo)
      .should("be.visible")
      .and("contain.text", expectedText);
  }

  verifyPhoneNumber(expectedNumber: string = "1800 8989"): void {
    cy.get(this.elements.phoneNumber)
      .should("be.visible")
      .and("contain.text", expectedNumber);
  }

  verifyNavigationLinksVisible(): void {
    cy.get(this.elements.navLinkHome)
      .should("be.visible")
      .and("contain.text", "Trang chủ");
    cy.get(this.elements.navLinkTour)
      .should("be.visible")
      .and("contain.text", "Tour Du Lịch");
    cy.get(this.elements.navLinkHandbook)
      .should("be.visible")
      .and("contain.text", "Sổ tay du lịch");
    cy.get(this.elements.navLinkAbout)
      .should("be.visible")
      .and("contain.text", "Giới thiệu");
  }

  verifyActiveNavigationLink(expectedActiveLink: string): void {
    const linkMap = {
      home: this.elements.navLinkHome,
      tour: this.elements.navLinkTour,
      handbook: this.elements.navLinkHandbook,
      about: this.elements.navLinkAbout,
    };

    const activeElement = linkMap[expectedActiveLink as keyof typeof linkMap];
    if (activeElement) {
      cy.get(activeElement).should("have.class", "active");
    }
  }

  verifySupportDropdownVisible(): void {
    cy.get(this.elements.supportDropdown)
      .should("be.visible")
      .and("contain.text", "Hỗ trợ toàn quốc");
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
