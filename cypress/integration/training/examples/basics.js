describe('C3 - Writing first test and assertion', () => {
    it('should visit a webpage and assert url + text', () => {

        cy.visit('https://www.cypress.io/')
        cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(1) > :nth-child(2) > .Link-sc-5cc5in-0').click()
        cy.get('[data-cy=tag-line]').should('contain.text', 'Testing has been broken for too long')
        cy.url().should('include', 'cypress')
    })

    // it('should visit a webpage and assert text', () => {
    //     cy.visit('https://brightshopapp.herokuapp.com/#/')
    //     cy.get('#Comedy\ Movies > .css-m3f643', { timeout: 10000 }).should('contain.text', 'Comedy Movies')
    // })
})