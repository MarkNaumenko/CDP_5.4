var user = require('./../user'),
	steamMain = require('./steamMain.js');
	
var steamStore = {
	searchGame: function(input) {
		return browser.element(by.id('store_nav_search_term')).sendKeys(input);
	},
	addGameToCart: function() {
		return browser.element(by.xpath('(.//div[@class="btn_addtocart"])[1]')).click();
	},
	getButtonBuyForMySelf: function() {
		return browser.element(by.id('btn_purchase_self'));
	}
};

Object.assign(steamStore, steamMain);

module.exports = steamStore;