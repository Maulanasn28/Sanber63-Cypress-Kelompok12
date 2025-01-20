describe('Registration', () => {
    beforeEach(() => {
      cy.visit('')
    })
    it('Login Success', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/Sign In')
        cy.get ('#email').type ('SayaPelajar12345@gmail.com')
        cy.get ('#pass').type ('SayaPelajar12345')
        cy.get ('#send2').click()

      })
})