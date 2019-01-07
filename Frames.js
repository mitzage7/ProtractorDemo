describe("Frames steps", function () {
  it("Open non-angular website alerts", function () {
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
    browser.get("http://www.qaclickacademy.com/practice.php");
    browser.switchTo().frame("courses-iframe");
    element(by.css("a[href*='sign_in']")).getText().then(function (text) {
      console.log(text);
    });
  });
});