describe('Pengujian Form dengan Email Random', () => {
    it('Ngisi form pake email yang dibuat acak', () => {
      // Bikin email acak
      const randomEmail = `user${Math.floor(Math.random() * 1000)}@example.com`;
  
      // Buka website tujuan
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
  
      // Isi form dengan email random
      cy.get('#firstname').type('toko17')
      cy.get('#lastname').type('jakarta')
      cy.get('#email_address').type(randomEmail) // cari input email, ketik emailnya
      cy.get('#password').type('toko17jkt!')
      cy.get('#password-confirmation').type('toko17jkt!')
      cy.get('button[type="submit"]').contains('Create an Account').click()
      
    
      // berhasil kirim
      cy.contains('Form berhasil dikirim!').should('be.visible'); // cek ada teks sukses
    });
  });
  