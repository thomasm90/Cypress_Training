describe('Assignment 6', () => {
    it('Should mix async/sync code and assert using expect', () => {
        // Arrange  
        cy.visit('https://www.saucedemo.com/')
        // Act
        cy.get('[data-test=username]').type('standard_user').then(($el) => {

            let username = $el.val()
            expect(username).to.equal('standard_user')

        })

        cy.get('[data-test=password]').type('secret_sauce').then(($el) => {

            let password = $el.val()
            expect(password).to.equal('secret_sauce')

        })
    })
})