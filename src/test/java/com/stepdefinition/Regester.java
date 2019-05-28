package com.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Regester {
	static WebDriver driver;
	
	
	@Given("The user is in the telecom homepage")
	public void the_user_is_in_the_telecom_homepage() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\M.preethi\\Desktop\\myselenium\\Cucumber\\diver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		driver.manage().window().maximize();
	}

	@Given("The user click on add customer")
	public void the_user_click_on_add_customer() {
		driver.findElement(By.xpath("//a[text()='Add Customer'][1]")).click();
		driver.findElement(By.id("email")).sendKeys("hello");
		}

	@When("The user is filling all the details")
	public void the_user_is_filling_all_the_details() {
		driver.findElement(By.xpath("//label[@for='done']")).click();
		driver.findElement(By.id("fname")).sendKeys("Hari");
		driver.findElement(By.id("lname")).sendKeys("Prasath");
		driver.findElement(By.id("email")).sendKeys("harimech18@gmail.com");
		driver.findElement(By.name("addr")).sendKeys("Erode");
		driver.findElement(By.id("telephoneno")).sendKeys("8754649406");
		
		}

	@When("The user click on submit button")
	public void the_user_click_on_submit_button() {
		driver.findElement(By.name("submit")).click();
		
	    }

	@Then("The user should be displayed the customer id")
	public void the_user_should_be_displayed_the_customer_id() {
	   
		Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	}


}

