describe('Assignment 14a - Different screenshots', () => {
    beforeEach(() => {
        // Arrange  
        cy.visit('https://www.saucedemo.com/')
        cy.loginToSauceLabs('standard_user', 'secret_sauce')
        cy.get('#item_4_title_link > .inventory_item_name').as('SauceLabsBackpack')
    })

    it('Should make a screenshot during the test', () => {
        // Act
        cy.screenshot()
        cy.get('@SauceLabsBackpack').click()
        cy.url().should('include', 'inventory-item')
    })

    it('Should make a screenshot with a specific filename', () => {
        // Act
        cy.screenshot('Inventory Page')
        cy.get('@SauceLabsBackpack').click()
        cy.url().should('include', 'inventory-item')
    })

    it('Should make a screenshot including command log', () => {
        // Act
        cy.screenshot({ capture: 'runner' })
        cy.get('@SauceLabsBackpack').click()
        cy.url().should('include', 'inventory-item')
    })
})

describe('Assignment 14b - Screenshots of element', () => {
    beforeEach(() => {
        // Arrange  
        cy.visit('https://www.saucedemo.com/')
    })

    it('Should make a screenshot of an element', () => {
        // Act
        cy.get('[data-test=login-button]').screenshot()
    })
})

