package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Login1.feature",
glue= {"stepdef"},
strict = true,//it checks whether all steps are implement
dryRun = false,//mapping each and every step to step-defnitions
monochrome = true,//readable output in console
tags = {"@smoke"},
plugin = { "pretty","de.monochromata.cucumber.report.PrettyReports:target/cucumber"}
//plugin = {"pretty","html:reports/test-report"}//format(report generation)
)
public class TestRunner {

}
