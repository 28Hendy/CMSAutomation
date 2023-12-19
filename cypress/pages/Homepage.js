class Homepage{
    header_name(){
        return cy.get('span[id="newEmpMain"]')
    }

    tab_Welcome(){
        return cy.contains('Welcome')
    }

    tab_EmployeeDetails(){
        return cy.contains('Employee Details')
    }

    tab_DSProgression(){
        return cy.contains('DS Progression')
    }

    tab_MyResultDocuments(){
        return cy.contains('My Review Result Documents')
    }

    tab_MyThreshold(){
        return cy.contains('My Threshold')
    }

    btn_configuration(){
        return cy.contains('Configuration')
    }

    menu_Stream(){
        return cy.contains('Stream/Employee Competency Maintenance')
    }

    menu_MyCompetency(){
        return cy.contains('My Competency')
    }

    menu_StaffProfileMaintenance(){
        return cy.contains('Staff Profile Maintenance')
    }

    menu_ProfileContainMaintenance(){
        return cy.contains('Profile Content Maintenance')
    }
}

module.exports = new Homepage();