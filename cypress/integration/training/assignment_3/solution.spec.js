describe('Assignment 3', () => {
    it('Should open the brightshop website and verify url contains "brightshop"', () => {
        cy.visit('https://brightshopapp.herokuapp.com/#/')
        cy.url().should('include', 'brightshop')
    })

    it('Should click the menu button and assert "Sign in" text is present', () => {
        cy.visit('https://brightshopapp.herokuapp.com/#/')
        cy.get('.css-1idhddb').click({ timeout: 10000 })
        cy.get('#SignInButton').should('contain.text', 'Sign in')
    })
})