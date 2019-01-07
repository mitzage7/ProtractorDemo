function pageObject() {

  this.firstInput = element(by.model("first"));
  this.secondInput = element(by.model("second"));
  this.goButton = element(by.id("gobutton"));
  this.result = element(by.css("h2[class='ng-binding']"));

  this.getURL = function () {
    browser.get("https://juliemr.github.io/protractor-demo/");
  };
};

module.exports = new pageObject();
//a.getModel();
//console.log(a.engine);