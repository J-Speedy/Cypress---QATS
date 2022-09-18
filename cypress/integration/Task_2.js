/// <reference types="cypress" />

describe('Task 2', () => {
    beforeEach(() => {

        //Open app and sign in
        cy.visit('https://reqres.in/')
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(1) > .form-control').type('tech_task@qats.sk')
        cy.get(':nth-child(2) > .form-control').type('124lkjAF89as')
        cy.get('.btn').click()
        cy.wait(1000)
    }) 