describe('Assignment 10', () => {
    it('Should retry 2 times', { retries: { openMode: 2 }, }, () => {
        // Arrange  
        cy.visit('https://www.saucedemo.com/')
        // Act
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=login-button]', { timeout: 10000 }).click()
    })
})