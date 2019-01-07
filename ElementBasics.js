describe("Protractor Element demo", function () {
  var using = require('jasmine-data-provider');
  var obj = require("./jsObjectDemo.js");
  var data = require("./data.js");

  beforeEach(function () {
    obj.getURL();
  });

  using(data.DataDriven, function (data, description) {

    it("Testing calculator functionality " + description, function () {
      obj.firstInput.sendKeys(data.firstInput);
      obj.secondInput.sendKeys(data.secondInput);
      obj.goButton.click();
      expect(obj.result.getText()).toBe(data.result);
      obj.result.getText().then(function (textValue) {
        console.log(textValue);
      });
    });

  });

  afterEach(function () {
    console.log("Test is completed");
  });

});