import Homepage from "../pages/Homepage"
import ReviewResultDocuments from "../pages/Review Result Documents"

describe('Go to My Review Result Documents',() => {
    before('Login CMS', () =>{
        cy.LoginCMS(Cypress.env('Username'), Cypress.env('Password'))
    })

    it('user click My Review Result Documents tab', () =>{
        Homepage.tab_MyResultDocuments().click()
    })

    it('My Review Result Documents table is displayed', () =>{
        ReviewResultDocuments.table_MyReviewResultDocuments().should('exist')
    })
})