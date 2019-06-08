package com.stepdefinition;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class Regester {
	static WebDriver driver;

	@Given("The user navigate to add customer page")
	public void the_user_navigate_to_add_customer_page() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\M.preethi\\Desktop\\myselenium\\Cucumber\\diver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		driver.manage().window().maximize();
		driver.findElement(By.xpath("//a[text()='Add Customer'][1]")).click();

	}

	@When("The user is fill in the valid details")
	public void the_user_is_fill_in_the_valid_details(DataTable CustomerDetails) {
		Map<String, String> CustomerDetails1 = CustomerDetails.asMap(String.class, String.class);
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys(CustomerDetails1.get("FirstName"));
		driver.findElement(By.id("lname")).sendKeys(CustomerDetails1.get("LastName"));
		driver.findElement(By.id("email")).sendKeys(CustomerDetails1.get("Email"));
		driver.findElement(By.name("addr")).sendKeys(CustomerDetails1.get("Adress"));
		driver.findElement(By.id("telephoneno")).sendKeys(CustomerDetails1.get("MobilNumber"));

	}

	@When("The user click the subit button")
	public void the_user_click_the_subit_button() {
		driver.findElement(By.name("submit")).click();
	}

	@Then("The user should see the customer id genrated")
	public void the_user_should_see_the_customer_id_genrated() {
		Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	}

}
