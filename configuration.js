exports.config = {
  directConnect: true,
  specs: ["PracticeExercise.js"],

  onPrepare: function () {
    var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
    var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    );
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));
  },
  suites: {
    SmokeSuite: ['Dropdowns.js', 'ChainLocators.js'],
    RegressionSuite: ['ElementBasics.js', 'Dropdowns.js', 'ChainLocators.js']
  },
  jasmineNodeOpts: {
    showColors: true,
  }
};