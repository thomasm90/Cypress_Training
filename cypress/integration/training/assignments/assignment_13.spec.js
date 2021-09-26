describe('Assignment 13 - Aliases - Intercept', () => {
    it('Alias a route for later use', () => {
        cy.visit('https://example.cypress.io/commands/aliasing')

        // Alias the route to wait for its response
        cy.intercept('https://jsonplaceholder.cypress.io/comments/1').as('getComment')

        // we have code that gets a comment when
        // the button is clicked in scripts.js
        cy.get('.network-btn').click()

        // https://on.cypress.io/wait
        cy.wait('@getComment').its('response.statusCode').should('eq', 200)
    })
})