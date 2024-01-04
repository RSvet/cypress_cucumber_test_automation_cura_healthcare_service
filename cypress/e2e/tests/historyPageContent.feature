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

      Scenario: There are no appointment data if user did not schedule an appointment
            When I click on the hamburger button on the right side of the page
            Then Side navigation menu appears from the right
            And I click on the history link from side menu
            Then I am redirected to the page with url "https://katalon-demo-cura.herokuapp.com/history.php#history"
            And Text "No appointment" is present on the page

       Scenario: Information about appointment is present after user makes an appointment
            When I fill appointment data for facility, healthcare program and date
            And I click Book Appointment button
            Then I am redirected to summary page with url "https://katalon-demo-cura.herokuapp.com/appointment.php#summary"
            When I click on the hamburger button on the right side of the page
            Then Side navigation menu appears from the right
            And I click on the history link from side menu
            Then I am redirected to the page with url "https://katalon-demo-cura.herokuapp.com/history.php#history"
            And Appointment information are present on history page

        Scenario: Information about appointment on history page is the same as data that user provided
            When I fill appointment data
            And I click Book Appointment button
            Then I am redirected to summary page with url "https://katalon-demo-cura.herokuapp.com/appointment.php#summary"
            When I click on the hamburger button on the right side of the page
            And I click on the history link from side menu
            Then I am redirected to the page with url "https://katalon-demo-cura.herokuapp.com/history.php#history"
            And Information about appointment on history page is the same as user provided
            When I click on the hamburger button on the right side of the page
            Then Side navigation menu appears from the right with "Logout" link present
            And I click on the logout link
            Then I am logged out and on the page with url "https://katalon-demo-cura.herokuapp.com/"

