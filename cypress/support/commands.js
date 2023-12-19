import Login from "../pages/Login"
import Homepage from "../pages/Homepage"

Cypress.Commands.add('LoginCMS', (UserName, Password) => {
    cy.visit(Cypress.env('BASE_URL'))
    Login.txt_Username().type(UserName)
    Login.txt_Password().type(Password)
    Login.btn_Login().click()
})

Cypress.Commands.add('LandingOnProfileContentMaintenance', () => {
    Homepage.btn_configuration().click({ force: true})
    Homepage.menu_StaffProfileMaintenance().click({ force: true})
    Homepage.menu_ProfileContainMaintenance().click({ force: true})
})