describe("Protractor baby steps", function() {
  it("Open Browser", function() {
    browser.get("https://angularjs.org");

    browser.get("https://juliemr.github.io/protractor-demo/").then(function() {
      console.log("I am the last step to execute");
    });
  });

  it("Close Browser", function() {
    // insert code here
  });
});
