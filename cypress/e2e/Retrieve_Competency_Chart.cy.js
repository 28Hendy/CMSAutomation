import Homepage from "../pages/Homepage"
import CompetencyChart from "../pages/CompetencyChart"

describe('Go to Competency Chart page',() => {
    before('Login CMS', () =>{
        cy.LoginCMS(Cypress.env('Username'), Cypress.env('Password'))
    })

    it('user Hover mouse to Competency View', () =>{
        Homepage.btn_CompetencyView().click({force:true})
    })

    it('user Hover mouse to All View', () =>{
        Homepage.menu_AllView().click({force:true})
    })

    it('user Hover mouse to Competency Chart', () =>{
        Homepage.menu_CompetencyChart().click({force:true})
    })

    it('user Choose year on year dropdown', () =>{
        CompetencyChart.dropdown_Year().select('2022')
    })

    it('user Choose month on month dropdown', () =>{
        CompetencyChart.dropdown_Month().select('June')
    })

    it('user Choose Job Family on Job Family dropdown', () =>{
        CompetencyChart.dropdown_JobFamily().select('SE')
    })

    it('user Choose Stream on Stream dropdown', () =>{
        CompetencyChart.dropdown_Stream().select('SE-Python')
    })

    it('user clicks retrieve button', () =>{
        CompetencyChart.btn_retrieve().click()
    })

    it('Competency Chart table is displayed', () =>{
        CompetencyChart.table_CompetencyChartDetails().should('exist')
    })
})