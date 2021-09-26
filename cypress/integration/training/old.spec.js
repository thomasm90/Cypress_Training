describe('Assignment 5', () => {
    beforeEach(() => {
        // Arrange
        cy.visit('https://cvtooldemo-test.herokuapp.com/users/sign_up')
    })

    it('Should sign up a new account and login', () => {
        // Act
        cy.get('#user_email').type('cypressssss@brightest.be');
        cy.get('#user_password').type('cypress12345');
        cy.get('#user_password_confirmation').type('cypress12345');
        cy.get('#user_first_name').type('Thomasss');
        cy.get('#user_last_name').type('Moorsss');
        cy.get('#create_account_register_button').click();

        //Assert
        cy.get('.alert-success').should('exist').should('contain.text', 'Welcome! You have signed up successfully.');
    })

    it('Should use a custom command to sign up a new account and login', () => {
        // Act
        cy.signUp('tesssst@command.com', 'tesst12345', 'Cypress', 'Command')

        //Assert
        cy.get('.alert-success').should('exist').should('contain.text', 'Welcome! You have signed up successfully.');
    })
})

describe('Assignment 6', () => {
    beforeEach(() => {
        // Arrange
        cy.visit('https://cvtooldemo-test.herokuapp.com/users/sign_in')
    })

    it('Should login and update resumé', () => {
        // Act
        cy.login('tewsst@command.com', 'tewst12345')

        cy.get('.text-align-left > .btn').click() // Click update resumé
        cy.get('.widget-body > .smart-form > footer > .btn').click() // Click edit user info

        cy.get('#user_profile').clear().type('Test automation engineer')
        cy.get('#user_competencies').clear().type('Automating regression tests')
        cy.get('#user_education').clear().type('Brightest Academy')
        cy.get('#user_city').clear().type('Kontich')
        cy.get('#user_date_of_birth').clear().type('08/05/1990')
        cy.get('footer > .btn').click() // Click save button      

        //Assert  
        cy.get(':nth-child(1) > :nth-child(2) > span').should('not.be.empty').should('contain.text', '1990')
        cy.get(':nth-child(2) > span > p').should('not.be.empty').should('contain.text', 'Brightest Academy')
        cy.get(':nth-child(1) > :nth-child(4) > span').should('not.be.empty').should('contain.text', 'Kontich')
        cy.get(':nth-child(4) > span > p').should('not.be.empty').should('contain.text', 'Automating regression tests')

        cy.get('.widget-body > .smart-form > footer > .btn')
            .should('have.class', 'btn btn-primary')
            .and('have.attr', 'href')
            .and('include', '/users/1143/edit')
    })
})

describe('Assignment 7', () => {
    it('Should login and update resumé', () => {
        // Arrange
        cy.visit('https://cvtooldemo-test.herokuapp.com/users/sign_in')

        // Act
        cy.login('tewsst@command.com', 'tewst12345')

        cy.get('.text-align-left > .btn').click()
        cy.get('.widget-body > .smart-form > footer > .btn').click()

        cy.get('#user_profile').clear().type('Test automation engineer')
        cy.get('#user_competencies').clear().type('Automating regression tests')
        cy.get('#user_education').clear().type('Brightest Academy')
        cy.get('#user_city').clear().type('Kontich')
        cy.get('#user_date_of_birth').clear().type('08/05/1990')
        cy.get('footer > .btn').as('SaveButton').click() // Click save button and set alias     

        //Assert  
        cy.get(':nth-child(1) > :nth-child(2) > span').should('not.be.empty').should('contain.text', '1990')
        cy.get(':nth-child(2) > span > p').should('not.be.empty').should('contain.text', 'Brightest Academy')
        cy.get(':nth-child(1) > :nth-child(4) > span').should('not.be.empty').should('contain.text', 'Kontich')
        cy.get(':nth-child(4) > span > p').should('not.be.empty').should('contain.text', 'Automating regression tests')

        cy.get('@SaveButton') // Use alias for assertions       
            .should('have.class', 'btn btn-primary')
            .and('have.attr', 'href')
            .and('include', '/users/1143/edit')
    })

    it('.as() - alias a route for later use', () => {
        cy.visit('https://example.cypress.io/commands/aliasing')

        // Alias the route to wait for its response
        cy.intercept('https://jsonplaceholder.cypress.io/comments/1').as('getComment')

        // we have code that gets a comment when
        // the button is clicked in scripts.js
        cy.get('.network-btn').click()

        // https://on.cypress.io/wait
        cy.wait('@getComment').its('response.statusCode').should('eq', 200)
    })
})

