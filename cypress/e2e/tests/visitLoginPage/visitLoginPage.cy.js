import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pages/HomePage";
import SideNavPage from "../../../pages/SideNavPage";

Given("I am on a page with url {string}", (url)=>{
  cy.visit(url)
})

When("I click on the Make Appointment button on the home page", ()=>{
  HomePage.clickMakeAnAppointmentBtn()
})

Then("I am redirected to the login page with url {string}", (url)=>{
  cy.url().should('eq', url) 
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