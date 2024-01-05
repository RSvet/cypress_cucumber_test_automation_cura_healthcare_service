Feature: Visit login page 

    Background: 
      Given I am on a home page

    Scenario: User navigates to login page by clicking Make Appointment button
      When I click on the Make Appointment button on the home page
      Then I am redirected to the login page

    Scenario: User navigates to login page by clicking Login button from the side navigation menu
      When I click on the hamburger button on the right side of the page
      Then Side navigation menu appears from the right
      And I click on the Login button from the side menu
      Then I am redirected to the login page