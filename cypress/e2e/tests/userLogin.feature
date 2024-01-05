Feature: User login

  Background: 
        Given I am on a home page
        When I click on the hamburger button on the right side of the page
        Then Side navigation menu appears from the right
        And I click on the Login button from the side menu
        Then I am redirected to the login page

  Scenario: User did not login without credentials
        When I click Login button
        Then Error message appears with text 'Login failed! Please ensure the username and password are valid.'
        And I am still on the login page

   Scenario Outline: User did not login with wrong username or wrong password
        When I enter username "<username>" in username field
        And I enter password "<password>" in password field
        And I click Login button
        Then Error message appears with text 'Login failed! Please ensure the username and password are valid.'
        And I am on the login page

        Examples:
            | username | password |
            | Wrong username | ThisIsNotAPassword |
            | John Doe | WrongPassword |

    Scenario: User logs in with valid credentials
        When I enter correct username in username field
        And I enter correct password in password field
        And I click Login button
        Then I am redirected to the appointment page
        And I click on the hamburger button on the right side of the page
        Then Side navigation menu appears from the right with "Logout" link present
        And I click on the logout link
        Then I am logged out and on the home page
