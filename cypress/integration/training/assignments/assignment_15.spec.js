describe('Assignment 15 - Multi browser support', () => {
    it('Should open the google website in Chrome', { browser: 'chrome' }, () => {
        cy.visit('https://www.google.be/')
    })

    it('Should open the google website in Firefox', { browser: 'firefox' }, () => {
        cy.visit('https://www.google.be/')
    })

    it('Should open the google website in Edge', { browser: 'edge' }, () => {
        cy.visit('https://www.google.be/')
    })
})