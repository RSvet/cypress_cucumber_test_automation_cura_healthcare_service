import {Before,Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import SideNavPage from "../../../pages/SideNavPage";
import LoginPage from "../../../pages/LoginPage";
import HistoryPage from "../../../pages/HistoryPage";
import AppointmentPage from "../../../pages/AppointmentPage";
let userData; 
let apptData;
Before(()=>{
  cy.fixture('userData').then(data=>{   
    userData = data;   
  })
  cy.fixture('appointmentData').then(data=>{
    apptData = data
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

When("I click on the hamburger button on the right side of the page", ()=>{
  SideNavPage.clickHamburgerBtn()
})

Then("Side navigation menu appears from the right", ()=>{
  SideNavPage.checkSideMenuAppears()
})

And("I click on the history link from side menu", ()=>{
  SideNavPage.clickSideMenuLink('History')
})

Then("I am redirected to the page with url {string}", (url)=>{
  cy.url().should('eq', url)
})

And ("Text {string} is present on the page", (text)=>{
  HistoryPage.checkNoAppointmentText(text)
})

When("I fill appointment data for facility, healthcare program and date",()=>{
  AppointmentPage.selectFacility(apptData.facility)
  AppointmentPage.selectHealthcaraProgram(apptData.healthcareProgram)
  AppointmentPage.fillDateInput("tomorrow")
})

And("I click Book Appointment button", ()=>{
  AppointmentPage.clickbookAppointmentBtn()
})

Then("I am redirected to summary page with url {string}", (url)=>{
  cy.url().should('eq', url)
})

When("I click on the hamburger button on the right side of the page", ()=>{
  SideNavPage.clickHamburgerBtn()
})

Then("Side navigation menu appears from the right", ()=>{
  SideNavPage.checkSideMenuAppears()
})

And("I click on the history link from side menu", ()=>{
  SideNavPage.clickSideMenuLink('History')
})

Then("I am redirected to the page with url {string}", (url)=>{
  cy.url().should('eq', url)
})

And("Appointment information are present on history page", ()=>{
  HistoryPage.checkIsAppointmentInformationPresent()
})