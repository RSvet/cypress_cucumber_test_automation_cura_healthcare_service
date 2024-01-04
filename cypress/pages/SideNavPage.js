class SideNavPage {
  hamburgerBtn (){
    return cy.get('#menu-toggle')
  }

  sideMenu (){
    return cy.get('#sidebar-wrapper.active')
  }

  sideMenuLink (linkName){
    return cy.get('.sidebar-nav a').contains(linkName)
  }

  clickHamburgerBtn(){
    this.hamburgerBtn().click()
  }

  checkSideMenuAppears (){
    this.sideMenu().should('be.visible') 
  }

  checkSideMenuLink(linkText){
    this.sideMenu().should('include.text', linkText)
  }

  clickSideMenuLink(linkName){
    this.sideMenuLink(linkName).click()
  }

}

module.exports = new SideNavPage();