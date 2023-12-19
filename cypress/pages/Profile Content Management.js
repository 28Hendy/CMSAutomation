class ProfileContentManagement{
    btn_logout(){
        return cy.get('#logout-btn')
    }

    txt_EducationInstitution(){
        return cy.get('#Institution') //using id as selector
    }

    txt_EducationTitle(){
        return cy.get('#Title')
    }

    txt_Educationperiod(){
        return cy.get('#Period')
    }

    txt_EducationOrder(){
        return cy.get('#DisplayOrderEducation')
    }

    btn_SaveEducation(){
        return cy.get('#SaveEducation')
    }

    tableEducation(){
        return cy.get('.ui-jqgrid-sortable')
    }

    tab_training(){
        return cy.contains('Training and Courses')
    }

    txt_topic(){
        return cy.get('#Topic')
    }

    txt_TrainingInstitution(){
        return cy.get('#InstitutionTraining')
    }

    txt_PeriodTraining(){
        return cy.get('#PeriodTraining')
    }

    txt_Description(){
        return cy.get('#Description')
    }

    txt_TrainingOrder(){
        return cy.get('#DisplayOrderTraining')
    }

    btn_SaveTraining(){
        return cy.get('#SaveTraining')
    }

    tableTraining(){
        return cy.get('.ui-widget-content jqgrow ui-row-ltr ui-state-highlight')
    }

    tab_TrainingInvolvement(){
        return cy.contains('Project Involvement')
    }

    txt_ProjectName(){
        return cy.get('#ProjectName')
    }

    txt_ProjectRole(){
        return cy.get('#Role')
    }

    txt_ProjectResponsibility(){
        return cy.get('#Responsibility')
    }

    txt_ProjectTool(){
        return cy.get('#Tool')
    }

    txt_ProjectPeriod(){
        return cy.get('#PeriodProject')
    }

    txt_ProjectDescription(){
        return cy.get('#ProjectDescription')
    }

    txt_ProjectOrder(){
        return cy.get('#DisplayOrderProject')
    }

    btn_SaveProject(){
        return cy.get('#SaveProject')
    }

    table_Project(){
        return cy.get('.jqgfirstrow')
    }

    tab_Certification(){
        return cy.contains('Certification Images')
    }
    
    txt_CertificationName(){
        return cy.get('#CertificationName')
    }

    txt_CeritificationDesc(){
        return cy.get('#CertificationDescription')
    }

    txt_CertificationOrder(){
        return cy.get('#DisplayOrderCertificate')
    }

    txt_UploadCertificate(){
        return cy.get('#browse')
    }

    btn_SaveCertification(){
        return cy.get('#SaveCertification')
    }

    table_Certification(){
        return cy.get('.jqgfirstrow')
    }

    tab_Language(){
        return cy.contains('Language')
    }

    txt_Language(){
        return cy.get('#LanguageName')
    }

    txt_LanguageDesc(){
        return cy.get('#LanguageDescription')
    }

    txt_languageOrder(){
        return cy.get('#DisplayOrderLanguage')
    }

    btn_SaveLanguage(){
        return cy.get('#SaveLanguage')
    }

    table_Language(){
        return cy.get('.jqgfirstrow')
    }
}
module.exports = new ProfileContentManagement();