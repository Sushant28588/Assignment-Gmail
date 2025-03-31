$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Login_and_compose.feature");
formatter.feature({
  "name": "Login and Compose",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successfull login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "User Launch the Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.user_Launch_the_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User the URLs \"https://accounts.google.com/v3/signin/identifier?continue\u003dhttps%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F\u0026emr\u003d1\u0026followup\u003dhttps%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F\u0026ifkv\u003dAXH0vVu2Zytpgj5lXCZXq2BzTZyjJCwvIUPCEQqDvQJwvIkqSy86L6uPHOLn0-NcepUu9L3Z5yTEKA\u0026osid\u003d1\u0026passive\u003d1209600\u0026service\u003dmail\u0026flowName\u003dGlifWebSignIn\u0026flowEntry\u003dServiceLogin\u0026dsh\u003dS1697329736%3A1743076743702809#inbox\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.user_the_URLs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Emails as \"usertest10010@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_enter_Emails_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Next buttonOne",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.click_on_Next_buttonOne()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Password as \"Testabc@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_enter_Password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Next buttonTwo",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.click_on_Next_buttonTwo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Compose new Email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Compose"
    }
  ]
});
formatter.step({
  "name": "User click on Compose button",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.user_click_on_Compose_button()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"PageObject.LoginPage.composeButton()\" because \"this.loginpg\" is null\r\n\tat StepDefinition.stepDefinition.user_click_on_Compose_button(stepDefinition.java:63)\r\n\tat ✽.User click on Compose button(./Features/Login_and_compose.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The \"New Message\" pop-up should appear",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.the_pop_up_should_appear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sends an email to \"usertest10010@gmail.com\" with subject \"Incubyte\" and email body \"QA test for Incubyte\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_sends_an_email_to_with_subject_and_email_body(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The email appears in the sent folder of gmail with subject \"Incubyte\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.the_email_appears_in_the_sent_folder_of_gmail_with_subject(String)"
});
formatter.result({
  "status": "skipped"
});
});