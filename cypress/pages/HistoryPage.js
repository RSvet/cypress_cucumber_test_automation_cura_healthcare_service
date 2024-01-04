class HistoryPage {
 noAppointmentElement(){
  return cy.get("#history div p:nth-child(3)")
 }

 appointmentPanelBox(){
  return cy.get(".panel-info")
 }

 panelHeading(){
  return cy.get(".panel-heading")
 }

 facilityBox(){
  return cy.get('#facility')
 }

 hospitalReadmissionBox(){
  return cy.get('#hospital_readmission')
 }

 healthCareProgramBox(){
  return cy.get("#program")
 }

 commentBox(){
  return cy.get("#comment")
 }

 checkNoAppointmentText(text){
  this.noAppointmentElement().should('include.text', text)
 }

 checkIsAppointmentInformationPresent(){
  this.appointmentPanelBox().should('exist')
 }

 checkDateInformation(date){
  this.panelHeading().should('include.text', date)
}
 checkFacilityInformation(facility){
  this.facilityBox().should('include.text', facility)
 }

 checkHospitalReadmissionInformation(readmission){
  this.hospitalReadmissionBox().should('include.text', readmission)
 }

 checkHealthCareProgramInformation(healthcareProgram){
  this.healthCareProgramBox().should('include.text', healthcareProgram)
 }

 checkComment(comment){
  this.commentBox().should('include.text', comment)
 }




}

module.exports = new HistoryPage();