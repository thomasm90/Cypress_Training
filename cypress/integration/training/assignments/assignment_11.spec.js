describe('Assignment 11', () => {
    [
        { username: 'standard_user', password: 'secret_sauce' },
        { username: 'locked_out_user', password: 'secret_sauce' },
        { username: 'problem_user', password: 'secret_sauce' },
        { username: 'performance_glitch_user', password: 'secret_sauce' },
    ].forEach(({ username, password }) => {
        it(`Should try to login for ${username}`, () => {
            // Arrange  
            cy.visit('https://www.saucedemo.com/')
            // Act
            cy.loginToSauceLabs(username, password)
        })
    })
})