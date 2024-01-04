class HistoryPage {
 noAppointmentElement(){
  return cy.get("#history div p:nth-child(3)")
 }

 checkNoAppointmentText(text){
  this.noAppointmentElement().should('include.text', text)
 }
}

module.exports = new HistoryPage();