class ResultDocuments{
    table_MyReviewResultDocuments(){
        return cy.get('#reviewResultDocuments')
    }

    link_Download(){
        return cy.xpath('//body[1]/div[5]/div[1]/form[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[4]/a[1]')
    }
}

module.exports = new ResultDocuments();