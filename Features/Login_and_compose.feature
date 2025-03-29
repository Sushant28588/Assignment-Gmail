Feature: Login and Compose


Scenario: Successfull login with valid credentials
Given User Launch the Chrome Browser
When User the URLs "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AXH0vVu2Zytpgj5lXCZXq2BzTZyjJCwvIUPCEQqDvQJwvIkqSy86L6uPHOLn0-NcepUu9L3Z5yTEKA&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1697329736%3A1743076743702809#inbox"
And User enter Emails as "usertest10010@gmail.com" 
Then Click on Next buttonOne
And User enter Password as "Testabc@123"
Then Click on Next buttonTwo

Scenario: Compose new Email
Given User click on Compose button
When The "New Message" pop-up should appear
And User sends an email to "usertest10010@gmail.com" with subject "Incubyte" and email body "QA test for Incubyte"
Then The email appears in the sent folder of gmail with subject "Incubyte"