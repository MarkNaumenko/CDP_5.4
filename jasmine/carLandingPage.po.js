'use strict';

class CarLandingPage {
    constructor() {
        this.openSignInFormButton = browser.profile === 'normal' ?
            element(by.css("button[class*='sign-in-nav']")) :
            element(by.css("button[class*='sign-in-nav-mobile']"));
        this.emailField = element(by.css('input[data-ng-model="signInData.email"]'));
        this.passwordField = element(by.css('input[data-ng-model="signInData.password"]'));
        this.signInSubmitButton = element(by.css('button[type="submit"]'));
        this.userIconMobile = element(by.css('a[class*="header__sign-in-nav-mobile-button--signed-in"]'));
        this.signOutLink = element(by.css('[class*="sign-out-link"]'));
        this.notYouBtn = element(by.css('button[class*="recognized-not-you"]'));
        this.getNewQuote = element(by.css("[class='fancy-button   fancy-button--arrow']"));
    }

    pageLoad() {
        return browserHelper.get('car-insurance/');
    }

    notYou() {
        return this.notYouBtn.click();
    }

    signIn(userLogin, password) {
        return elementHelper.waitAndClick(this.openSignInFormButton).then(() => {
            return elementHelper.setTextInputByValue(this.emailField, userLogin);
        }).then(() => {
            return elementHelper.setTextInputByValue(this.passwordField, password);
        }).then(() => {
            return elementHelper.waitAndClick(this.signInSubmitButton);
        }).then(() => {
            if (browser.profile === 'mobile') {
                return elementHelper.waitForVisibilityOf(this.userIconMobile);
            }
            return elementHelper.waitForVisibilityOf(this.signOutLink);
        });

    }

}

module.exports = CarLandingPage;
