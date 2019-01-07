describe("Protractor synchronization steps", function () {
  it("Open Non-Angular js website - synchronization feature", function () {
    browser.ignoreSynchronization = true;
    browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
    element(by.css("a[href*='loadAjax']")).click();
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.invisibilityOf(element(by.id("loader"))), 8000);
    element(by.id("results")).getText().then(function (text) {
      console.log(text);
    });
  });
});