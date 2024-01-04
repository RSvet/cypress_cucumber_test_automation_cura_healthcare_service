import {Before,Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import SideNavPage from "../../../pages/SideNavPage";
import LoginPage from "../../../pages/LoginPage";
import HistoryPage from "../../../pages/HistoryPage";
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