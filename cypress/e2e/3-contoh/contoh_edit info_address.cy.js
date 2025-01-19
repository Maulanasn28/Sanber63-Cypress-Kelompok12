describe('Edit Account Scenario', () => {
    it('Should navigate to edit account page and update account details', () => {
      // Step 1: Login to the application (optional, based on context)
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      cy.get('#email').type('toko17@yopmail.com')
      cy.get('#pass').type('toko17jkt!')
      cy.get('button[type="submit"]').contains('Sign In').click()
      
      cy.visit('https://magento.softwaretestingboard.com/customer/account/');


      // Step 2: Navigate to the hyperlink for editing the account
      cy.url().should('include', '/customer/account'); // Verify URL
      cy.contains('Edit').click(); // Assuming the link text is "Edit"
    
      // Step 3: Fill the edit account form
      cy.url().should('include', '/customer/account/edit'); // Verify URL
      cy.get('#firstname').clear().type('Toko 17');
      cy.get('#lastname').clear().type('jakarta');
      
      // Step 4: Submit the form step 3
      cy.get('button[type="submit"]').contains('Save').click()

      // Step 5: Fill the edit Address book
      cy.visit('https://magento.softwaretestingboard.com/customer/address/new/');

      cy.url().should('include', '/customer/address/new'); // Verify URL
      cy.get('#firstname').clear().type('Toko 17');
      cy.get('#lastname').clear().type('jakarta');
      cy.get('#company').clear().type('CV Toko 17 Jakarta');
      cy.get('#telephone').clear().type('0211234567');
      cy.get('#street_1').clear().type('jalan kesuksesan');
      cy.get('#street_2').clear().type('nomor 1');
      cy.get('#street_3').clear().type('bahagia');
      cy.get('#city').clear().type('Jakarta');
      cy.get('#country').select('Indonesia'); 
      cy.get('#region').clear().type('DKI Jakarta');
      cy.get('#zip').clear().type('12345');
      
      // Step 6: Submit the form step 5
      cy.get('button[type="submit"]').contains('Save Address').click()

      //Step 7: Back to Homepegae for add chart Women
      cy.visit('https://magento.softwaretestingboard.com/');
      cy.visit('https://magento.softwaretestingboard.com/women.html');

      // Step 8: Click on a product from the homepage
      // Example: Klik produk pertama di kategori "Women"
      cy.get('#product-item-info').first().click(); // Klik produk pertama di halaman utama
  
      // Step 9: Verify we are on the product detail page
      cy.url().should('include', '/product/'); // Pastikan URL mengandung '/product/'
  
      // Step 10: Verify the product name is visible
      cy.get('.page-title').should('be.Radiant Tee'); // Verifikasi nama produk ada di halaman produk

      // Step 13: Add to chart
      cy.get('#qty').clear().type('4'); // Masukkan jumlah (opsional)
      cy.get('button[type="submit"]').contains('Add to Cart').click() // Klik tombol "Add to Cart"
    });
  });