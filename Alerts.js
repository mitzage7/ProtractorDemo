describe("Alert steps", function () {
  it("Open non-angular website alerts", function () {
    browser.ignoreSynchronization = true;
    browser.get("http://www.qaclickacademy.com/practice.php");
    element(by.id("confirmbtn")).click();
    browser.switchTo().alert().accept();
  });
});