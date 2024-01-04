import {Before, Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import SideNavPage from "../../../pages/SideNavPage";
import LoginPage from "../../../pages/LoginPage";
import AppointmentPage from "../../../pages/AppointmentPage";
import SummaryPage from "../../../pages/SummaryPage";
let userData;

Before(()=>{
  cy.fixture('userData').then(data=>{   
    userData = data;   
  })
})

Given("I am on a page with url {string}", (url)=>{
  cy.visit(url)
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

Then("I am redirected to the login page with url {string}", (url)=>{
  cy.url().should('eq', url) 
})

When("I enter correct username and password", ()=>{
  LoginPage.fillUsername(userData.correctUsername)
  LoginPage.fillPassword(userData.correctPassword)
})

And("I click Login button", ()=>{
  LoginPage.clickLoginBtn()
})

Then("I am redirected to the page with url {string}", (url)=>{
  cy.url().should('eq', url)
})

When ("I click Book Appointment button", ()=>{
  AppointmentPage.clickbookAppointmentBtn()
})

Then("I stay on the page with url {string}", (url)=>{
  cy.url().should('eq', url)
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

Then("I am redirected to the summary page with url {string}", (url)=>{
  cy.url().should('eq', url)
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

And("I am redirected to homepage with url {string}", (url)=>{
  cy.url().should('eq', url)
})



