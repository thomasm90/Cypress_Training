describe('Assignment 16a', () => {
    beforeEach(() => {
        // Arrange
        cy.visit('https://cvtooldemo-test.herokuapp.com/users/sign_up')
    })

    it('Should use the fixture to create a single account', () => {
        // Arrange  
        // signUpUsers -> name of the json      
        cy.fixture("signUpUser").then((user) => { //return value from the user     
            // Act
            cy.signUp(user.email, user.password, user.firstName, user.lastName);

            // Assert
            cy.get('.alert-success').should('exist').should('contain.text', 'Welcome! You have signed up successfully.');
        })
    })
})

describe('Assignment 16b', () => {
    beforeEach(() => {
        // Arrange
        cy.visit('https://cvtooldemo-test.herokuapp.com/users/sign_up')
        cy.wait(4000)
    })

    it('Should use the fixture to create multiple accounts', () => {
        // Arrange  
        // signUpUsers -> name of the json      
        cy.fixture("signUpUsers").then((user) => { //return value from the user     
            // Act
            user.forEach(element => {
                cy.signUp(element.email, element.password, element.firstName, element.lastName);

                // Assert
                cy.get('.alert-success').should('exist').should('contain.text', 'Welcome! You have signed up successfully.');
                cy.logOut();
                cy.url().should('include', 'users/sign_in');
                cy.visit('https://cvtooldemo-test.herokuapp.com/users/sign_up')
            })
        })
    })
})