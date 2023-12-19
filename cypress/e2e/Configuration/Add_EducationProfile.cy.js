import ProfileContentManagement from "../../pages/Profile Content Management"

describe('Add Education Profile data',() => {
    const Institutions = Cypress.env('Education_Institution')
    const Period = Cypress.env('Education_Period')
    const Title = Cypress.env('Edication_Title')
    const DisplayOrder = Cypress.env('Education_Order')

    before('Login CMS and landing on Profile Content Management', () =>{
        cy.LoginCMS(Cypress.env('Username'), Cypress.env('Password'))
        cy.LandingOnProfileContentMaintenance()
    })

    it('user fills Institutions field', () =>{
        ProfileContentManagement.txt_EducationInstitution().type(Institutions)
    })

    it('user fills period field', () =>{
        ProfileContentManagement.txt_Educationperiod().type(Period)
    })

    it('user fills title field', () =>{
        ProfileContentManagement.txt_EducationTitle().type(Title)
    })

    it('user fills Display Order field', () =>{
        ProfileContentManagement.txt_EducationOrder().type(DisplayOrder)
    })

    it('user clicks Save button', () =>{
        ProfileContentManagement.btn_SaveEducation().click()
    })

    it('Education table is display', () =>{
        ProfileContentManagement.tableEducation().should('exist')
    })

    it('User logout from CMS', () =>{
        ProfileContentManagement.btn_logout().click()
    })
})