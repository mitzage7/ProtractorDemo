describe("Protractor baby steps", function () {

  function selectItems(product) {
    element.all(by.tagName("app-card")).each(function (item) {
      item.element(by.css("h4 a")).getText().then(function (text) {
        if (text == product) {
          item.element(by.css("button[class*='btn-info']")).click();
        }
      });
    });
  }

  it("Open Browser", function () {
    browser.get("https://qaclickacademy.github.io/protocommerce/");
    element(by.name("name")).click();
    element(by.css("input[name='email']")).click();
    element(by.name("name")).clear().then(function () {
      element(by.css("[class='alert alert-danger']")).getText().then(function (text) {
        console.log(text);
      });
      element(by.name("name")).sendKeys("MihaiFratila");
      element(by.css("input[name='email']")).sendKeys("fmihai2004@yahoo.com");
      element(by.id("exampleInputPassword1")).sendKeys("password123");
      element(by.css("input[type='checkbox']")).click();
      element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
      element.all(by.name("inlineRadioOptions")).first().click();
      element(by.buttonText("Submit")).click().then(function () {
        element(by.css("div[class*='alert-success']")).getText().then(function (text) {
          console.log(text);
          element(by.name("name")).clear().then(function () {
            element(by.name("name")).sendKeys("M").then(function () {
              element(by.css("[class='alert alert-danger']")).getText().then(function (text) {
                console.log(text);
              });
              element(by.name("name")).clear().sendKeys("Mihai").then(function () {
                element.all(by.css("[class='alert alert-danger']")).count().then(function (value) {
                  expect(value).toEqual(0);
                });
              });
            });
          });
        });
      });
    });
  });

  it("Case 1 - Open Browser - Go to shop", function () {
    browser.get("https://qaclickacademy.github.io/protocommerce/");
    element(by.linkText("Shop")).click();
    selectItems("Samsung Note 8");
    selectItems("iphone X");
    element(by.partialLinkText('Checkout')).getText().then(function (text) {
      var substring = text.split("(");
      var numberValue = Number(substring[1].trim().charAt(0));
      expect(numberValue).toBe(2);
      element(by.partialLinkText("Checkout")).click();
      element.all(by.css("tr td:nth-child(4) strong")).get(0).getText().then(function (text) {
        var onlyTheFirstNumber = text.split("₹.");
        var newFirstNumberValue = Number(onlyTheFirstNumber[1].trim());
        element.all(by.css("tr td:nth-child(4) strong")).get(1).getText().then(function (text) {
          var onlyTheSecondNumber = text.split("₹.");
          var newSecondNumberValue = Number(onlyTheSecondNumber[1].trim());
          element(by.css("tr td:nth-child(5) h3 strong")).getText().then(function (total) {
            var onlyTheTotalNumber = total.split("₹.");
            var newTotalNumberValue = Number(onlyTheTotalNumber[1].trim());
            var sum = newFirstNumberValue + newSecondNumberValue;
            expect(sum).toEqual(newTotalNumberValue);
          });
        });
      });
    });
  });

  it("Case 2 - Open Browser - Go to shop", function () {
    browser.get("https://qaclickacademy.github.io/protocommerce/");
    element(by.linkText("Shop")).click();
    selectItems("Samsung Note 8");
    selectItems("iphone X");
    element(by.partialLinkText('Checkout')).getText().then(function (text) {
      var substring = text.split("(");
      var numberValue = Number(substring[1].trim().charAt(0));
      expect(numberValue).toBe(2);
      element(by.partialLinkText("Checkout")).click();
      var addedSum = 0;
      var totalSum = 0;
      element.all(by.css("tr td:nth-child(4) strong")).each(function (row) {
        row.getText().then(function (text) {
          var onlyTheNumber = text.split("₹.");
          var newNumberValue = Number(onlyTheNumber[1].trim());
          addedSum = addedSum + newNumberValue;
        });
      });
      element(by.css("tr td:nth-child(5) h3 strong")).getText().then(function (total) {
        var onlyTheTotalNumber = total.split("₹.");
        var newTotalNumberValue = Number(onlyTheTotalNumber[1].trim());
        totalSum = newTotalNumberValue;
      });
      expect(addedSum).toEqual(totalSum);
    });
  });

});