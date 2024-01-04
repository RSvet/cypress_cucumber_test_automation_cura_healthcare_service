Feature: History page content
     Background: 
            Given I am on a page with url "https://katalon-demo-cura.herokuapp.com/"
            When I click on the hamburger button on the right side of the page
            Then Side navigation menu appears from the right
            And I click on the Login button from the side menu
            Then I am redirected to the login page with url "https://katalon-demo-cura.herokuapp.com/profile.php#login"
            When I enter correct username and password
            And I click Login button
            Then I am redirected to the page with url "https://katalon-demo-cura.herokuapp.com/#appointment"

      Scenario: There are no appointment data  if user did not schedule an appointment
            When I click on the hamburger button on the right side of the page
            Then Side navigation menu appears from the right
            And I click on the history link from side menu
            Then I am redirected to the page with url "https://katalon-demo-cura.herokuapp.com/history.php#history"
            And Text "No appointment" is present on the page