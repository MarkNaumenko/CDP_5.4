'use strict';
var steamStore = require('../support/pages/steamStore.js');

var steps = function() {

    this.Given(/^I am on the market page$/, function () {
    	return steamStore.getPage();
    });

    this.Then(/^I will log in$/, function() {
        return steamStore.steamLogin();
    });

    this.When(/^I will input '([^"]*)' in the search field$/, function(gameName) {
    	return steamStore.searchGame(gameName);
    });
    
    this.Then(/^I will go to the page of this '([^"]*)' game$/, function(gameName) {
        var EC = protractor.ExpectedConditions;
        return browser.wait(EC.visibilityOf(element(by.xpath('.//*[text() = "' + gameName + '"]'))), 10000)
        .then(function(){
            browser.element(by.xpath('.//*[text() = "' + gameName + '"]')).click();    
        });
    });

    this.Then(/^I will wait a bit$/, function() {
        return browser.sleep(1000)
    });   

    this.Then(/^I will add game to the cart$/, function() {
        return steamStore.addGameToCart();
    });

    this.Then(/^purchase game for my self$/, function() {
        return steamStore.getButtonBuyForMySelf().click();
    });

    this.Then(/^take screenshot$/, function() {
        return steamStore.takeSteamScreenshot();
    });

};

module.exports = steps;