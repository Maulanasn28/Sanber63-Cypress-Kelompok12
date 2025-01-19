describe('login', () => {
    it('scenario positif', () => {
      // Step 1: Login to the application 
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      cy.get('#email').type('toko17@yopmail.com')
      cy.get('#pass').type('toko17jkt!')
      cy.get('button[type="submit"]').contains('Sign In').click()
    })

    it('scenario negatif', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
        cy.get('#email').type('toko@yopmail.com')
        cy.get('#pass').type('toko17jkt')
        cy.get('button[type="submit"]').contains('Sign In').click()
    })
})