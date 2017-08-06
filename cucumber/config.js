exports.config = {
  
  getPageTimeout: 5000,

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    browserName: process.env.BROWSER,
    chromeOptions : {
      args: [process.env.VIEW]
    },
    specs: [
      'tests/features/*.feature'
    ]
  },

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