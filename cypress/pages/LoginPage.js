class LoginPage {
  loginBtn (){
    return cy.get('#btn-login')
  }

  errorMessage (){
    return cy.get('p.lead.text-danger')
  }

  usernameInput(){
    return cy.get('#txt-username')
  }

  passwordInput(){
    return cy.get('#txt-password')
  }

  clickLoginBtn(){
    this.loginBtn().click()
  }

  checkIfErrorMsgExists(text){
    this.errorMessage().should('exist').and('include.text', text)
  }

  fillUsername(username){
    this.usernameInput().type(username)
  }

  fillPassword(password){
    this.passwordInput().type(password)
  }
}

module.exports = new LoginPage();