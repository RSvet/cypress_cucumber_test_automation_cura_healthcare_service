class AppointmentPage {
  firstFacility;
  firstHealthCareProgram;
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

  dateInput(){
    return cy.get('#txt_visit_date')
  }

  facilityInput(){
    return cy.get('#combo_facility')
  }

  checkHospitalReadmissionCheckbox(){
    cy.get("input[name='hospital_readmission']").check()
  }

  radioButtons(){
    return cy.get("input[type='radio']")
  }
  checkIfFirstFacilityIsSelected(){
    this.facilityInput().find('option').each(($el, index)=>{
      if(index === 0){
        this.firstFacility = $el.text();  
      cy.get('#combo_facility option:selected').should('have.text', this.firstFacility)
      }   

    })}

    checkIfFirstRadioBtnIsSelected(){
      this.radioButtons().eq(0).then(($el)=>{
        this.firstHealthCareProgram = $el.attr('value')   
        cy.wrap($el).should('be.checked')    
      })   
    
    }   

    selectFacility(facility){
      this.facilityInput().select(facility)
    }

    selectHealthcaraProgram(program){
      this.radioButtons().check(program)
    }

    typeComment(comment){
        cy.get("#txt_comment").type(comment, {force: true})
     }
  
  pickDate(when){    
    let currentDate = new Date()
    currentDate.setDate(currentDate.getDate())
    let month = String(currentDate.getMonth()+1).padStart(2,'0')
    let year = currentDate.getFullYear()
    let day;
    if(when === 'yesterday')
      day = currentDate.getDate()-1
    else if (when==='tomorrow')
    day = String(currentDate.getDate()+1).padStart(2,'0')
    return day+'/'+month+'/'+year   
  }

  fillDateInput(when){
    this.dateInput().type(this.pickDate(when))
  }
}

module.exports = new AppointmentPage();