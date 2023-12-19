class ResultDocuments{
    table_MyReviewResultDocuments(){
        return cy.get('#reviewResultDocuments')
    }
}

module.exports = new ResultDocuments();