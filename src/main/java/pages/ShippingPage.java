package pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import util.TestBase;
import util.WaitHelper;

public class ShippingPage extends TestBase {
	WaitHelper waitHelper;

	@FindBy(xpath = "//input[@id=\"firstNameInput\"]")

	WebElement firstName;

	@FindBy(xpath = "//input[@id=\"lastNameInput\"]")

	WebElement lastName;

	@FindBy(xpath = "//input[@id=\"addressLine1Input\"]")

	WebElement address;

	@FindBy(xpath = "//input[@id=\"cityInput\"]")

	WebElement city;

	@FindBy(xpath = "//input[@id=\"postCodeInput\"]")

	WebElement postalCode;

	@FindBy(xpath = "//input[@id=\"phoneInput\"]")

	WebElement phoneNumber;
	
	@FindBy(xpath = "name=\"orderComment\"")
	WebElement comment;

	@FindBy(xpath = "//button[@id=\"checkout-shipping-continue\"]")   ////button[@id="checkout-shipping-continue"]

	WebElement continueButton;
	
	@FindBy(xpath = "//button[@type=\"submit\"]") 
	WebElement submitBtn;

//Initializing the Page Objects
	public ShippingPage() {
		PageFactory.initElements(driver, this);

		waitHelper = new WaitHelper(driver);

	}

	public void enterFirstName() throws InterruptedException {
		waitHelper.WaitForElement(firstName, 60);
		firstName.sendKeys("Tester1");

	}

	public void enterLastName() {
		waitHelper.WaitForElement(lastName, 60);

		lastName.sendKeys("Tester1");

	}

	public void enterAddress() {
		waitHelper.WaitForElement(address, 60);

		address.sendKeys("17,Rainham Close");

	}

	public void entercity() {
		waitHelper.WaitForElement(city, 60);

		city.sendKeys("17,Rainham Close");

	}

	public void enterPostalCode(String postcode) {
		waitHelper.WaitForElement(postalCode, 60);
		postalCode.sendKeys(postcode);

	}

	public void enterPhoneNumber(String phonenumber) {
		waitHelper.WaitForElement(phoneNumber, 120);

		phoneNumber.sendKeys(phonenumber);
	}
	
	public void enterComment(String ordercomment) {
		waitHelper.WaitForElement(comment, 120);

		comment.sendKeys(ordercomment);
	}
	public void clickContinueBtn() {
		waitHelper.WaitForElement(continueButton, 60);
		//continueButton.click();
		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", continueButton);
		
	}
	
	public void clickSubmitBtn() {
		waitHelper.WaitForElement(submitBtn, 60);
		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", submitBtn);
		//submitBtn.click();
		
	}
	
	
}
