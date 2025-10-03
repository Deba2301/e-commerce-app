describe('E-Commerce App E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      timeout: 60000,
      retryOnStatusCodeFailure: true,
      retryOnNetworkFailure: true
    });
  });

  it('should load the home page and display products', () => {
    // Check if the home page loads
    cy.contains('Our Products').should('be.visible');
    
    // Wait for products to load
    cy.get('[data-testid="product-grid"]', { timeout: 10000 }).should('be.visible');
    
    // Check if products are displayed
    cy.get('a[href*="/product/"]').should('have.length.greaterThan', 0);
  });

  it('should navigate to product detail page when a product is clicked', () => {
    // Wait for products to load
    cy.get('a[href*="/product/"]', { timeout: 10000 }).first().click();
    
    // Check if we're on the product detail page
    cy.url().should('include', '/product/');
    cy.url().should('include', '/details');
    
    // Check if product details are displayed
    cy.contains('Add to MyCart').should('be.visible');
  });

  it('should add items to cart and update footer', () => {
    // Navigate to a product detail page
    cy.get('a[href*="/product/"]', { timeout: 10000 }).first().click();
    
    // Add item to cart
    cy.contains('Add to MyCart').click();
    
    // Check if cart is updated (assuming footer shows cart info)
    cy.get('footer').should('contain', 'Items in Cart: 1');
  });

  it('should navigate back to home page from product detail', () => {
    // Navigate to a product detail page
    cy.get('a[href*="/product/"]', { timeout: 10000 }).first().click();
    
    // Click back to home link
    cy.contains('Back to Home').click();
    
    // Check if we're back on home page
    cy.contains('Our Products').should('be.visible');
  });
});