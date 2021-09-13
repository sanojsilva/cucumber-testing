#Smoke#Regression
  Feature: Login
    Scenario: Login with Valid Credentials
      Given User is on the "Login" page on URL "https://demo.actitime.com/"
      When User fill in "Username" with "admin"
      And User fill in "Password" with "manager"
      And User click on the "Login" button
      Then User should see "Enter Time-Track" message
      And User should see the "Logout" button
      And User close the browser

    Scenario Outline: Multiple User Logins
      Given User is on the "Login" page on URL "https://demo.actitime.com/"
      When User fill in login credentials with "<username>" and "<password>"
      And User click on the "Login" button
      Then User should see "Enter Time-Track" message
      And User should see the "Logout" button
      And User close the browser


      Examples:
        |username |password |
        |admin    |manager  |
        |admin    |manager  |

    Scenario: Login with Invalid Credentials
      Given User is on the "Login" page on URL "https://demo.actitime.com/"
      When User fill in "Username" with "admin1"
      And User fill in "Password" with "manager2"
      And User click on the "Login" button
      Then User should see error "Username or Password is invalid." message
      And User close the browser