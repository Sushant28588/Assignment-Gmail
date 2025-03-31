package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features=".//Features/Login_and_compose.feature",
		glue="StepDefinition",
		dryRun=false,
		plugin= {"pretty", "html:taget/cucumber-reports/reports1.html"}
		)


public class TestRun {

}
