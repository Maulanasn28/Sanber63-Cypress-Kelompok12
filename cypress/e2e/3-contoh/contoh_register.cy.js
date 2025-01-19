describe('create account', () => {
  it('displays two todo items by default', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type('toko17')
    cy.get('#lastname').type('jakarta')
    cy.get('#email_address').type('toko17@yopmail.com')
    cy.get('#password').type('toko17jkt!')
    cy.get('#password-confirmation').type('toko17jkt!')
    cy.get('button[type="submit"]').contains('Create an Account').click()
  })
  })