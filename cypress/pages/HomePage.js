class HomePage {
  makeAnAppointmentBtn (){
    return cy.get('#btn-make-appointment')
  }

  clickMakeAnAppointmentBtn(){
    this.makeAnAppointmentBtn().click()
  }
}

module.exports = new HomePage();