/// <reference types="cypress" />

describe('Task 1', () => {
    beforeEach(() => {

        //Open app and sign in
        cy.visit('https://react-redux.realworld.io/')
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(1) > .form-control').type('tech_task@qats.sk')
        cy.get(':nth-child(2) > .form-control').type('124lkjAF89as')
        cy.get('.btn').click()
        cy.wait(1000)
    })    
    
    it('TC_1 - Creat post', () => { 

        cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
        cy.get(':nth-child(1) > .form-control').type('New post')
        cy.get(':nth-child(2) > .form-control').type('New post')
        cy.get(':nth-child(3) > .form-control').type('New post')
        cy.get('.btn').click()
        cy.wait(1000)
        cy.get('.btn-outline-secondary').should('contain', 'Edit Article') //verify post creation
            
    })
        
    it('TC_2 - Remove post', () => {

        cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .preview-link > h1').click()
        cy.wait(1000)
        cy.get('h1').should('contain', 'New post') //verify correct post
        cy.get('.btn-outline-danger').click() //remove post

    })

    afterEach(() => {

    //Logout
    cy.wait(1000)
    cy.get(':nth-child(3) > .nav-link').click()
    cy.get('.btn-outline-danger').click()
    cy.get(':nth-child(2) > .nav-link').should('contain', 'Sign in') //verifiy log out was successfull
    }) 
})
