describe('Assignment 2', () => {
    it('Should pause and fail', () => {
        // Arrange  
        cy.pause()
        cy.visit('https://www.saucedemo.com/')
        // Act
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        // Assert
        cy.url().should('include', 'homepage')
    })
})