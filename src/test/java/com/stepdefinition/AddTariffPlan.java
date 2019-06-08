package com.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddTariffPlan {
	static WebDriver driver;

@Given("The user is in the add tarrif page")
public void the_user_is_in_the_add_tarrif_page() {
	System.setProperty("webdriver.chrome.driver",
			"C:\\Users\\M.preethi\\Desktop\\myselenium\\Cucumber\\diver\\chromedriver.exe");
	driver=new ChromeDriver();
	driver.get("http://demo.guru99.com/telecom/addtariffplans.php");
	driver.manage().window().maximize();

}

@When("The user enter  valid plan details {string},{string},{string},{string},{string},{string},{string}")
public void the_user_enter_valid_plan_details(String MonthlyRental, String FreeLocalMinutes, String FreeInternationalMinutes, String FreeSMSPack, String LocalPerMinutesCharges, String InternationalPerMinutesCharges, String SMSPerCharges) {
	 driver.findElement(By.id("rental1")).sendKeys(MonthlyRental);
	   driver.findElement(By.name("local_minutes")).sendKeys(FreeLocalMinutes);
	   driver.findElement(By.id("inter_minutes")).sendKeys(FreeInternationalMinutes);
	   driver.findElement(By.id("sms_pack")).sendKeys(FreeSMSPack);
	   driver.findElement(By.id("minutes_charges")).sendKeys(LocalPerMinutesCharges);
	   driver.findElement(By.id("inter_charges")).sendKeys(InternationalPerMinutesCharges);
	   driver.findElement(By.id("sms_charges")).sendKeys(SMSPerCharges);
}

@When("The user click the submit button")
public void the_user_click_the_submit_button() {
	driver.findElement(By.name("submit")).click();

}

@Then("The user should see the success message")
public void the_user_should_see_the_success_message() {
	Assert.assertTrue(driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
    }


	
}
