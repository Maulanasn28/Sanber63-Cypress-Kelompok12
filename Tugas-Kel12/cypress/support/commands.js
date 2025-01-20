// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/Sign In');
    cy.get('#email').type(email);
    cy.get('#pass').type(password);
    cy.get('#send2').click();
  });
  
  Cypress.Commands.add('addToCart', (category, product, size, color, qty = 1) => {
    cy.visit('#info');
    cy.get(`#ui-id-3 > span`).click();
    cy.get(`.categories-menu > :nth-child(2) > :nth-child(${category}) > a`).click();
    cy.get(`:nth-child(${product}) > .product-item-info > .details > .name > .product-item-link`).click();
    cy.get(`#option-label-size-143-item-${size}`).click();
    cy.get(`#option-label-color-93-item-${color}`).click();
    cy.get('#qty').clear().type(qty);
    cy.get('#product-addtocart-button > span').click();
  });

  Cypress.Commands.add('CartNegative', (category, product, size, color, qty = 1) => {
    cy.visit('#info');
    cy.get(`#ui-id-3 > span`).click();
    cy.get(`.categories-menu > :nth-child(2) > :nth-child(${category}) > a`).click();
    cy.get(`:nth-child(${product}) > .product-item-info > .details > .name > .product-item-link`).click();
    cy.get('#qty').clear().type(qty);
    cy.get('#product-addtocart-button > span').click();
  });

  Cypress.Commands.add('updateCart', (cartItemIndex, qty = null, action = 'update') => {
    cy.get('.showcart').click();
    cy.get(`:nth-child(${cartItemIndex}) > .secondary > .action > span`).click(); 
  
    if (action === 'update' && qty !== null) {
      cy.get(`#cart-${cartItemIndex}-qty`).clear().type(qty);
      cy.get('.update > span').click();
    }
  
    if (action === 'delete') {
      cy.get(`:nth-child(${cartItemIndex}) > .item-actions > td > .actions-toolbar > .action-delete`).click();
      cy.get('.update > span').click();
    }
  });
