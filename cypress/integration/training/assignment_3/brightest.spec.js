describe('Assignment 3', () => {
    it('Should open the google website, accept cookies and verify the url contains "google"', () => {
        cy.visit('https://google.be')
        cy.get('#L2AGLb > .jyfHyd').click()
        cy.get('.lnXdpd').should('be.visible')
        cy.url().should('include', 'google')
    })
})

describe('Assignment 4', () => {
    it('Should visit Google and then visit the brightest website', () => {
        cy.visit('https://google.be')
        cy.visit('https://brightest.be')
    })
})

describe('Assignment 5', () => {
    beforeEach(() => {
        cy.visit('https://brightshopapp.herokuapp.com/#/')
        // cy.wait(10000)
    })

    it.only('Should open the menu and click "Register"', () => {
        cy.get('.css-1idhddb').click({ force: true })
        cy.get('#RegisterButton').click({ force: true })
    })

    it.only('Should open the menu and click "Login"', () => {
        cy.get('.css-1idhddb').click({ force: true })
        cy.get('#SignInButton').click({ force: true })
    })
})

describe('Assignment 8', () => {
    beforeEach(() => {
        cy.visit('https://www.brightest.be/')
    })

    it('Should accept the cookies', () => {
        cy.get('#catapultCookie').click()
        cy.getCookie('_hjTLDTest').should('exist').and('have.property', 'domain', '.brightest.be')
        cy.clearCookie('_hjTLDTest')
        cy.getCookie('_hjTLDTest').should('not.exist')
    })
})

describe('Assignment 9', () => {
    it('Should make a screenshot', () => {
        cy.visit('https://www.brightest.be/')
        cy.url().should('include', 'brightest')
        cy.screenshot() // Wrongly deprecated in version 6.0, still working though
        cy.get('#catapult-cookie-bar').screenshot()
    })
})

describe('Assignment 10', () => {
    it('Should open the brightest website in Chrome', { browser: 'chrome' }, () => {
        cy.visit('https://www.brightest.be/')
    })

    it('Should open the brightest website in Firefox', { browser: 'firefox' }, () => {
        cy.visit('https://www.brightest.be/')
    })

    it('Should open the brightest website in Edge', { browser: 'edge' }, () => {
        cy.visit('https://www.brightest.be/')
    })
})

describe('', () => { })

