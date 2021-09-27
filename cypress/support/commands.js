// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('signUp', (email, pw, firstname, lastname) => {
    cy.get('#user_email').type(email);
    cy.get('#user_password').type(pw);
    cy.get('#user_password_confirmation').type(pw);
    cy.get('#user_first_name').type(firstname);
    cy.get('#user_last_name').type(lastname);
    cy.get('#create_account_register_button').click();
})

Cypress.Commands.add('login', (email, pw) => {
    cy.get('#user_email').type(email);
    cy.get('#user_password').type(pw);
    cy.get('footer > .btn').click();
})

Cypress.Commands.add('logOut', () => {
    cy.get('#logout > span > a').click();
    cy.get('#bot2-Msg1').click();
});

Cypress.Commands.add('loginToSauceLabs', (username, password) => {
    cy.get('[data-test=username]').type(username);
    cy.get('[data-test=password]').type(password);
    cy.get('[data-test=login-button]').click()
})

Cypress.Commands.add('logoutOfSauceLabs', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('[data-test=login-button]').should('be.visible')
})

Cypress.Commands.add('registerToBrightshop', (firstname, lastname, email, password) => {
    cy.get('#RegisterFirstName').type(firstname)
    cy.get('#RegisterLastName').type(lastname)
    cy.get('#RegisterEmail').type(email)
    cy.get('#RegisterPassword').type(password)
    cy.get('#RegisterRePassword').type(password)
    cy.get('#RegisterButtonComplete').click({ force: true }) // Viewport can also be increased to show button
})

Cypress.Commands.add('loginToBrightshop', (email, password) => {
    cy.get('#SignInEmail').type(email)
    cy.get('#SignInPassword').type(password)
    cy.get('#SignInButtonComplete').click()
})

Cypress.Commands.add('loginToBrightshopWithRequest', (email, password) => {
    cy.request({
        url: "https://brightshopapi.herokuapp.com/api/login/",
        method: 'POST',
        form: true,
        body: { "email": email, "password": password }
    }).then((response) => {
        let token = response.body.token
        cy.setCookie('token', token)
    })
    cy.visit('https://brightshopapp.herokuapp.com/#/')
})