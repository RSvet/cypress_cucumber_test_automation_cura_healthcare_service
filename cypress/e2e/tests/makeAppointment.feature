Feature: Make an appointment

  Background: 
        Given I am on a page with url "https://katalon-demo-cura.herokuapp.com/"
        When I click on the hamburger button on the right side of the page
        Then Side navigation menu appears from the right
        And I click on the Login button from the side menu
        Then I am redirected to the login page with url "https://katalon-demo-cura.herokuapp.com/profile.php#login"
        When I enter correct username and password
        And I click Login button
        Then I am redirected to the page with url "https://katalon-demo-cura.herokuapp.com/#appointment"

  Scenario: Form can not be submitted without appointment date
        When I click Book Appointment button
        Then I stay on the page with url "https://katalon-demo-cura.herokuapp.com/#appointment"
        And Warning pop up shows message "Please fill out this field." below date field