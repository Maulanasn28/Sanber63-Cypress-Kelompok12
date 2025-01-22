// cypress/e2e/login.spec.js

import LoginPage from '../support/pageObjects/LoginPage';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    // Visit the website before each test
    cy.visit('/');
  });

  it('should login successfully with valid credentials', () => {
    cy.fixture('users').then((user) => {
      loginPage.navigateToLogin();
      loginPage.enterEmail(user.valid.email);
      loginPage.enterPassword(user.valid.password);
      loginPage.submitLogin();
      loginPage.verifySuccessfulLogin();
    });
  });

  it('should show error message for invalid credentials', () => {
    cy.fixture('users').then((user) => {
      loginPage.navigateToLogin();
      loginPage.enterEmail(user.invalid.email);
      loginPage.enterPassword(user.invalid.password);
      loginPage.submitLogin();
      loginPage.verifyLoginError();
    });
  });

  it('should display validation error for empty fields', () => {
    loginPage.navigateToLogin();
    loginPage.submitLogin();
    loginPage.verifyValidationErrors();
  });
});
