package StepDefinition;

import java.util.Arrays;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import PageObject.LoginPage;
import cucumber.api.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;

public class stepDefinition {

	public WebDriver driver;
	public LoginPage loginpg;

	@Given("User Launch the Chrome Browser")
	public void user_Launch_the_Chrome_Browser() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(33, TimeUnit.SECONDS);
		WebDriverWait wait = new WebDriverWait(driver,33);
		loginpg = new LoginPage(driver);
	}

	@When("User the URLs {string}")
	public void user_the_URLs(String url) {
		driver.get(url);    	
	}

	@When("User enter Emails as {string}")
	public void user_enter_Emails_as(String email) {
		loginpg.enterEmail(email);
	}

	@Then("Click on Next buttonOne")
	public void click_on_Next_buttonOne() throws InterruptedException {
           loginpg.clickonNextBtn1();
           Thread.sleep(1000);
	}
	

	@Then("User enter Password as {string}")
	public void user_enter_Password_as(String pswd) {
		loginpg.enterPassword(pswd);
	}


	@Then("Click on Next buttonTwo")
	public void click_on_Next_buttonTwo() {
	     loginpg.clickonNextBtn2();
	}
	
	@Given("User click on Compose button")
	public void user_click_on_Compose_button() {
		loginpg.composeButton();	
	}

	@And("The {string} pop-up should appear")
	public void the_pop_up_should_appear(String popUp) {
		loginpg.NewMsgPopUp();
	}

	@When("User sends an email to {string} with subject {string} and email body {string}")
	public void user_sends_an_email_to_with_subject_and_email_body(String email, String sub, String eBody) {

			loginpg.ToinputField(email);
		loginpg.subject(sub);
		loginpg.EmailBody(eBody);
		}

	@Then("The email appears in the sent folder of gmail with subject {string}")
	public void the_email_appears_in_the_sent_folder_of_gmail_with_subject(String string) {
		loginpg.SentBtn();
	}

}
