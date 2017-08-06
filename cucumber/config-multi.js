exports.config = {
  
  getPageTimeout: 5000,

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    'tests/features/*.feature'
  ],
  multiCapabilities: [
    {
      browserName: 'chrome',
      chromeOptions: {
          args: ['start-maximized', '--disable-extensions']
      }
    },
    {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--window-size=720,1280', '--disable-extensions']
      }
    },
    {
      name: 'firefox',
      browserName: 'firefox',
    }
  ],
  cucumberOpts: {
    require: 'tests/step_definitions/*.js',
    format: 'pretty',
    tags: process.env.TAGS
  },

  onPrepare : function() {
        var chai = require('chai');
            chaiAsPromised = require('chai-as-promised');
        expect = chai.expect;
        chai.use(chaiAsPromised);
  }

};