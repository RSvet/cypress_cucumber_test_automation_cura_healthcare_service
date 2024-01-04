class AppointmentPage {
  bookAppointmentBtn (){
    return cy.get('#btn-book-appointment')
  } 

  checkWarningPopUpMessage(messageText){
  cy.get('#txt_visit_date:invalid')
  .invoke('prop', 'validationMessage')
  .should('equal', messageText)  
  }

  clickbookAppointmentBtn(){
    this.bookAppointmentBtn().click()
  }
}

module.exports = new AppointmentPage();