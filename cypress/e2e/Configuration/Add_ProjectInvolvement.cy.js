import ProfileContentManagement from "../../pages/Profile Content Management"

describe('Add Project Involvement data',() => {
    const Name = Cypress.env('Project_Name')
    const Role = Cypress.env('Project_Role')
    const Responsibility = Cypress.env('Project Responsibility')
    const Tool = Cypress.env('Project_Tool')
    const Period = Cypress.env('Project_Period')
    const Description = Cypress.env('Project_Desc')
    const DisplayOrder = Cypress.env('Project_Order')

    before('Login CMS and landing on Profile Content Management', () =>{
        cy.LoginCMS(Cypress.env('Username'), Cypress.env('Password'))
        cy.LandingOnProfileContentMaintenance()
    })

    it('user click Project Involvement tab', () =>{
        ProfileContentManagement.tab_TrainingInvolvement().click()
    })

    it('user fills Name field', () =>{
        ProfileContentManagement.txt_ProjectName().type(Name)
    })

    it('user fills Role field', () =>{
        ProfileContentManagement.txt_ProjectRole().type(Role)
    })

    it('user fills Responsibility field', () =>{
        ProfileContentManagement.txt_ProjectResponsibility().type(Responsibility)
    })

    it('user fills Tool field', () =>{
        ProfileContentManagement.txt_ProjectTool().type(Tool)
    })

    it('user fills Period field', () =>{
        ProfileContentManagement.txt_ProjectPeriod().type(Period)
    })

    it('user fills Description field', () =>{
        ProfileContentManagement.txt_ProjectDescription().type(Description)
    })

    it('user fills Display Order field', () =>{
        ProfileContentManagement.txt_ProjectOrder().type(DisplayOrder)
    })

    it('user clicks Save button', () =>{
        ProfileContentManagement.btn_SaveProject().click()
    })

    it('Education table is display', () =>{
        ProfileContentManagement.table_Project().should('exist')
    })

    it('User logout from CMS', () =>{
        ProfileContentManagement.btn_logout().click()
    })
})