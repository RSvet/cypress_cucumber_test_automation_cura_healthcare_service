import {Before, Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pages/HomePage";
import SideNavPage from "../../../pages/SideNavPage";
let page;
Before(()=>{
  cy.fixture('urlData').then(data=>{   
    page = data;   
  })
})

Given("I am on a home page", ()=>{
  cy.visit(page.baseUrl)
})

When("I click on the Make Appointment button on the home page", ()=>{
  HomePage.clickMakeAnAppointmentBtn()
})

Then("I am redirected to the login page", ()=>{
  cy.url().should('eq', page.baseUrl+page.loginUrl) 
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