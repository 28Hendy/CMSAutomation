import Homepage from "../pages/Homepage"
import MyThreshold from "../pages/My Threshold"

describe('Go to My Threshold',() => {
    before('Login CMS', () =>{
        cy.LoginCMS(Cypress.env('Username'), Cypress.env('Password'))
    })

    it('user click My Threshold tab', () =>{
        Homepage.tab_MyThreshold().click()
    })

    it('My Review Result Documents table is displayed', () =>{
        MyThreshold.table_MyThreshold().should('exist')
    })
})