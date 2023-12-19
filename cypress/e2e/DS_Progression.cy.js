import Homepage from "../pages/Homepage"
import DSProgression from "../pages/DS Progression"

describe('Go to DS Progression',() => {
    before('Login CMS', () =>{
        cy.LoginCMS(Cypress.env('Username'), Cypress.env('Password'))
    })

    it('user click DS Progression tab', () =>{
        Homepage.tab_DSProgression().click()
    })

    it('Employee DS Progression chart is displayed', () =>{
        DSProgression.table_DSProgression().should('exist')
    })
})