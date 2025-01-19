  // cypress/e2e/test_spec.js
describe('User Registration', () => {
    it('should register a valid user with random email', () => {
      // Load JSON data
      cy.fixture('user_data').then((userData) => {
        // Generate random email
        const randomEmail = `user${Math.floor(Math.random() * 1000)}@example.com`;
  
        // Now you can use userData with the random email
        cy.visit('customer/account/create/');  // Ganti dengan URL register yang sesuai
        cy.get('#firstname').type('toko17')
        cy.get('#lastname').type('jakarta')
        cy.get('#email_address').type(randomEmail) // cari input email, ketik emailnya
        cy.get('#password').type('toko17jkt!')
        cy.get('#password-confirmation').type('toko17jkt!')
        cy.get('button[type="submit"]').contains('Create an Account').click()
        
      });
    });
  });
  
  