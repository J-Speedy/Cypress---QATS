/// <reference types="cypress" />

describe('Task 2', () => {
    
    const baseURL = 'https://reqres.in'
     
    it('TC_1 - GET', () => {
        cy.request({
            method : 'GET',
            url : baseURL + '/api/users?page=2',
        
        }).then(({body}) => {
            expect(body.total).to.eql(12)
            expect(body.data[0].last_name).to.eql('Lawson')
            expect(body.data[1].last_name).to.eql('Ferguson')
            expect(body.data.length).to.be.lessThan(body.total)
        })
    })

    
}) 