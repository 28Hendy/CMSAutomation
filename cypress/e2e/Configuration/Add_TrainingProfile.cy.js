import ProfileContentManagement from "../../../pages/Profile Content Management"

describe('Add Training & Courses data',() => {
    const Topic = Cypress.env('Training_Topic')
    const Institutions = Cypress.env('Training_Institution')
    const Period = Cypress.env('Training_Period')
    const Description = Cypress.env('Training_Desc')
    const Order = Cypress.env('Training_Order')

    before('Login CMS and Landing on Profile Content Management', () =>{
        cy.LoginCMS(Cypress.env('Username'), Cypress.env('Password'))
        cy.LandingOnProfileContentMaintenance()
    })

    it('user click Training tab', () =>{
        ProfileContentManagement.tab_training().click()
    })

    it('user fills Topic field', () =>{
        ProfileContentManagement.txt_topic().type(Topic)
    })

    it('user fills Institution field', () =>{
        ProfileContentManagement.txt_TrainingInstitution().type(Institutions)
    })

    it('user fills Period field', () =>{
        ProfileContentManagement.txt_PeriodTraining().type(Period)
    })

    it('user fills Description field', () =>{
        ProfileContentManagement.txt_Description().type(Description)
    })

    it('user fills Order field', () =>{
        ProfileContentManagement.txt_TrainingOrder().type(Order)
    })

    it('user clicks Save button', () =>{
        ProfileContentManagement.btn_SaveTraining().click()
    })

    it('Data Training on table is displayed', () =>{
        ProfileContentManagement.tab_training().should('exist')
    })

    it('User logout from CMS', () =>{
        ProfileContentManagement.btn_logout().click()
    })
})