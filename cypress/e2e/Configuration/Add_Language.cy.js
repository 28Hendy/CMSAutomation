import ProfileContentManagement from "../../../pages/Profile Content Management"

describe('Add language data',() => {
    const Name = Cypress.env('Language_Name')
    const Description = Cypress.env('Language_Desc')
    const DisplayOrder = Cypress.env('Language_Order')

    before('Login CMS and landing on Profile Content Management', () =>{
        cy.LoginCMS(Cypress.env('Username'), Cypress.env('Password'))
        cy.LandingOnProfileContentMaintenance()
    })

    it('user click Project Languange tab', () =>{
        ProfileContentManagement.tab_Language().click()
    })

    it('user fills Name field', () =>{
        ProfileContentManagement.txt_Language().type(Name)
    })

    it('user fills Description field', () =>{
        ProfileContentManagement.txt_LanguageDesc().type(Description)
    })

    it('user fills Display Order field', () =>{
        ProfileContentManagement.txt_languageOrder().type(DisplayOrder)
    })

    it('user clicks Save button', () =>{
        ProfileContentManagement.btn_SaveLanguage().click()
    })

    it('Education table is display', () =>{
        ProfileContentManagement.tab_Language().should('exist')
    })

    it('User logout from CMS', () =>{
        ProfileContentManagement.btn_logout().click()
    })
})