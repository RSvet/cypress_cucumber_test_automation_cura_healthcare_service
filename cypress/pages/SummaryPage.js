class SummaryPage {
  pageTitle(){
    return cy.get('h2')
  }

  facilityData(){
    return cy.get("#facility")
  }

  healthCareData(){
    return cy.get("#program")
  }

  visitDate(){
    return cy.get("#visit_date")
  }

  clickGoToHomePageBtn(){
    cy.get("p>a.btn").click()
  }
  checkPageTitle(title){
    this.pageTitle().should('have.text', title)
  }

  checkFacilityData(data){
    this.facilityData().should('include.text', data)
  }

  checkHealthCareData(data){
    this.healthCareData().should('include.text', data)
  }

  checkVisitDate(date){
    this.visitDate().should('have.text', date)
  }
}

module.exports = new SummaryPage();