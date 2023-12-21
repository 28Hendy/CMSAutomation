class CompetencyChart{
    dropdown_Year(){
        return cy.get('#Year')
    }

    dropdown_Month(){
        return cy.get('#Month')
    }

    dropdown_JobFamily(){
        return cy.get('#JobFamily')
    }

    dropdown_Stream(){
        return cy.get('#Stream')
    }

    btn_retrieve(){
        return cy.xpath('//tbody/tr[5]/td[1]/input[1]')
    }

    table_CompetencyChartDetails(){
        return cy.get('#gview_TableResult')
    }
}

module.exports = new CompetencyChart();