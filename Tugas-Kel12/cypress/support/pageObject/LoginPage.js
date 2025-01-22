// cypress/support/pageObjects/LoginPage.js

class LoginPage {
    navigateToLogin() {
      cy.get('a[href*="login"]').click(); // Adjust selector based on actual DOM
    }
  
    enterEmail(email) {
      cy.get('#email').type(email);
    }
  
    enterPassword(password) {
      cy.get('#pass').type(password);
    }
  
    submitLogin() {
      cy.get('button[type="submit"]').click();
    }
  
    verifySuccessfulLogin() {
      cy.contains('Welcome,').should('be.visible');
    }
  
    verifyLoginError() {
      cy.get('.error-message').should('be.visible');
    }
  
    verifyValidationErrors() {
      cy.get('.validation-error').should('have.length.greaterThan', 0);
    }
  }
  
  export default LoginPage;
  