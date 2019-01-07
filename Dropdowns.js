describe("Dropdowns demo", function () {
  function Calc(a, b, c) {
    element(by.model("first")).sendKeys(a);
    element(by.model("second")).sendKeys(b);

    element.all(by.tagName('option')).each(function (item) {
      item.getAttribute("value").then(function (values) {
        if (values == c) {
          item.click();
        }
      });
    });

    element(by.id("gobutton")).click();
  }

  it("Open Angular js website", function () {
    browser.get("https://juliemr.github.io/protractor-demo/");

    Calc(3, 5, "MULTIPLICATION");
    Calc(3, 5, "DIVISION");
    Calc(3, 5, "DIVISION");
    Calc(3, 5, "ADDITION");

    element.all(by.repeater('result in memory')).each(function (item) {
      item.element(by.css("td:nth-child(3)")).getText().then(function (text) {
        console.log(text);
      });
    });
  });
});