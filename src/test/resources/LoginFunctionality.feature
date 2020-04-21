Feature: Login functionality

Scenario: Sucessfull login with valid credentails

Given  user is on Login Page
When  user enters valid username "admin" and Password "manager"
And  clicks on Login button
And clicks remember me checkbox
Then  Message displayed Login Successfully

Scenario: user enters invalid credentials to login

Given user is on Login Page
When user enters invalid username "admin1" and Password "manager1"
And clicks on Login button
Then Error message should be displayed