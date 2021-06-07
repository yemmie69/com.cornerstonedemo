package stepDef;

import cucumber.api.java.en.*;
import pages.HomePage;
import pages.ShippingPage;
import util.TestBase;
import util.WaitHelper;

public class ProductSteps extends TestBase {
	
	HomePage homePage;
	ShippingPage  shippingPage;
	
	WaitHelper waitHelper;

	@Given("^user navigate to https://cornerstone-light-demo\\.mybigcommerce\\.com$")
	public void user_navigate_to_https_cornerstone_light_demo_mybigcommerce_com() throws Throwable {
		TestBase.initialization();

	}

	@When("^user search for a product$")
	public void user_search_for_a_product() throws Throwable {
		homePage = new HomePage();
		homePage.clickSearchLink();
		homePage.enterSearchWord("Tiered Wire Basket");
	}

	@When("^user adds the product to the cart$")
	public void user_adds_the_product_to_the_cart() throws Throwable {
		homePage.addProduct();
		homePage.addProductToCart();
		homePage.proceedToCheckout();

		homePage.enterEmail("yemi@bbc.com");
		homePage.clickAgreePolicy();
		homePage.clickContinueAsGuest();
		
		shippingPage = new ShippingPage();

		shippingPage.enterFirstName();
		shippingPage.enterLastName();
		shippingPage.enterAddress();
		shippingPage.entercity();
		shippingPage.enterPostalCode("se12jj");
		shippingPage.enterPhoneNumber("0789970550");
		shippingPage.enterComment("DONE");
		shippingPage.clickContinueBtn();

	}

	@Then("^user complete the checkout process with \"([^\"]*)\"  \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_complete_the_checkout_process_with_and(String arg1, String arg2, String arg3) throws Throwable {
		
		
	}

}
