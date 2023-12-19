import ProfileContentManagement from "../../../pages/Profile Content Management"

describe('Add Certification Images data',() => {
    const Name = Cypress.env('Certification_Name')
    const Description = Cypress.env('Certification_Desc')
    const DisplayOrder = Cypress.env('Certification_Order')

    before('Login CMS and landing on Profile Content Management', () =>{
        cy.LoginCMS(Cypress.env('Username'), Cypress.env('Password'))
        cy.LandingOnProfileContentMaintenance()
    })

    it('user click Project Involvement tab', () =>{
        ProfileContentManagement.tab_Certification().click()
    })

    it('user fills Name field', () =>{
        ProfileContentManagement.txt_CertificationName().type(Name)
    })

    it('user fills Description field', () =>{
        ProfileContentManagement.txt_CeritificationDesc().type(Description)
    })

    it('user fills Display Order field', () =>{
        ProfileContentManagement.txt_CertificationOrder().type(DisplayOrder)
    })

    it('user uploads certificate', () =>{
        ProfileContentManagement.txt_UploadCertificate().selectFile('cypress/fixtures/List_of_project.png')
    })

    it('user clicks Save button', () =>{
        ProfileContentManagement.btn_SaveCertification().click()
    })

    it('Education table is display', () =>{
        ProfileContentManagement.table_Certification().should('exist')
    })

    it('User logout from CMS', () =>{
        ProfileContentManagement.btn_logout().click()
    })
})