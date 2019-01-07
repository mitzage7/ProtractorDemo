describe("Actions demo", function () {
  it("Open Posse website", function () {
    browser.get("http://posse.com/");
    browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {

      //element.all(by.css("div[ng-mouseover='onSearchResultOver(searchResult)']"));
      expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
      element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
      element(by.css("a[hg-ref*='London/River Island']")).click().then(function () {
        browser.getTitle().then(function (title) {
          console.log(title + "Title of the page before switching.");
        });
        browser.getAllWindowHandles().then(function (handles) {
          browser.switchTo().window(handles[1]);
          browser.getTitle().then(function (title) {
            console.log(title + "Title of the page after switching.");
          });
          browser.switchTo().window(handles[0]);
          browser.getTitle().then(function (title) {
            console.log(title + "Title of the 3rd page after switching.");
          });
        });
      });
    });
  });
});