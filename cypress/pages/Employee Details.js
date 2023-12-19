class EmployeeDetails{
    row_Name(){
        return cy.get('#EmployeeName')
    }

    row_ID(){
        return cy.get('#EmployeeId')
    }

    row_Base(){
        return cy.get('#EmployeeBase')
    }

    row_Stream(){
        return cy.get('#Stream')
    }

    row_SecondStream(){
        return cy.get('#SecondStreamID')
    }

    row_Grade(){
        return cy.get('#GradeCodeID')
    }

    row_DS(){
        return cy.get('#DevelopmentStage')
    }

    row_Manager(){
        return cy.get('#CurrentManagerName')
    }

    row_DomainName(){
        return cy.get('#ResName')
    }

    row_HiringDate(){
        return cy.get('#HiringDate')
    }

    row_Status(){
        return cy.get('#EmploymentStatusCode')
    }

    row_Devision(){
        return cy.get('#Division')
    }

    row_Subdevision(){
        return cy.get('#SubDivision')
    }

    row_NextReview(){
        return cy.get('#NextReviewPeriod')
    }

    row_CurrentProject(){
        return cy.get('#CurrentProject')
    }

    row_ProjectStatus(){
        return cy.get('#ProjectStatus')
    }
}

module.exports = new EmployeeDetails();