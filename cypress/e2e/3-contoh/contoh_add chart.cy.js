describe('Select Product on Magento', () => {
    it('Should navigate to product page and verify product details', () => {
      // Step 1: Visit the homepage
      cy.visit('https://magento.softwaretestingboard.com/');
  
      // Step 2: Click on a product from the homepage
      // Example: Klik produk pertama di kategori "Women"
      cy.get('.product-item-link').first().click(); // Klik produk pertama di halaman utama
  
      // Step 3: Verify we are on the product detail page
      cy.url().should('include', '/product/'); // Pastikan URL mengandung '/product/'
  
      // Step 4: Verify the product name is visible
      cy.get('.page-title').should('be.visible'); // Verifikasi nama produk ada di halaman produk
  
      // Step 5: Verify the product image is displayed
      cy.get('.product-image-photo').should('be.visible'); // Pastikan gambar produk ada
  
      // Step 6: Verify the price is displayed
      cy.get('.price-box').should('be.visible'); // Verifikasi harga produk ada
    });
  });
  