describe('Assignment 13a', () => {
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

describe('Assignment 13b', () => {
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

describe('Assignment 13c', () => {
    [
        {
            firstName: "Tom",
            lastName: "J",
            email: "TomX@tesst.com",
            password: "Test12345"
        },
        {
            firstName: "Mel",
            lastName: "A",
            email: "MelX@tesst.com",
            password: "Test12345"
        },
        {
            firstName: "Pol",
            lastName: "K",
            email: "PolX@tesst.com",
            password: "Test12345"
        }
    ].forEach(testData => {
        it(`Should create an account for ${testData.firstName} ${testData.lastName}`, () => {
            cy.visit('https://cvtooldemo-test.herokuapp.com/users/sign_up')
            // Act
            cy.signUp(testData.email, testData.password, testData.firstName, testData.lastName);
            // Assert
            cy.get('.alert-success').should('exist').should('contain.text', 'Welcome! You have signed up successfully.');
            cy.logOut();
            cy.url().should('include', 'users/sign_in');
            cy.visit('https://cvtooldemo-test.herokuapp.com/users/sign_up')
        })
    })
})

describe('Assignment 14a', () => {
    beforeEach(() => {
        // Arrange
        cy.visit('https://reqres.in/')
    })

    it('Example - Should stub response of Get comment', () => {
        let message = 'Thomas.test@reqres.in'

        // Stub a response 
        cy.intercept({
            method: 'GET',
            url: '**/api/users*',
        }, {
            body: {
                "page": 2,
                "per_page": 6,
                "total": 12,
                "total_pages": 2,
                "data": [
                    {
                        "id": 1,
                        "email": "Thomas.test@reqres.in",
                        "first_name": "Thomas",
                        "last_name": "Moors",
                        "avatar": "https://reqres.in/img/faces/7-image.jpg"
                    },
                ],
                "support": {
                    "url": "https://reqres.in/#support-heading",
                    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
                }
            },
        }).as('getUser')

        // Act
        cy.get('[data-id="users"]').click()
        cy.wait('@getUser').its('response.statusCode').should('eq', 200)

        // Assert
        cy.get('.response > pre').should('contain', message)
    })

    it('Stubbing GET single user', () => {
        let email = 'Thomas.test@reqres.in'
        let firstName = 'Thomas'
        let lastName = 'Moors'

        // Stub a response 
        cy.intercept({
            method: 'GET',
            url: '**/api/users/*',
        }, {
            body: {
                "email": "Thomas.test@reqres.in",
                "first_name": "Thomas",
                "last_name": "Moors",
            }
        }).as('getSingleUser')

        // Act
        cy.get('[data-id="users-single"]').click()
        cy.wait('@getSingleUser').its('response.statusCode').should('eq', 200)

        // Assert
        cy.get('.response > pre').should('contain.text', email).should('contain.text', firstName).and('contain.text', lastName)
    })
})


describe('Assignment 14b', () => {
    [
        {
            statusCode: 400,
            description: 'Bad request'
        },
        {
            statusCode: 401,
            description: 'Unauthorized'
        },
        {
            statusCode: 500,
            description: 'Internal Server Error'
        }
    ].forEach(testData => {
        it.skip(`should stub the statuscode as ${testData.statusCode} ${testData.description}`, () => {
            cy.visit('https://reqres.in/')
            // Act
            cy.intercept({
                method: 'GET',
                url: '**/api/users/*',
            }, {
                statusCode: testData.statusCode,
                body: testData.description
            }).as('getSingleUser')

            // Act
            cy.get('[data-id="users-single-not-found"]').click()

            // Assert
            cy.wait('@getSingleUser').its('response.body').should('contain', testData.description)
        })
    })
})
