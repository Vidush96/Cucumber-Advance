$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Login1.feature");
formatter.feature({
  "name": "login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login with credentails",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "verify home page is displayed \"\u003cexpected result\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "expected result"
      ]
    },
    {
      "cells": [
        "admin",
        "manager",
        "actiTIME - Enter Time-Track"
      ]
    },
    {
      "cells": [
        "admin1",
        "manager1",
        "actiTIME - Login"
      ]
    },
    {
      "cells": [
        "admin",
        "admin",
        "actiTIME - Login"
      ]
    },
    {
      "cells": [
        "admin",
        "manager",
        "actiTIME - Enter Time-Track"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login with credentails",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Steps1.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"admin\" and \"manager\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Steps1.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.Steps1.clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify home page is displayed \"actiTIME - Enter Time-Track\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Steps1.verify_home_page_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login with credentails",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Steps1.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"admin1\" and \"manager1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Steps1.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.Steps1.clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify home page is displayed \"actiTIME - Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Steps1.verify_home_page_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login with credentails",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Steps1.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"admin\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Steps1.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.Steps1.clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify home page is displayed \"actiTIME - Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Steps1.verify_home_page_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login with credentails",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Steps1.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"admin\" and \"manager\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Steps1.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.Steps1.clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify home page is displayed \"actiTIME - Enter Time-Track\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Steps1.verify_home_page_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify home page is displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Steps1.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username \"admin\" and valid password \"manager\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Steps1.user_enters_valid_username_and_valid_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.Steps1.clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Steps1.home_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user searches for a product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ft"
    }
  ]
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Steps1.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for product",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Steps1.user_search_for_product(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "shoes page should be diplayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Steps1.shoes_page_should_be_diplayed()"
});
formatter.result({
  "status": "passed"
});
});