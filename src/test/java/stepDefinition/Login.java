package stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.sf.cglib.proxy.CallbackHelper;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class Login {
    WebDriver driver = null;
    @Given("^User is on the \"([^\"]*)\" page on URL \"([^\"]*)\"$")
    public void user_is_on_the_page_on_URL(String pageName, String url) throws Throwable {
        System.setProperty("webdriver.chrome.driver","/opt/google/chromedriver_linux64/chromedriver");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        driver.get(url);
        System.out.println("Iam on :"+ pageName);
    }

    @When("^User fill in \"([^\"]*)\" with \"([^\"]*)\"$")
    public void user_fill_in_with(String fieldName, String value) throws Throwable {
        if (fieldName.equals("Username")){
            driver.findElement(By.xpath("//input[@id='username']")).sendKeys(value);
        }
        else if (fieldName.equals("Password")){
            driver.findElement(By.xpath("//input[@name='pwd']")).sendKeys(value);
        }
    }

    @When("^User click on the \"([^\"]*)\" button$")
    public void user_click_on_the_button(String arg1) throws Throwable {
        driver.findElement(By.xpath("//a[@id='loginButton']")).click();
        driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
    }

    @Then("^User should be on the \"([^\"]*)\" page on URL \"([^\"]*)\"$")
    public void user_should_be_on_the_page_on_URL(String pagename, String url) throws Throwable {
        String currentURL = driver.getCurrentUrl();
        Assert.assertEquals(url,currentURL);
        System.out.printf(pagename);
    }

    @Then("^User should see \"([^\"]*)\" message$")
    public void user_should_see_message(String welcomemessage) throws Throwable {
        String welcomeText = driver.findElement(By.xpath("//td[@class='pagetitle']")).getText();

        if (welcomeText.startsWith(welcomemessage)){
            Assert.assertTrue(true);
        }
        else
            Assert.assertTrue(false);
    }

    @Then("^User should see the \"([^\"]*)\" button$")
    public void user_should_see_the_button(String butnText) throws Throwable {
        Assert.assertTrue(driver.findElement(By.xpath("//a[@id='logoutLink']")).isDisplayed());
        String signOutBtnText = driver.findElement(By.xpath("//a[@id='logoutLink']")).getText();
        Assert.assertEquals(butnText,signOutBtnText);
    }

    @Then("^User close the browser$")
    public void user_close_the_browser() throws Throwable {
        driver.close();
    }

    @When("^User fill in login credentials with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_fill_in_login_credentials_with_and(String email, String password) throws Throwable {
        driver.findElement(By.xpath("//input[@id='username']")).sendKeys(email);
        driver.findElement(By.xpath("//input[@name='pwd']")).sendKeys(password);
    }

    @Then("^User should see error \"([^\"]*)\" message$")
    public void user_should_see_error_message(String welcomemessage) throws Throwable {
        String welcomeText = driver.findElement(By.xpath("//*[@id='ErrorsTable']/tbody/tr/td[2]/table/tbody/tr/td/span")).getText();
        System.out.println(welcomeText);
        if (welcomeText.startsWith(welcomemessage)){
            Assert.assertTrue(true);
        }
        else
            Assert.assertTrue(false);
    }
}