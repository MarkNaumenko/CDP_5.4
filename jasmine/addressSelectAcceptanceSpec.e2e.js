'use strict';
const eventLogHelper = require('cms-acceptance-tests').EventlogHelper;
const HighImpactPage = require('./HighImpactPage.default.po.js'),
    CarLandingPage = require('./carLandingPage.po.js');

describe(`AddressSelect AC test cases ${browser.profile} profile`, () => {
    let page, landingPage;

    beforeAll(() => {
        page = new HighImpactPage();
        landingPage = new CarLandingPage();
        return page.pageLoad();
    });

    afterEach(() => {
        return browserHelper.deleteAllCookies().then(() => {
            return browserHelper.clearSession();
        });
    });

    it('should pre-populate the invalid postcode value when page reloaded', () => {
        elementHelper.scrollAndWaitAndClick(page.addressChange);
        elementHelper.setTextInputByValue(page.postcode, 'ggg');
        expect(elementHelper.getTextInputValue(page.postcode)).toEqual('ggg');
        elementHelper.loseFocus(page.postcode);
        page.pageLoad();

        expect(elementHelper.getTextInputValue(page.postcode)).toEqual('ggg');
    });

    if (browser.profile === 'normal') {
        describe('find address keyboard navigation auto selects address specific normal profile', () => {

            // defect #2941 - Find address keyboard navigation auto selects address
            it('it should not select the first address when user type A use arrow keys', () => {
                page.pageLoad();
                elementHelper.scrollAndWait(page.postcode);
                elementHelper.setTextInputByValue(page.postcode, `bb14bn${protractor.Key.ENTER}`);
                elementHelper.waitForVisibilityOf(page.selectProfileAddressTypeA);
                elementHelper.waitForInvisibilityOf(page.selectedAddress);
                elementHelper.setElementValue(page.selectProfileAddressTypeA, protractor.Key.ARROW_DOWN + protractor.Key.ARROW_DOWN +
                    protractor.Key.ARROW_DOWN + protractor.Key.ARROW_UP + protractor.Key.ARROW_RIGHT + protractor.Key.ARROW_LEFT);
                elementHelper.waitForInvisibilityOf(page.selectedAddress);
            });

            // defect #2941 - Find address keyboard navigation auto selects address
            it('it should not select the first address when user type C use arrow keys', () => {
                landingPage.pageLoad();
                landingPage.signIn('active@msm.com', 'pass1234');
                page.pageLoad();

                elementHelper.scrollAndWaitAndClick(page.addAnotherAddress);
                elementHelper.waitForVisibilityOf(page.profilePostcode);
                elementHelper.setTextInputByValue(page.profilePostcode, `bb14bn${protractor.Key.ENTER}`);
                elementHelper.waitForVisibilityOf(page.selectProfileAddressTypeC);
                elementHelper.waitForInvisibilityOf(page.selectedAddress);
                elementHelper.setElementValue(page.selectProfileAddressTypeC, protractor.Key.ARROW_DOWN + protractor.Key.ARROW_DOWN +
                    protractor.Key.ARROW_DOWN + protractor.Key.ARROW_UP + protractor.Key.ARROW_RIGHT + protractor.Key.ARROW_LEFT);
                elementHelper.waitForInvisibilityOf(page.selectedAddress);
            });
        });
    }

});
