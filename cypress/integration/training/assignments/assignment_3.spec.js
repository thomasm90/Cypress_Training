describe('Assignment 3', () => {
    it('Should make use of cy.contains', () => {
        // Arrange  
        cy.visit('https://www.saucedemo.com/')
        // Act
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.contains('Login').click()
        //cy.get('[data-test=login-button]').contains('Login').click()
        cy.contains('Sauce Labs').click()
    })
})