$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/sanoj/javaprogrammes/BDD/src/test/resources/features/ValidLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Smoke#Regression"
    }
  ],
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login with Valid Credentials",
  "description": "",
  "id": "login;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on the \"Login\" page on URL \"https://demo.actitime.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User fill in \"Username\" with \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User fill in \"Password\" with \"manager\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should see \"Enter Time-Track\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should see the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    },
    {
      "val": "https://demo.actitime.com/",
      "offset": 36
    }
  ],
  "location": "Login.user_is_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 18268919748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 14
    },
    {
      "val": "admin",
      "offset": 30
    }
  ],
  "location": "Login.user_fill_in_with(String,String)"
});
formatter.result({
  "duration": 70097257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 14
    },
    {
      "val": "manager",
      "offset": 30
    }
  ],
  "location": "Login.user_fill_in_with(String,String)"
});
formatter.result({
  "duration": 94441085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 19
    }
  ],
  "location": "Login.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 72934490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Time-Track",
      "offset": 17
    }
  ],
  "location": "Login.user_should_see_message(String)"
});
formatter.result({
  "duration": 4362883074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 21
    }
  ],
  "location": "Login.user_should_see_the_button(String)"
});
formatter.result({
  "duration": 58982493,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 128357828,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Multiple User Logins",
  "description": "",
  "id": "login;multiple-user-logins",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is on the \"Login\" page on URL \"https://demo.actitime.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User fill in login credentials with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should see \"Enter Time-Track\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User should see the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "login;multiple-user-logins;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "login;multiple-user-logins;;1"
    },
    {
      "cells": [
        "admin",
        "manager"
      ],
      "line": 23,
      "id": "login;multiple-user-logins;;2"
    },
    {
      "cells": [
        "admin",
        "manager"
      ],
      "line": 24,
      "id": "login;multiple-user-logins;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Multiple User Logins",
  "description": "",
  "id": "login;multiple-user-logins;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is on the \"Login\" page on URL \"https://demo.actitime.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User fill in login credentials with \"admin\" and \"manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should see \"Enter Time-Track\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User should see the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    },
    {
      "val": "https://demo.actitime.com/",
      "offset": 36
    }
  ],
  "location": "Login.user_is_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 18191788455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 37
    },
    {
      "val": "manager",
      "offset": 49
    }
  ],
  "location": "Login.user_fill_in_login_credentials_with_and(String,String)"
});
formatter.result({
  "duration": 135794392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 19
    }
  ],
  "location": "Login.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 67033218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Time-Track",
      "offset": 17
    }
  ],
  "location": "Login.user_should_see_message(String)"
});
formatter.result({
  "duration": 7301567601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 21
    }
  ],
  "location": "Login.user_should_see_the_button(String)"
});
formatter.result({
  "duration": 59025908,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 78832287,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Multiple User Logins",
  "description": "",
  "id": "login;multiple-user-logins;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is on the \"Login\" page on URL \"https://demo.actitime.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User fill in login credentials with \"admin\" and \"manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should see \"Enter Time-Track\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User should see the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    },
    {
      "val": "https://demo.actitime.com/",
      "offset": 36
    }
  ],
  "location": "Login.user_is_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 14043586906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 37
    },
    {
      "val": "manager",
      "offset": 49
    }
  ],
  "location": "Login.user_fill_in_login_credentials_with_and(String,String)"
});
formatter.result({
  "duration": 123469532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 19
    }
  ],
  "location": "Login.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 66349926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Time-Track",
      "offset": 17
    }
  ],
  "location": "Login.user_should_see_message(String)"
});
formatter.result({
  "duration": 4396653599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 21
    }
  ],
  "location": "Login.user_should_see_the_button(String)"
});
formatter.result({
  "duration": 70012120,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 115262541,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login with Invalid Credentials",
  "description": "",
  "id": "login;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "User is on the \"Login\" page on URL \"https://demo.actitime.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User fill in \"Username\" with \"admin1\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User fill in \"Password\" with \"manager2\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should see error \"Username or Password is invalid.\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 16
    },
    {
      "val": "https://demo.actitime.com/",
      "offset": 36
    }
  ],
  "location": "Login.user_is_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 16533441786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 14
    },
    {
      "val": "admin1",
      "offset": 30
    }
  ],
  "location": "Login.user_fill_in_with(String,String)"
});
formatter.result({
  "duration": 64183330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 14
    },
    {
      "val": "manager2",
      "offset": 30
    }
  ],
  "location": "Login.user_fill_in_with(String,String)"
});
formatter.result({
  "duration": 98107804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 19
    }
  ],
  "location": "Login.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 77026862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username or Password is invalid.",
      "offset": 23
    }
  ],
  "location": "Login.user_should_see_error_message(String)"
});
formatter.result({
  "duration": 1386720580,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 72485081,
  "status": "passed"
});
});