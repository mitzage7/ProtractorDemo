describe("Chain locators demo", function () {
  var obj = require("./jsObjectDemo.js");

  it("Open Angular js website", function () {
    // Repeater, chain locators and CSS for identical tags
    browser.get("https://juliemr.github.io/protractor-demo/");
    obj.firstInput.sendKeys("3");
    obj.secondInput.sendKeys("5");
    obj.goButton.click();
    
    element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (text) {
      console.log(text);
    });
  });
});