
describe('Assignment 22a', () => {
    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            url: '**/get_bugs',
        }, {
            body: [{ "name": "profile_name", "state": 0 }, { "name": "header_color", "state": 0 }, { "name": "search_bar_1", "state": 0 }, { "name": "protected_routes", "state": 0 }, { "name": "trailer_1", "state": 0 }, { "name": "search_bar_2", "state": 0 }, { "name": "more_info", "state": 0 }, { "name": "rent_movie_button", "state": 0 }, { "name": "scroll_lock", "state": 0 }, { "name": "login_link", "state": 0 }, { "name": "register_link", "state": 0 }, { "name": "form_rectangle", "state": 0 }, { "name": "form_validation_login", "state": 0 }, { "name": "form_validation_register", "state": 0 }, { "name": "error_feedback_login", "state": 0 }, { "name": "error_feedback_register", "state": 0 }, { "name": "regex_register", "state": 0 }, { "name": "firefox", "state": 0 }, { "name": "profile_avatar", "state": 0 }, { "name": "credits_button", "state": 0 }, { "name": "cancel_payment", "state": 0 }, { "name": "add_credits", "state": 0 }, { "name": "performance_issues", "state": 0 }, { "name": "navbar_function", "state": 0 }, { "name": "credits_negative", "state": 0 }, { "name": "rickrolled", "state": 0 }],
        }).as('bugConfig')
        cy.visit('https://brightshopapp.herokuapp.com/#/')
    })

    it('Should disable all bugs and test the search function', () => {
        cy.get('.css-1idhddb').click({ timeout: 10000 })
        cy.get('.MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root').type('FATMAN')
        // cy.get('#mui-76755-option-0').click() Does not work since its a dynamic selector
        cy.get('[id$="-option-0"]').click()
    })
})

describe('Assignment 22b', () => {
    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            url: '**/get_bugs',
        }, {
            body: [{ "name": "profile_name", "state": 0 }, { "name": "header_color", "state": 0 }, { "name": "search_bar_1", "state": 0 }, { "name": "protected_routes", "state": 0 }, { "name": "trailer_1", "state": 0 }, { "name": "search_bar_2", "state": 0 }, { "name": "more_info", "state": 0 }, { "name": "rent_movie_button", "state": 0 }, { "name": "scroll_lock", "state": 0 }, { "name": "login_link", "state": 0 }, { "name": "register_link", "state": 0 }, { "name": "form_rectangle", "state": 0 }, { "name": "form_validation_login", "state": 0 }, { "name": "form_validation_register", "state": 0 }, { "name": "error_feedback_login", "state": 0 }, { "name": "error_feedback_register", "state": 0 }, { "name": "regex_register", "state": 0 }, { "name": "firefox", "state": 0 }, { "name": "profile_avatar", "state": 0 }, { "name": "credits_button", "state": 0 }, { "name": "cancel_payment", "state": 0 }, { "name": "add_credits", "state": 0 }, { "name": "performance_issues", "state": 0 }, { "name": "navbar_function", "state": 0 }, { "name": "credits_negative", "state": 0 }, { "name": "rickrolled", "state": 1 }],
        }).as('bugConfig')
        cy.visit('https://brightshopapp.herokuapp.com/#/')
    })

    it('Should disable all bugs and test the search function', () => {
        cy.get('.css-1idhddb').click({ timeout: 10000 })
        cy.get('[href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO"] > svg').click()
    })
})