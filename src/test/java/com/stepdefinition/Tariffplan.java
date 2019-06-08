package com.stepdefinition;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class Tariffplan {
	static WebDriver driver;
	

@Given("The user navigates to add tariff plan")
public void the_user_navigates_to_add_tariff_plan() {
	System.setProperty("webdriver.chrome.driver",
			"C:\\Users\\M.preethi\\Desktop\\myselenium\\Cucumber\\diver\\chromedriver.exe");
	driver=new ChromeDriver();
	driver.get("http://demo.guru99.com/telecom/addtariffplans.php");
	driver.manage().window().maximize();
}


  
  
  

@When("The user fill the valid tariff plandetails")
public void the_user_fill_the_valid_tariff_plandetails(DataTable plandetails ) {
	Map<String, String> plandetailsasmap = plandetails.asMap(String.class, String.class);
   driver.findElement(By.id("rental1")).sendKeys(plandetailsasmap.get("Monthly Rental"));;
   driver.findElement(By.name("local_minutes")).sendKeys(plandetailsasmap.get("Free Local Minutes"));;
   driver.findElement(By.id("inter_minutes")).sendKeys(plandetailsasmap.get("Free International Minutes"));;
   driver.findElement(By.id("sms_pack")).sendKeys(plandetailsasmap.get("Free SMS Pack"));;
   driver.findElement(By.id("minutes_charges")).sendKeys(plandetailsasmap.get("Local Per Minutes Charges"));;
   driver.findElement(By.id("inter_charges")).sendKeys(plandetailsasmap.get("International Per Minutes Charges"));;
   driver.findElement(By.id("sms_charges")).sendKeys(plandetailsasmap.get("SMS Per Charges"));;
    
}

@When("The user click submit button")
public void the_user_click_submit_button() {
    driver.findElement(By.name("submit")).click();
}

@Then("Ther user shouls see the cogratulation you add tariff plan")
public void ther_user_shouls_see_the_cogratulation_you_add_tariff_plan() {
	Assert.assertTrue(driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
}}
	