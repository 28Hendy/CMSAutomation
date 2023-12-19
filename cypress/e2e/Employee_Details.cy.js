import Homepage from "../pages/Homepage"
import EmployeeDetails from "../pages/Employee Details"

describe('Go to Employee Details',() => {
    before('Login CMS', () =>{
        cy.LoginCMS(Cypress.env('Username'), Cypress.env('Password'))
    })

    it('user click Employee Details tab', () =>{
        Homepage.tab_EmployeeDetails().click()
    })

    it('Employee Details data table is displayed', () =>{
        EmployeeDetails.row_Name().should('exist')
        EmployeeDetails.row_ID().should('exist')
        EmployeeDetails.row_Base().should('exist')
        EmployeeDetails.row_Stream().should('exist')
        EmployeeDetails.row_SecondStream().should('exist')
        EmployeeDetails.row_Grade().should('exist')
        EmployeeDetails.row_DS().should('exist')
        EmployeeDetails.row_Manager().should('exist')
        EmployeeDetails.row_DomainName().should('exist')
        EmployeeDetails.row_HiringDate().should('exist')
        EmployeeDetails.row_Status().should('exist')
        EmployeeDetails.row_Devision().should('exist')
        EmployeeDetails.row_Subdevision().should('exist')
        EmployeeDetails.row_NextReview().should('exist')
        EmployeeDetails.row_CurrentProject().should('exist')
        EmployeeDetails.row_ProjectStatus().should('exist')
    })
})