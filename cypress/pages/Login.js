class Login{
    txt_Username(){
        return cy.get('input[id="UserName"]')
    }

    txt_Password(){
        return cy.get('input[id="Password"]')
    }

    btn_Login(){
        return cy.get('button[id="btn-login"]')
    }

    errorLogin(){
        return cy.contains('Incorrect User ID or Password.')
    }
}

module.exports = new Login();