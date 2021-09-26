describe('Assignment 17a', () => {
    beforeEach(() => {
        // Arrange
        cy.visit('https://reqres.in/')
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

    it.skip('Should stub response of Get comment', () => {
        let response = 'Thomas.test@reqres.in'

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
        cy.get('.response > pre').should('contain', response)
    })
})

describe('Assignment 17b', () => {
    [
        {
            statusCode: 400,
            description: 'Bad request',
            email: 'brightest@testt.be',
            password: 'test12345',
            firstname: 'John',
            lastname: 'Ramo'
        },
        {
            statusCode: 401,
            description: 'Unauthorized',
            email: 'brightestt@testt.be',
            password: 'test12345',
            firstname: 'Johnt',
            lastname: 'Ramot'
        },
        {
            statusCode: 500,
            description: 'Internal Server Error',
            email: 'brightest@testtt.be',
            password: 'test12345',
            firstname: 'Jothn',
            lastname: 'Ratmo'
        }
    ].forEach(testData => {
        it(`should stub the statuscode as ${testData.statusCode} ${testData.description}`, () => {
            cy.visit('https://cvtooldemo-test.herokuapp.com/users/sign_up')
            // Act
            cy.intercept({
                method: 'GET',
                url: 'https://cvtooldemo-test.herokuapp.com',
            }, {
                statusCode: testData.statusCode,
                body: testData.description
            }).as('signUpScenario')

            // Act
            cy.signUp(testData.email, testData.password, testData.firstname, testData.lastname);

            // Assert
            cy.wait('@signUpScenario').its('response.body').should('contain', testData.description)
        })
    })
})