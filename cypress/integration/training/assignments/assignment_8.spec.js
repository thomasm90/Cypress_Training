describe('Assignment 8 - Using hooks', () => {
    beforeEach(() => {
        // Arrange  
        cy.visit('https://www.saucedemo.com/')
        cy.loginToSauceLabs('standard_user', 'secret_sauce')
    })

    it('Should add a product to the shopping cart', () => {
        // Act
        cy.get('#item_4_title_link > .inventory_item_name').click()
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('.shopping_cart_link').click()

        // Assert
        cy.get('.cart_item_label').should('contain.text', 'Sauce Labs Backpack')
    })

    it('Should apply a filter', () => {
        // Act
        cy.get(':nth-child(1) > .inventory_item_description').should('contain.text', 'Sauce Labs Backpack')
        cy.get('[data-test=product_sort_container]').select('Name (Z to A)')

        // Assert
        cy.get(':nth-child(1) > .inventory_item_description').should('contain.text', 'Test.allTheThings() T-Shirt (Red)')
    })

    afterEach(() => {

        cy.logoutOfSauceLabs()

    })
})