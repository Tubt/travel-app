// Test helper functions for travel app

export class TestHelpers {
  
  // Generate random test data
  static generateRandomEmail(): string {
    const timestamp = Date.now()
    return `test.user.${timestamp}@metoo.com`
  }
  
  static generateRandomName(): string {
    const adjectives = ['Beautiful', 'Amazing', 'Wonderful', 'Fantastic', 'Incredible']
    const nouns = ['Journey', 'Adventure', 'Experience', 'Trip', 'Vacation']
    
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)]
    const noun = nouns[Math.floor(Math.random() * nouns.length)]
    
    return `${adj} ${noun}`
  }
  
  static generateRandomDestination(): string {
    const destinations = ['Hà Nội', 'Sapa', 'Hạ Long', 'Phú Quốc', 'Đà Nẵng', 'Hội An']
    return destinations[Math.floor(Math.random() * destinations.length)]
  }
  
  static generateFutureDate(daysFromNow: number = 30): string {
    const date = new Date()
    date.setDate(date.getDate() + Math.floor(Math.random() * daysFromNow))
    return date.toISOString().split('T')[0]
  }
  
  // Wait helpers
  static waitForPageLoad(): void {
    cy.get('body').should('be.visible')
    cy.wait(1000) // Allow for any animations to complete
  }
  
  static waitForModal(): void {
    cy.get('.modal-overlay').should('be.visible')
    cy.get('.modal-content').should('be.visible')
  }
  
  // Verification helpers
  static verifyElementsVisible(selectors: string[]): void {
    selectors.forEach(selector => {
      cy.get(selector).should('be.visible')
    })
  }
  
  static verifyElementsNotVisible(selectors: string[]): void {
    selectors.forEach(selector => {
      cy.get(selector).should('not.exist')
    })
  }
  
  // Scroll helpers
  static scrollToElement(selector: string): void {
    cy.get(selector).scrollIntoView()
  }
  
  static scrollToBottom(): void {
    cy.scrollTo('bottom')
  }
  
  static scrollToTop(): void {
    cy.scrollTo('top')
  }
  
  // Screenshot helpers
  static takeScreenshot(name: string): void {
    cy.screenshot(name)
  }
  
  // Local storage helpers
  static setLocalStorage(key: string, value: string): void {
    cy.window().then((window) => {
      window.localStorage.setItem(key, value)
    })
  }
  
  static getLocalStorage(key: string): void {
    cy.window().then((window) => {
      return window.localStorage.getItem(key)
    })
  }
  
  // URL helpers
  static verifyUrl(expectedUrl: string): void {
    cy.url().should('include', expectedUrl)
  }
  
  static verifyTitle(expectedTitle: string): void {
    cy.title().should('include', expectedTitle)
  }
} 