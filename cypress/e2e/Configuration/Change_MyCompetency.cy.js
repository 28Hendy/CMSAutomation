import Homepage from "../../../pages/Homepage"
import MyCompetency from "../../../pages/My Competency"

describe('Change My Competency',() => {
    before('Login CMS', () =>{
        cy.LoginCMS(Cypress.env('Username'), Cypress.env('Password'))
    })

    it('user hovers on Competency Menu', () =>{
        Homepage.btn_configuration().click({ force: true })
    })

    it('user hovers on Stream/Employee Competency Maintenance', () =>{
        Homepage.menu_Stream().click({ force: true })
    })

    it('user hovers on My Competency', () =>{
        Homepage.menu_MyCompetency().click({ force: true })
    })

    it('user changes Software Construction Comp Options', () =>{
        cy.wait(3000)
        MyCompetency.SC_CompOption().select('Applicable')
    })

    it('user changes Software Process Comp Options', () =>{
        MyCompetency.SP_CompOption().select('Elective')
    })

    it('user clicks Save button', () =>{
        MyCompetency.btn_Save().click()
    })

    it('User logout from CMS', () =>{
        MyCompetency.btn_logout().click()
    })
})