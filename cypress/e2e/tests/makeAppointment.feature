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

      Scenario: Form is submitted after entering data and all data is correct
            When I enter tomorrow's date in the date input
            And I verify if first facility is selected
            And I verify if first healthcare program is checked
            And I click Book Appointment button
            Then I am redirected to the summary page with url "https://katalon-demo-cura.herokuapp.com/appointment.php#summary"
            And There is title "Appointment Confirmation" on the page
            And All appointment data is correct
            Then I click Go to Homepage button
            And I am redirected to homepage with url "https://katalon-demo-cura.herokuapp.com/"

         Scenario: User can't make an appointment for the date in the past
            When I enter yesterday's date in the date input
            And I click Book Appointment button
            Then I stay on the page with url "https://katalon-demo-cura.herokuapp.com/"


      