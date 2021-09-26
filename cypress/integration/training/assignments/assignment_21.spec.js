
describe('Assignment 21', () => {
    beforeEach(() => {
        cy.visit('https://brightshopapp.herokuapp.com/#/')
    })

    it('Should be able to register', () => {
        cy.get('.css-1idhddb').click({ timeout: 10000 })
        cy.get('#RegisterButton').click({ timeout: 10000 })
        cy.registerToBrightshop('Thomas', 'Moors', 'thomas.moors@brightest.be', 'test12345')

    })

    it.only('Should be able to login', () => {
        cy.get('.css-1idhddb').click({ timeout: 10000 })
        cy.get('#SignInButton').click({ timeout: 10000 })
    })
})