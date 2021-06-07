package pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import util.TestBase;
import util.WaitHelper;

public class HomePage extends TestBase {

	WaitHelper waitHelper;

	@FindBy(xpath = "//button[@id=\"quick-search-expand\"]")
	WebElement searchLink;

	@FindBy(id = "nav-quick-search")
	WebElement searchField;

	@FindBy(xpath = "//img[@title=\"Tiered Wire Basket\"]")
	WebElement product;

	@FindBy(xpath = "//input[@value=\"Add to Cart\"]")
	WebElement addToCart;

	@FindBy(xpath = "//a[@class=\"button button--primary\"]")
	WebElement proceedToCheckout;

	@FindBy(xpath = "//input[@name=\"email\"]")
	WebElement emailAddress;
	
	@FindBy(xpath = "//label[@for=\"privacyPolicy\"]")
	WebElement agreePolicy;
	
	
	@FindBy(xpath = "//button[@id=\"checkout-customer-continue\"]")
	WebElement continueAsGuest;
	
	
	@FindBy(xpath = "//input[@id=\"firstNameInput\"]")
	WebElement firstName;
	

	public HomePage() {
		PageFactory.initElements(driver, this);
		waitHelper = new WaitHelper(driver);

	}

	public void clickSearchLink() {
		searchLink.click();
	}

	public void enterSearchWord(String product) {
		searchField.sendKeys(product);
	}

	public void addProduct() {

		// waitHelper.WaitForElement(product, 60);
		waitHelper.WaitForElement(product, 30);

		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", product);
	}

	public void addProductToCart() {
		waitHelper.WaitForElement(addToCart, 60);
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", addToCart);
	}

	public void proceedToCheckout() {

		waitHelper.WaitForElement(proceedToCheckout, 60);
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", proceedToCheckout);
	}

	public void enterEmail(String email) {
		waitHelper.WaitForElement(emailAddress, 60);
		emailAddress.sendKeys(email);
	}
	
	public void clickAgreePolicy() {
		waitHelper.WaitForElement(agreePolicy, 30);
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", agreePolicy);
	}
	
	public void clickContinueAsGuest() {
		waitHelper.WaitForElement(continueAsGuest, 30);
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", continueAsGuest);
	}
	
	public void enterFirstName() {
		waitHelper.WaitForElement(firstName, 30);
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", firstName);
	}
	
	
	

}
