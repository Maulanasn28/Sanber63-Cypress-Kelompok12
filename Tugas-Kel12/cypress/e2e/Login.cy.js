import homepage from "../support/pageObject/homepage";
import signIn from "../support/pageObject/signIn";

describe('Login Page Automation', () => {
  beforeEach(() => {
    // Mengunjungi halaman utama
    cy.visit('https://magento.softwaretestingboard.com');
    cy.verifyTitlePage('.base', 'Home Page'); // Custom Command untuk verifikasi judul halaman
  });

  it('Login Success', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
    cy.get('#email').type('SayaPelajar12345@gmail.com');
    cy.get('#pass').type('SayaPelajar12345');
    cy.get('#send2').click();

    // Verifikasi berhasil login
    cy.get('.greet').should('contain.text', 'Welcome');
  });

  it('Success Sign In with valid account', () => {
    cy.get('.panel > .header > .authorization-link > a').click(); // Klik tombol login
    cy.verifyTitlePage('.base', 'Customer Login'); // Verifikasi judul halaman

    // Gunakan Page Object Model
    cy.get(signIn.email).type('qa999magento@mail.com');
    cy.get(signIn.password).type('Magento_SoftwareTestingBoard');
    cy.get(signIn.loginButton).click();

    // Tunggu dan verifikasi login berhasil
    cy.wait(500);
    cy.get('.greet').should('contain.text', 'Welcome, QA');
  });

  it('Success Sign In with valid account (fixtures)', () => {
    cy.fixture('usersLogin.json').then((usersLogin) => {
      if (usersLogin.length === 0) {
        throw new Error('usersLogin.json is empty.');
      }

      const userData = usersLogin[0];
      cy.signInOption(userData.email, userData.password); // Custom Command
    });
  });

  it('Sign In with invalid account (fixtures)', () => {
    cy.fixture('usersLogin.json').then((usersLogin) => {
      if (usersLogin.length === 0) {
        throw new Error('usersLogin.json is empty.');
      }

      const invalidUser = usersLogin[1];
      cy.signInInvalid(invalidUser.email, invalidUser.password); // Custom Command
    });
  });
});
