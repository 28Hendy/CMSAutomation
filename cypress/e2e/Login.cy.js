import Login from "../pages/Login"
import Homepage from "../pages/Homepage"

describe('User Login CMS',() => {
    const UserName = Cypress.env('Username')
    const Password = Cypress.env('Password')
    
    before('Open the URL', () =>{
        cy.visit(Cypress.env('BASE_URL'))
    })

    it('user fills username field', () =>{
        Login.txt_Username().type(UserName)
    })

    it('user fills password field', () =>{
        Login.txt_Password().type(Password)
    })

    it('user clicks Login button', () =>{
        Login.btn_Login().click()
    })

    it('user landing on homepage', () =>{
        Homepage.header_name().should('exist')
    })
})