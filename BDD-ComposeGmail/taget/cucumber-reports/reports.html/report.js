$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Login_and_compose.feature");
formatter.feature({
  "name": "Login and Compose",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successfull login with valid credentials",
  "description": "",
  "keyword": "Scenario"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027Passwd\u0027]\"}\n  (Session info: chrome\u003d134.0.6998.177)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-01APIF7\u0027, ip: \u0027192.168.1.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 134.0.6998.177, chrome: {chromedriverVersion: 134.0.6998.165 (fd886e2cb29..., userDataDir: C:\\Users\\dell\\AppData\\Local...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53681}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 28c817405517f765863c4d96d6785b79\n*** Element info: {Using\u003dname, value\u003dPasswd}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy17.sendKeys(Unknown Source)\r\n\tat PageObject.LoginPage.enterPassword(LoginPage.java:39)\r\n\tat StepDefinition.stepDefinition.user_enter_Password_as(stepDefinition.java:45)\r\n\tat ✽.User enter Password as \"Testabc@123\"(./Features/Login_and_compose.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click on Next buttonTwo",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.click_on_Next_buttonTwo()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "page title should be \"Inbox - usertest10010@gmail.com - Gmail\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Compose new Email",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User click on \"Compose\" button",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.user_click_on_button(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"PageObject.composeEmail.composeButton()\" because \"this.cmpEmail\" is null\r\n\tat StepDefinition.stepDefinition.user_click_on_button(stepDefinition.java:70)\r\n\tat ✽.User click on \"Compose\" button(./Features/Login_and_compose.feature:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The \"New Message\" pop-up should appear",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.the_pop_up_should_appear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sends an email to \"usertest10010@gmail.com\" with subject \"Incubyte\" and email body \"QA test for Incubyte\"",
  "keyword": "When "
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