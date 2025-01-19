// cypress/e2e/registerPage.spec.js
describe('Register Page', () => {
  beforeEach(() => {
    // Mengunjungi halaman register sebelum setiap pengujian
    cy.visit('/customer/account/create/');  // Sesuaikan dengan URL halaman register
  });

  it('should register a valid user with random email', () => {
    // Memuat data dari file JSON
    cy.fixture('user_data').then((userData) => {
      // Menghasilkan email acak
      const randomEmail = `user${Math.floor(Math.random() * 1000)}@example.com`;
      
      // Mengisi form dengan data yang telah dimodifikasi
      cy.get('#firstname').type('toko17')
      cy.get('#lastname').type('jakarta')
      cy.get('#email_address').type(randomEmail) // cari input email, ketik emailnya
      cy.get('#password').type('toko17jkt!')
      cy.get('#password-confirmation').type('toko17jkt!')
      cy.get('button[type="submit"]').contains('Create an Account').click()

    });
  });

  // Flow negatif test
  describe('Pengujian Negatif Register Form dengan forEach', () => {
    const testCases = [
      {
        email: 'user@@example.com', // Email dobel '@'
        expectedError: 'Email tidak valid',
      },
      {
        email: 'user.com', // Email tanpa '@'
        expectedError: 'Email tidak valid',
      },
      {
        email: 'user@.com', // Email tanpa domain sebelum titik
        expectedError: 'Email tidak valid',
      },
      {
        email: '@example.com', // Email tanpa username
        expectedError: 'Email tidak valid',
      },
      {
        email: 'user@com', // Email tanpa domain lengkap
        expectedError: 'Email tidak valid',
      },
      {
        email: '', // Kosongin email
        expectedError: 'Email wajib diisi',
      },
    ];
  
    testCases.forEach(({ email, expectedError }) => {
      it(`Coba daftar dengan email: "${email}"`, () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/'); // Buka halaman register
  
        // Isi form dengan email dari test case
        cy.get('#firstname').type('toko17')
        cy.get('#lastname').type('jakarta')
        if (email) {
          cy.get('input[name="email"]').type(email); // Isi email kalau ada
        }
        cy.get('#password').type('toko17jkt!')
        cy.get('#password-confirmation').type('toko17jkt!')
        cy.get('button[type="submit"]').contains('Create an Account').click()
  
      });
    });
  });
});
