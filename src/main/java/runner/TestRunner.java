package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "/Users/yemioluv/eclipse-workspace/com.cornerstoneDemo/src/main/java/Feature",
		glue= {"stepDef"}, //path of the step definition files
		format= {"pretty", "html:test-outcome"},
		monochrome = true, //display the console in a proper readable format
				//Strict = true, //it will check if any step is not defined in step definition
				dryRun = false //to check the mapping is proper between feature file and step definition file
		
		
		
		)


public class TestRunner {

}
