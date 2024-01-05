import {Before, Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import SideNavPage from "../../../pages/SideNavPage";
import LoginPage from "../../../pages/LoginPage";

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

When("I click Login button", ()=>{
  LoginPage.clickLoginBtn()
})

Then("Error message appears with text {string}", (errorMessage)=>{
  LoginPage.checkIfErrorMsgExists(errorMessage)
})

And("I am still on the login page", ()=>{
  cy.url().should('eq', page.baseUrl+page.loginUrl)
})

When("I enter username {string} in username field", (username)=>{
  LoginPage.fillUsername(username)
})

And("I enter password {string} in password field", (password)=>{
  LoginPage.fillPassword(password)
})

And("I click Login button", ()=>{
  LoginPage.clickLoginBtn()
})

Then("Error message appears with text {string}", (errorMessage)=>{
  LoginPage.checkIfErrorMsgExists(errorMessage)
})

And("I am on the login page", ()=>{
  cy.url().should('eq', page.baseUrl+page.loginUrl)
})

When("I enter correct username in username field", ()=>{
  LoginPage.fillUsername(userData.correctUsername)
})

And("I enter correct password in password field", ()=>{
  LoginPage.fillPassword(userData.correctPassword)
})

And("I click Login button", ()=>{
  LoginPage.clickLoginBtn()
})

Then("I am redirected to the appointment page", ()=>{
  cy.url().should('eq', page.baseUrl+page.appointmentUrl)
})

And("I click on the hamburger button on the right side of the page", ()=>{
  SideNavPage.clickHamburgerBtn()
})

Then("Side navigation menu appears from the right with {string} link present", (linkText)=>{
  SideNavPage.checkSideMenuAppears()
  SideNavPage.checkSideMenuLink(linkText)
})

And("I click on the logout link", ()=>{
  SideNavPage.clickSideMenuLink('Logout')
})

Then("I am logged out and on the home page", ()=>{
  cy.url().should('eq', page.baseUrl) 
})