describe('Assignment 12 - Aliases - DOM elements', () => {
    beforeEach(() => {
        // Arrange  
        cy.visit('https://www.saucedemo.com/')
        cy.loginToSauceLabs('standard_user', 'secret_sauce')
        cy.get('#item_4_title_link > .inventory_item_name').as('SauceLabsBackpack')
    })

    it('Should have access to an alias', () => {
        // Act
        cy.get('@SauceLabsBackpack').click()
        cy.url().should('include', 'inventory-item')
    })
})