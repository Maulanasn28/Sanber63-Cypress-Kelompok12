describe('Update Shopping Cart', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login('SayaPelajar12345@gmail.com', 'SayaPelajar12345');
  });

  it.only('Update qty', () => {
    cy.visit('#info');
    cy.updateCart(7, 1, 'update'); 
  });

  it('Update qty 2', () => {
    cy.visit('#info');
    cy.updateCart(7, 3, 'update');
  });

  it('Delete 1 item', () => {
    cy.visit('#info');
    cy.updateCart(7, null, 'delete');
  });
});