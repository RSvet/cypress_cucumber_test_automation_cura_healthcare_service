Feature: Make an appointment

      Background: 
            Given I am on a home page
            When I click on the hamburger button on the right side of the page
            Then Side navigation menu appears from the right
            And I click on the Login button from the side menu
            Then I am redirected to the login page
            When I enter correct username and password
            And I click Login button
            Then I am redirected to the appointment page

      Scenario: Form can not be submitted without appointment date
            When I click Book Appointment button
            Then I stay on the appointment page
            And Warning pop up shows message "Please fill out this field." below date field

      Scenario: Form is submitted after entering data and all data is correct
            When I enter tomorrow's date in the date input
            And I verify if first facility is selected
            And I verify if first healthcare program is checked
            And I click Book Appointment button
            Then I am redirected to the summary page
            And There is title "Appointment Confirmation" on the page
            And All appointment data is correct
            Then I click Go to Homepage button
            And I am redirected to homepage

         Scenario: User can't make an appointment for the date in the past
            When I enter yesterday's date in the date input
            And I click Book Appointment button
            Then I stay on the home page


      