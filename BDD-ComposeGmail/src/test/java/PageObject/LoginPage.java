package PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	WebDriver ldriver;
	
	public LoginPage(WebDriver rdriver) {
		this.ldriver=rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	@FindBy(id="identifierId")
	WebElement email;
	
	@FindBy(xpath="//span[normalize-space()='Next']")
	WebElement Nextbtn1;
	
	@FindBy(name="Passwd")
	WebElement password;
	
	@FindBy(xpath="//*[@id=\"passwordNext\"]/div/button/span")
	WebElement Nextbtn2;
	
	@FindBy(xpath="//div[contains(text(), 'Compose')]")
    WebElement ComposeBtn;
	
	@FindBy(xpath="//span[contains(text(), 'New Message')]")
	WebElement NewMessagePopup;
	
	@FindBy(id=":d8")
	WebElement To;
	
	@FindBy(id=":61")
	WebElement Subject;
	
	@FindBy(id="id=:4m")
	WebElement emailBody;
	
	@FindBy(id="id=:6c")
	WebElement sendButton;
	
	@FindBy(xpath="//a[@aria-label='Sent']")
	WebElement SentButtoon;
	
	public void enterEmail(String emailAddress) {
		email.sendKeys(emailAddress);
		
	}
	
	public void clickonNextBtn1() {
		Nextbtn1.click();
	}
	
	public void enterPassword(String pwd) {
		password.sendKeys(pwd);
	}
	
	public void clickonNextBtn2() {
		Nextbtn2.click();
	}
	public void composeButton() {
		ComposeBtn.click();
	
	}
	
	public void NewMsgPopUp() {
		NewMessagePopup.getText();
	}
	
	public void ToinputField(String toInputField) {
		To.sendKeys(toInputField);
		
	}
	
	public void subject(String sub) {
		Subject.sendKeys(sub);
	}
	
	public void EmailBody(String emlBody) {
		emailBody.sendKeys(emlBody);
	}
	
	public void SendBtn() {
		sendButton.click();
	}


	public void SentBtn() {
		SentButtoon.click();
	}
	
}
