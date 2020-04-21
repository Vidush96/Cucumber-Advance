package stepdef;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import generic.BrowserFactory;
import generic.FileManager;
import generic.ScreenShot;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pom.Login_Page;

public class Steps1 {

	WebDriver driver;
	FileManager fm = new FileManager();
	BrowserFactory bff = new BrowserFactory();
	Login_Page lp;

	@Before(order = 0) // global hooks
	public void setUp() {
		// driver=new BrowserFactory().getBrowser("chrome");
		driver = bff.getBrowser("chrome");
		driver.get(fm.getApplicationUrl());
		driver.manage().timeouts().implicitlyWait(fm.getImplicityWait(), TimeUnit.SECONDS);
		lp = new Login_Page(driver);
	}

	@After(order = 0)
	public void tearDown(Scenario scenario)// global hooks
	{
		if (scenario.isFailed())// class that is responsible to get status of scenarios
		{
			System.out.println();
			TakesScreenshot ts = (TakesScreenshot) driver;
			byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);

			scenario.embed(screenshot, "Image/PNG", scenario.getName());

		}
		driver.quit();
	}

	@Before("@regression or @ft") // conditional hooks
	public void mobileSetUp() {
		System.out.println("execute in mobile environement");
	}

	@After("@regression or @ft") // conditional hooks
	public void mobiletearDown() {
		System.out.println("close the mobile environment");
	}

	@Given("user is on Login Page")
	public void user_is_on_Login_Page() {

		System.out.println("user on actitime login page");
	}

	@When("user enters {string} and {string}")
	public void user_enters_and(String uname, String password) {
		lp.setUsername(uname);
		lp.setPassword(password);
	}

	@When("clicks on Login button")
	public void clicks_on_Login_button() {

		lp.clickLogin();
	}

	@Then("verify home page is displayed {string}")
	public void verify_home_page_is_displayed(String expected_result) {
		lp.verifyTitle(10, "Enter");
		String atitle = driver.getTitle();
		Assert.assertEquals(expected_result, atitle);
		driver.close();
	}

	@When("user enters valid username {string} and valid password {string}")
	public void user_enters_valid_username_and_valid_password(String uname, String password)
			throws InterruptedException {

		lp.setUsername(uname);
		lp.setPassword(password);

	}

	@Then("Home page should be displayed")
	public void home_page_should_be_displayed() {
		lp.verifyTitle(10, "abcd");
		String atitle = driver.getTitle();
		Assert.assertEquals("actiTIME - Enter Time-Track", atitle);
	}

	@Given("user is on home page")
	public void user_is_on_home_page() {
		System.out.println("user is on home page");
	}

	@When("user search for product")
	public void user_search_for_product(io.cucumber.datatable.DataTable dataTable) {
		List<Map<String, String>> data = dataTable.asMaps(String.class, String.class);

		String val = data.get(2).get("product");
		String val1 = data.get(2).get("quantity");
		System.out.println(val + "-" + val1);

	}

	@Then("- page should be diplayed")
	public void page_should_be_diplayed() {
		System.out.println("shoes page displayed");
	}

}
