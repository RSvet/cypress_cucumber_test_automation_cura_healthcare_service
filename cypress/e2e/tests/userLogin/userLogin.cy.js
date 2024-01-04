import {Before, Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import SideNavPage from "../../../pages/SideNavPage";
import LoginPage from "../../../pages/LoginPage";

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

When("I click Login button", ()=>{
  LoginPage.clickLoginBtn()
})

Then("Error message appears with text {string}", (errorMessage)=>{
  LoginPage.checkIfErrorMsgExists(errorMessage)
})

And("User is on the page with url {string}", (url)=>{
  cy.url().should('eq', url)
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

And("User is on the page with url {string}", (url)=>{
  cy.url().should('eq', url)
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

Then("I am redirected to the page with url {string}", (url)=>{
  cy.url().should('eq', url)
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

Then("I am logged out and on the page with url {string}", (url)=>{
  cy.url().should('eq', url) 
})