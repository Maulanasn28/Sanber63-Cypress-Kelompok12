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