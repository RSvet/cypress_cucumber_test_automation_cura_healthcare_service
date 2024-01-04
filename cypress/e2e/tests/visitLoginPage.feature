Feature: Visit login page 

    Background: 
      Given I am on a page with url "https://katalon-demo-cura.herokuapp.com/"

    Scenario: User navigates to login page by clicking Make Appointment button
      When I click on the Make Appointment button on the home page
      Then I am redirected to the login page with url "https://katalon-demo-cura.herokuapp.com/profile.php#login"

    Scenario: User navigates to login page by clicking Login button from the side navigation menu
      When I click on the hamburger button on the right side of the page
      Then Side navigation menu appears from the right
      And I click on the Login button from the side menu
      Then I am redirected to the login page with url "https://katalon-demo-cura.herokuapp.com/profile.php#login"