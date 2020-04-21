Feature: login functionality

@regression @adhoc
Scenario Outline:  login with credentails

Given  user is on Login Page
When  user enters "<username>" and "<password>"
And  clicks on Login button
Then  verify home page is displayed "<expected result>"

Examples:
|username |password | expected result|
|admin    |manager  |actiTIME - Enter Time-Track|
|admin1   |manager1 |actiTIME - Login|
|admin    |admin    |actiTIME - Login|
|admin    |manager  |actiTIME - Enter Time-Track |


@smoke
Scenario: verify home page is displayed

Given user is on Login Page
When user enters valid username "admin" and valid password "manager"
And clicks on Login button
Then Home page should be displayed


@ft
Scenario: user searches for a product
Given user is on home page
When user search for product
|product|quantity|
|shoes  |2       |
|watches|3       |
|bags   |5       |
Then - page should be diplayed
