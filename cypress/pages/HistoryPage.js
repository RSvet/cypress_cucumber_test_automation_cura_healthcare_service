class HistoryPage {
 noAppointmentElement(){
  return cy.get("#history div p:nth-child(3)")
 }

 appointmentPanelBox(){
  return cy.get(".panel-info")
 }

 checkNoAppointmentText(text){
  this.noAppointmentElement().should('include.text', text)
 }

 checkIsAppointmentInformationPresent(){
  this.appointmentPanelBox().should('exist')
 }
}

module.exports = new HistoryPage();