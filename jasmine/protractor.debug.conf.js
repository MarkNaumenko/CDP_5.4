/* global browser */
'use strict';
require('dotenv').config();
const TestHelper = require('cms-acceptance-tests');


const config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  framework: 'jasmine2',
  multiCapabilities: [
    {
      name: 'normal',
      browserName: 'chrome',
      maxInstances: 2,
      shardTestFiles: true,
      chromeOptions: {
        args: ['--window-size=1024,768', '--disable-infobars']
      }
    }
    ,
    {
      name: 'mobile',
      browserName: 'chrome',
      maxInstances: 2,
      shardTestFiles: true,
      chromeOptions: {
        args: ['--window-size=391,760', '--disable-infobars'],
        mobileEmulation: {
          'deviceName': 'iPhone 6'
        }
      }
    }
  ],

  specs: [
    './*.e2e.js'
  ],

  baseUrl: 'http://54.72.11.81:80',

  onPrepare: function () {
    browser.runProfiles = exports.config.multiCapabilities.map((c) => c.name);
    browser.currentProfile = browser.getProcessedConfig().then((c) => browser.profile = c.capabilities.name);
    jasmine.getEnv().addReporter(TestHelper.ReportHelper.getReporter());
    beforeEach(() => jasmine.addMatchers(TestHelper.JasmineMatchers));
    global.elementHelper = new TestHelper.ElementHelper();
    global.answerStoreHelper = new TestHelper.AnswerStoreHelper();
    global.browserHelper = new TestHelper.BrowserHelper();
    const SCREENSHOTTHRESHOLD = 1, //maximum px difference
      SCREENSHOTBASELINE = false, //allow to save actual screenshot as a baseline if can't find
      SCREENSHOTPATH = './screenshots'; //sreenshot location
    global.screenshotHelper = new TestHelper.ScreenshotHelper({
      threshold: SCREENSHOTTHRESHOLD,
      baseline: SCREENSHOTBASELINE,
      height: browser.currentProfile.height,
      width: browser.currentProfile.width,
      path: SCREENSHOTPATH
    });
    return browser.getProcessedConfig().then((processedConfig) => {
      jasmine.getEnv().addReporter(TestHelper.ReportHelper);
      browser.profile = processedConfig.capabilities.name;
      global.loggerHelper = new TestHelper.LoggerHelper();
    });
  },

  beforeLaunch: function () {
    return TestHelper.ReportHelper.beforeTestAttempt();
  }
};

exports.config = config;
