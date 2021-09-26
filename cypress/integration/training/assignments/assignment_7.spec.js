describe('Assignment 7', () => {
    it('Should make use of a custom login command', () => {
        // Arrange  
        cy.visit('https://www.saucedemo.com/')
        // Act
        cy.loginToSauceLabs('standard_user', 'secret_sauce')
    })
})