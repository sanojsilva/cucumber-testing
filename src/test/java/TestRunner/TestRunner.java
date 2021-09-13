package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "/home/sanoj/javaprogrammes/BDD/src/test/resources/features/ValidLogin.feature",
        glue={"stepDefinition"},
        format= {"pretty","html:test-output_1",
                "json:target/cucumber-reports/CucumberTestReport.json"},
        plugin={"pretty:target/cucumber-htmlreport.text", "json:target/cucmber-report.json"},
        monochrome = true

)
public class TestRunner {
}
