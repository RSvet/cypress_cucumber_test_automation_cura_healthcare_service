import {Before, Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import SideNavPage from "../../../pages/SideNavPage";
import LoginPage from "../../../pages/LoginPage";
import AppointmentPage from "../../../pages/AppointmentPage";
import SummaryPage from "../../../pages/SummaryPage";
let userData;
let page;
Before(()=>{
  cy.fixture('userData').then(data=>{   
    userData = data;   
  })
  cy.fixture('urlData').then(data=>{   
    page = data;   
  })
 
})

Given("I am on a home page", ()=>{
  cy.visit(page.baseUrl)
})

When("I click on the hamburger button on the right side of the page", ()=>{
  SideNavPage.clickHamburgerBtn()
})

Then("Side navigation menu appears from the right", ()=>{
  SideNavPage.checkSideMenuAppears()
})

And("I click on the Login button from the side menu", ()=>{
  SideNavPage.clickSideMenuLink('Login')
})

Then("I am redirected to the login page", ()=>{
  cy.url().should('eq', page.baseUrl+page.loginUrl) 
})

When("I enter correct username and password", ()=>{
  LoginPage.fillUsername(userData.correctUsername)
  LoginPage.fillPassword(userData.correctPassword)
})

And("I click Login button", ()=>{
  LoginPage.clickLoginBtn()
})

Then("I am redirected to the appointment page", ()=>{
  cy.url().should('eq', page.baseUrl+page.appointmentUrl)
})

When ("I click Book Appointment button", ()=>{
  AppointmentPage.clickbookAppointmentBtn()
})

Then("I stay on the appointment page", ()=>{
  cy.url().should('eq', page.baseUrl+page.appointmentUrl)
})

And("Warning pop up shows message {string} below date field", (message)=>{
  AppointmentPage.checkWarningPopUpMessage(message)
})

When("I enter tomorrow's date in the date input", ()=>{
  AppointmentPage.fillDateInput('tomorrow')  
})

And("I verify if first facility is selected", ()=>{
  AppointmentPage.checkIfFirstFacilityIsSelected()
})

And("I verify if first healthcare program is checked", ()=>{
  AppointmentPage.checkIfFirstRadioBtnIsSelected()
})

And("I click Book Appointment button", ()=>{
  AppointmentPage.clickbookAppointmentBtn()
})

Then("I am redirected to the summary page", ()=>{
  cy.url().should('eq', page.baseUrl+page.summaryUrl)
})

And ("There is title {string} on the page", (title)=>{
  SummaryPage.checkPageTitle(title)
  console.log(AppointmentPage.firstFacility)
  console.log(AppointmentPage.firstHealthCareProgram)
})

And("All appointment data is correct", ()=>{
  SummaryPage.checkFacilityData(AppointmentPage.firstFacility)
  SummaryPage.checkHealthCareData(AppointmentPage.firstHealthCareProgram)
  SummaryPage.checkVisitDate(AppointmentPage.pickDate('tomorrow'))
})

Then("I click Go to Homepage button", ()=>{
  SummaryPage.clickGoToHomePageBtn()
})

And("I am redirected to homepage", ()=>{
  cy.url().should('eq', page.baseUrl)
})

When("I enter yesterday's date in the date input", ()=>{
  AppointmentPage.fillDateInput("yesterday")
})

And("I click Book Appointment button", ()=>{
  AppointmentPage.clickbookAppointmentBtn()
})

Then("I stay on the home page", ()=>{
  cy.url().should('eq', page.baseUrl)
})



