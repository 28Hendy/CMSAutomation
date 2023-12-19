class MyCompetency{
    btn_logout(){
        return cy.get('#logout-btn')
    }

    SC_CompOption(){
        return cy.get('#OptionsTableResult1') //using id as selector
    }

    SC_CompOptionList(){
        return cy.contains('applicable')
    }

    SP_CompOption(){
        return cy.get('#OptionsTableResult5')
    }

    SP_CompOptionList(){
        return cy.contains('Elective')
    }

    btn_Save(){
        return cy.get('#btnSave')
    }
}

module.exports = new MyCompetency();