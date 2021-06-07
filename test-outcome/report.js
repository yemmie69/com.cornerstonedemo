$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Product.feature");
formatter.feature({
  "line": 1,
  "name": "Product checkout",
  "description": "",
  "id": "product-checkout",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test that product can be search, added to cart and checkout",
  "description": "",
  "id": "product-checkout;test-that-product-can-be-search,-added-to-cart-and-checkout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigate to https://cornerstone-light-demo.mybigcommerce.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user search for a product",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user adds the product to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user complete the checkout process with \"\u003ccredit card\u003e\"  \"\u003cexpiry date\u003e\" and \"\u003cexpiry date\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "product-checkout;test-that-product-can-be-search,-added-to-cart-and-checkout;",
  "rows": [
    {
      "cells": [
        "credit card",
        "expiry date",
        "expiry date"
      ],
      "line": 10,
      "id": "product-checkout;test-that-product-can-be-search,-added-to-cart-and-checkout;;1"
    },
    {
      "cells": [
        "4111 1111 1111 1111",
        "10/21",
        "123"
      ],
      "line": 11,
      "id": "product-checkout;test-that-product-can-be-search,-added-to-cart-and-checkout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Test that product can be search, added to cart and checkout",
  "description": "",
  "id": "product-checkout;test-that-product-can-be-search,-added-to-cart-and-checkout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigate to https://cornerstone-light-demo.mybigcommerce.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user search for a product",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user adds the product to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user complete the checkout process with \"4111 1111 1111 1111\"  \"10/21\" and \"10/21\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProductSteps.user_navigate_to_https_cornerstone_light_demo_mybigcommerce_com()"
});
formatter.result({
  "duration": 7543614425,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.user_search_for_a_product()"
});
formatter.result({
  "duration": 342459942,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.user_adds_the_product_to_the_cart()"
});
formatter.result({
  "duration": 127968570400,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: name\u003d\"orderComment\"\u0027 (tried for 120 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat util.WaitHelper.WaitForElement(WaitHelper.java:19)\n\tat pages.ShippingPage.enterComment(ShippingPage.java:96)\n\tat stepDef.ProductSteps.user_adds_the_product_to_the_cart(ProductSteps.java:47)\n\tat ✽.And user adds the product to the cart(Product.feature:6)\nCaused by: org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression name\u003d\"orderComment\" because of the following error:\nTypeError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The result is not a node set, and therefore cannot be converted to the desired type.\n  (Session info: chrome\u003d91.0.4472.77)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Yemis-Air.broadband\u0027, ip: \u0027fd3e:f41c:7403:0:b90a:588f:6ba:1e49%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.77, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: /var/folders/4r/svs2hp7x42n...}, goog:chromeOptions: {debuggerAddress: localhost:59583}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b78afcbb83185402ad4d5b4a79994677\n*** Element info: {Using\u003dxpath, value\u003dname\u003d\"orderComment\"}\n\tat sun.reflect.GeneratedConstructorAccessor14.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy15.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat util.WaitHelper.WaitForElement(WaitHelper.java:19)\n\tat pages.ShippingPage.enterComment(ShippingPage.java:96)\n\tat stepDef.ProductSteps.user_adds_the_product_to_the_cart(ProductSteps.java:47)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "4111 1111 1111 1111",
      "offset": 41
    },
    {
      "val": "10/21",
      "offset": 64
    },
    {
      "val": "10/21",
      "offset": 76
    }
  ],
  "location": "ProductSteps.user_complete_the_checkout_process_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
});