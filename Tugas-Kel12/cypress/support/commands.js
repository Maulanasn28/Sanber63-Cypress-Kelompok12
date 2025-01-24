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
Cypress.Commands.add('signInOption', (email, password) => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/Sign In');
  cy.get('#email').type(email);
  cy.get('#pass').type(password);
  cy.get('#send2').click();
});

Cypress.Commands.add('signInInvalid', (email, password) => {
  // Pastikan halaman login dikunjungi terlebih dahulu
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
  cy.get('#email').should('be.visible').type(email); // Verifikasi elemen terlihat sebelum mengetik
  cy.get('#pass').should('be.visible').type(password);
  cy.get('#send2').should('be.visible').click();

  // Verifikasi pesan error
  cy.get('.message-error').should(
    'contain.text',
    'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.'
  );  
});

Cypress.Commands.add('verifyTitlePage', (selector, expectedTitle) => {
  cy.get(selector).should('contain.text', expectedTitle);
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

  Cypress.Commands.add('signInOption', (email, password) => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type(email)
    cy.get('#pass').type(password)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.get('.base').should('contain.text','Home Page')
 })

 Cypress.Commands.add('signInInValid', (email, password) => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type(email)
    cy.get('#pass').type(password)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.get('.message-error').should('contain.text','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
 })
 
 Cypress.Commands.add('verifyTittlePage', (locator,text) => {
    cy.get(locator).should('include.text', text)
})

Cypress.Commands.add('verifySuccess', (locator,text) => {
    cy.get(locator).should('include.text', text)
})

Cypress.Commands.add('validateComment', (locator,text) => {
    cy.get(locator).should('include.text', text)
})

Cypress.Commands.add('goToAddressPage',()=> {
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
    cy.get('.base').should('contain.text','My Account')
    cy.get('.items > :nth-child(6) > a').click()
    cy.get('.base').should('contain.text','Address Book')
    cy.wait(500)
})

Cypress.Commands.add('editFIeld', (locator,text) => {
    cy.get(locator).should('be.visible').click().clear().type(text)
})

Cypress.Commands.add('verifyErrorMessage', (locator,text) => {
    cy.get(locator).should('include.text', text)
})


