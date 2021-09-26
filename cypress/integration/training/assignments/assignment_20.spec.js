describe('Assignment 20', () => {
    beforeEach(() => {
        cy.visit('https://brightshopapp.herokuapp.com/#/')
    })

    it('Should open the menu and click "Register"', () => {
        cy.get('.css-1idhddb').click({ timeout: 10000 })
        cy.get('#RegisterButton').click({ timeout: 10000 })
    })

    it('Should open the menu and click "Login"', () => {
        cy.get('.css-1idhddb').click({ timeout: 10000 })
        cy.get('#SignInButton').click({ timeout: 10000 })
    })
})