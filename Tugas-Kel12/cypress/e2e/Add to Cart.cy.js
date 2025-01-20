
describe('Add to Cart Test', () => {
  beforeEach(() => {
    cy.visit ('')
    cy.login('SayaPelajar12345@gmail.com', 'SayaPelajar12345');
  });

  it('Add to Cart', () => {
    cy.addToCart(1, 5, 169, 59);
    cy.get('.message-success > div').should('include.text', 'You added Cassia Funnel Sweatshirt to your shopping cart.');
  });

  it('Add to Cart qty 2', () => {
    cy.addToCart(2, 1, 168, 49, 2);
  });

  it.only('Add to Cart not selected size and color', () => {
    cy.CartNegative(4, 7, null, null, 2);
    cy.get('#super_attribute\\[143\\]-error').should('include.text', 'This is a required field.');
  });
});
  