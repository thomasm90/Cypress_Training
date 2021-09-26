describe('Assignment 5', () => {
    it('Should assert', () => {
        // Arrange  
        cy.visit('https://www.saucedemo.com/')
        // Act
        cy.get('[data-test=username]').type('standard_user').should('contain.value', 'standard_user')
        cy.get('[data-test=password]').type('secret_sauce').should('contain.value', 'secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.get(':nth-child(4) > .inventory_item_description > .pricebar > .inventory_item_price').should('contain.text', '49.99').and('be.visible')
        cy.get(':nth-child(4) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').should('have.class', 'inventory_item_desc')
    })
})