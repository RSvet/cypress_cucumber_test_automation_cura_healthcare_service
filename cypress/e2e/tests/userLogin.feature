Feature: User login

  Background: 
        Given I am on a page with url "https://katalon-demo-cura.herokuapp.com/"
        When I click on the hamburger button on the right side of the page
        Then Side navigation menu appears from the right
        And I click on the Login button from the side menu
        Then I am redirected to the login page with url "https://katalon-demo-cura.herokuapp.com/profile.php#login"

  Scenario: User did not login without credentials
        When I click Login button
        Then Error message appears with text 'Login failed! Please ensure the username and password are valid.'
        And User is on the page with url 'https://katalon-demo-cura.herokuapp.com/profile.php#login'