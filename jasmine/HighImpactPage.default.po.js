'use strict';

class HighImpactPage {

    constructor() {
        // postcode elements
        this.postcodeLabel = element.all(by.id('postcodeLabel'));
        this.houseNumber = element(by.id('houseNumber'));
        this.postcode = element(by.css('#postcode[name="postcode"]'));
        this.postcodeErrMsg = element(by.css('div[data-msm-error-tracking-show-error*="postcodeNotFound"] div[class="message_holder"]'));
        this.profileHouseNumber = element(by.id('profileHouseNumber'));
        this.profilePostcode = element(by.id('profileAddressPostcode'));
        this.findAddress = element(by.css('[data-msm-interaction-id="Address.Find"]'));
        this.postcodeChange = element(by.css('[data-msm-interaction-id="Postcode.Change"]'));
        this.selectedAddress = element(by.css("div[class*='selected-house']"));
        this.addressElement = element(by.css('.property_address .nativedropdown-wrapper__native'));
        this.addressElementOptions = element.all(by.css('.property_address .nativedropdown-wrapper__native option'));
        this.selectedAddress = element(by.css("div[class*='selected-house']"));
        this.addressChange = element(by.css("button[data-msm-interaction-id='Postcode.Change']"));
        this.allAddressSelectedComponent = element(by.css("[data-ng-show='profileAddresses.length']"));
        this.firstAddress = element(by.css("label[for='property.address0']"));
        this.addAnotherAddress = element(by.css("label[for='property.addressAddNew']"));
        this.postCodeErrorElement = element.all(by.css('.form-group--postcode-error .help-block'));
        this.selectProfileAddressTypeA = element(by.css("[data-ng-model='selectedAddress'] select"));
        this.selectProfileAddressTypeC = element(by.css("[data-ng-model='profileAddress'] select"));

        //Registration number elements
        this.regNumber = element(by.css('input[id="regnumber"] '));
        this.regNumberErrMsg = element(by.css('div[data-msm-error-tracking-show-error*="regnumber"][class="message_holder"]'));
        this.regNumberErrMsgLink = element(by.css('div[data-msm-error-tracking-show-error*="regnumber"][class="message_holder"] ' +
            '.btn-link'));
        this.findCarButton = element(by.css('[data-name="carLookupButton"]'));
        this.notTheRightCarButton = element(by.css('[data-ng-show="showVehicleSummary"]'));
        this.carSelectionComponent = element(by.css("[id='additionalComponents.vehicleSelectionId']"));
        this.carSelectionAll = element.all(by.css('span:not(.ng-hide) label[for*="additionalComponents.vehicleSelectionId_"]'));

        //Manual registration elements
        this.knownRegnumberYesNo = element(by.css('[data-name="knownRegnumber"]'));
        this.manualRegistrationFormError = element(by.css('[name="vehicleForm"] [class="form-group has-error"]'));
        this.makeSelectionComponent = element(by.css('#makeSelection'));
        this.makeSelectionArr = element.all(by.css('label[for*="make"]'));
        this.makeSelectionOtherOptions = element.all(by.css('#makeSelection .dropdown option:not(.ng-hide)'));
        this.modelSelectionComponent = element(by.css('#modelSelection'));
        this.modelSelectionAll = element.all(by.css('label[for*="model"]'));
        this.modelSelectionOtherOptions = element.all(by.css('#modelSelection .dropdown option:not(.ng-hide)'));
        this.fuelSelectionComponent = element(by.css('#fuelSelection'));
        this.fuelSelectionAll = element.all(by.css('label[for*="fuel"]:not(.ng-hide)'));
        this.transmissionSelectionComp = element(by.css('#transmissionSelection'));
        this.transmissionSelectionAll = element.all(by.css('label[for*="transmission"]:not(.ng-hide)'));
        this.registrationYearComponent = element(by.css('#registrationYearSelection'));
        this.registrationYear = element(by.css('[data-name="registrationYear"]'));
        this.registrationYearOptions = element.all(by.css('[data-name="registrationYear"] option:not(.ng-hide)'));
        this.engineSizeSelectionComp = element(by.css('#engineSizeSelection'));
        this.engineSizeSelectionAll = element.all(by.css('label[for*="engineSize"]:not(.ng-hide)'));
        this.versionSelectionComponent = element(by.css('#versionSelection'));
        this.vehicleSelectionComponent = element(by.css('#vehicleSelection'));
        this.vehicleSelectionAll = element.all(by.css('#vehicleSelection label[for*="vehicle"]:not(.ng-hide)'));
        this.confirmCarButton = element(by.css('button[id="findCar"]'));

        // inline signin related locators
        this.email = element(by.css("input[name='policyHolder.email']"));
        this.confirmEmail = element(by.css("input[name='policyHolder.confirmEmail']"));
        this.password = element(by.css("input[name='policyHolder.password']"));
        this.confirmPassword = element(by.css("input[name='policyHolder.confirmPassword']"));
        this.signInButton = element(by.css("button[class*='highimpact-signin__content__form__btn-signin--left']"));
        this.signInContent = element(by.className('highimpact-signin__content'));

        //DOB smart date element
        this.DOBDay = element(by.css("input[class*='smart-date-field__day']"));
        this.DOBMonth = element(by.css("input[class*='smart-date-field__month']"));
        this.DOBYear = element(by.css("input[class*='smart-date-field__year']"));
        this.DOBSeparator = element.all(by.css("span[class='smart-date-field__separator']"));
        this.DOBErrorElement = element(by.className('policyholder-dateofbirth__form-group'));

        //msm composite form page
        this.claimExistsButton = element(by.css('.policyholder-claimsexists__toggle-with-confirm'));
        this.claimExistsButtonYes = element(by
            .css('.policyholder-claimsexists__toggle-with-confirm .toggle-with-confirm__toggle-button--yes'));
        this.claimExistsButtonNo = element(by
            .css('.policyholder-claimsexists__toggle-with-confirm .toggle-with-confirm__toggle-button--no'));
        this.claimTypeComponent = element(by.css('div#claimTypeId.claimtypeid__form-group'));
        this.claimIncSmartDateComponent = element(by.css('div.dateofclaim__form-group'));
        this.claimIncSmartDateDay = element(by.css('[id="policyHolder.claims"] .smart-date-field__day'));
        this.claimIncSmartDateMonth = element(by.css('[id="policyHolder.claims"] .smart-date-field__month'));
        this.claimIncSmartDateYear = element(by.css('[id="policyHolder.claims"] .smart-date-field__year'));
        this.claimAccidentTypeComponent = element(by.css('div#claimAccidentTypeId'));
        this.claimTheftTypeComponent = element(by.css('div#claimTheftTypeId'));
        this.claimTypeOther = element(by.css("[data-ng-model='claimTypeId_other']"));
        this.noClaimsAffectedComponent = element(by.css('div#noClaimsAffected'));
        this.claimFormSaveButton = element(by.css('[id="policyHolder.claims"] .btn-save'));
        this.claimFormCancelButton = browser.profile === 'normal' ?
            element(by.css('[data-msm-interaction-id="Claim.Cancel"]')) :
            element(by.css('[class="hidden-xs hidden-sm"] button[data-msm-interaction-id="Claim.Cancel"],div.row.bubbled button.btn-link'));
        this.claimListItemDate = browser.profile === 'normal' ?
            element(by.css(".policyHolder_claims .list-group-item>.info>.date>span[class*='hidden-xs']")) :
            element(by.css(".policyHolder_claims .list-group-item>.info>.date>span[class*='hidden-lg']"));
        this.claimListItemDetails = element(by.css('.policyHolder_claims .list-group-item .details'));
        this.claimListAddAnotherItem = element(by.css('button[data-msm-interaction-id="Claim.Add"]'));
        this.claimListNoMoreItemsMsg = element(by.css('.policyHolder_claims .list-group-item .maxlimit'));
        this.claimRemoveButton = browser.profile === 'normal' ?
            element.all(by.css('[class*="hidden-xs"] [data-msm-interaction-id="Claim.Remove"]')) :
            element.all(by.css('[class*="hidden-lg"] [data-msm-interaction-id="Claim.Remove"]'));
        this.claimRemoveButtonYes = browser.profile === 'normal' ?
            element(by.css('[class*="hidden-xs"] button[id*="remove_claimsConfirmYes"]')) :
            element(by.css('[class*="hidden-lg"] button[id*="remove_claimsConfirmYes"]'));
        this.claimRemoveButtonNo = browser.profile === 'normal' ?
            element(by.css('[class*="hidden-xs"] button[id*="remove_claimsConfirmNo"]')) :
            element(by.css('[class*="hidden-lg"] button[id*="remove_claimsConfirmNo"]'));
        this.entityForm = element(by.css('[data-ng-form="claims.entityForm"]'));
        this.claimTypeIdErrorMsg = element(by.css('div[data-msm-error-tracking-show-error*="claimTypeId"] div[class="message_holder"]'));
        this.claimDateErrorMsg = element(by.css('div[data-msm-error-tracking-show-error*="dateOfClaim"] div[class="message_holder"]'));
        this.noClaimsAffErrorMsg = element(by
            .css('div[data-msm-error-tracking-show-error*="noClaimsAffected"] div[class="message_holder"]'));
        this.claimUnsavedErrorMessage = element(by.css('.policyHolder_claims .inner-form-body>.has-error'));
        this.confirmationMessage = element(by.css('.confirm'));

        //msm composite form - offences
        this.offenceExistsButton = element(by.css('.policyholder-offencesexists__toggle-with-confirm'));
        this.offenceExistsButtonYes = element(by
            .css('.policyholder-offencesexists__toggle-with-confirm .toggle-with-confirm__toggle-button--yes'));
        this.offenceExistsButtonNo = element(by
            .css('.policyholder-offencesexists__toggle-with-confirm .toggle-with-confirm__toggle-button--no'));
        this.offenceTypeComponent = element(by.css('div#offenceTypeId'));
        this.offenceSpeedingTypeRadio = element(by.css("[id='dvlaOffenceCodeSpeeding']"));
        this.ospeedTypeDvlaCodeComponent = element(by.css('div#dvlaOffenceCodeSpeeding'));
        this.ospeedTypeDvlaCodeInput = element(by.css('input[id="dvlaOffenceCodeSpeeding.otherInput"]'));
        this.ospeedTypeDvlaCodeSuggestions = element.all(by.css('div#dvlaOffenceCodeSpeeding .tt-suggestion'));
        this.ospeedTypeDvlaCodeNoMatchMsg = element(by.css('div#dvlaOffenceCodeSpeeding .tt-no-match-message'));
        this.offenceAlcoholTypeRadio = element(by.css("[id='dvlaOffenceCodeAlcoholOrDrug']"));
        this.oAlcTypeDvlaCodeComponent = element(by.css('div#dvlaOffenceCodeAlcoholOrDrug'));
        this.oAlcTypeDvlaCodeInput = element(by.css('input[id="dvlaOffenceCodeAlcoholOrDrug.otherInput"]'));
        this.oAlcTypeDvlaCodeSuggestions = element.all(by.css('div#dvlaOffenceCodeAlcoholOrDrug .tt-suggestion'));
        this.oAlcTypeDvlaCodeNoMatchMsg = element(by.css('div#dvlaOffenceCodeAlcoholOrDrug .tt-no-match-message'));
        this.oAlcTypeMicrogramComponent = element(by.css('div#alcoholReading'));
        this.oAlcTypeMicrogramInput = element(by.css('input#alcoholReading'));
        this.offenceDrivingTypeRadio = element(by.css("[id='dvlaOffenceCodeCareless']"));
        this.oDrivingTypeDvlaCodeComponent = element(by.css('div#dvlaOffenceCodeCareless'));
        this.oDrivingTypeDvlaCodeInput = element(by.css('input[id="dvlaOffenceCodeCareless.otherInput"]'));
        this.oDrivTypeDvlaCodeSuggestions = element.all(by.css('div#dvlaOffenceCodeCareless .tt-suggestion'));
        this.oDrivTypeDvlaCodeNoMatchMsg = element(by.css('div#dvlaOffenceCodeCareless .tt-no-match-message'));
        this.oOtherTypeDvlaComponent = element(by.css('div#dvlaOffenceCode'));
        this.offenceOtherTypeDvlaCodeInput = element(by.css('input#dvlaOffenceCode'));
        this.oOtherTypeDvlaSuggestions = element.all(by.css('div#dvlaOffenceCode .tt-suggestion'));
        this.oOtherDvlaCodeNoMatchMsg = element(by.css('div#dvlaOffenceCode .tt-no-match-message'));
        this.oConvSmartDateComponent = element(by.css('div.dateofoffence__form-group'));
        this.offenceConvictionSmartDateDay = element(by.css('#dateOfOffence .smart-date-field__day'));
        this.offenceConvictSmartDateMonth = element(by.css('#dateOfOffence .smart-date-field__month'));
        this.offenceConvictionSmartDateYear = element(by.css('#dateOfOffence .smart-date-field__year'));
        this.offencePenaltyPointsComponent = element(by.css('div.penaltypoints__form-group'));
        this.offencePayFineComponent = element(by.css('div#wasFine'));
        this.offencePayFineInput = element(by.css('input#fineAmount'));
        this.offenceBannedComponent = element(by.css('div#wasBan'));
        this.offenceBannedInput = element(by.css('input#monthsBanned'));
        this.offenceUnsavedErrorMessage = element(by.css('.policyHolder_drivingOffences .inner-form-body>.has-error'));
        this.offenceFormSaveButton = element(by.css('.policyHolder_drivingOffences .btn-save'));
        this.offenceFormCancelButton = browser.profile === 'normal' ?
            element(by.css('[data-msm-interaction-id="Offence.Cancel"]')) :
            element(by.css('[class="hidden-xs hidden-sm"] ' +
                'button[data-msm-interaction-id="Offence.Cancel"],div.row.bubbled button.btn-link'));
        this.offenceListItemDate = browser.profile === 'normal' ?
            element(by.css('.policyHolder_drivingOffences .list-group-item>.info>.date>span[class*="hidden-xs"]')) :
            element(by.css('.policyHolder_drivingOffences .list-group-item>.info>.date>span[class*="hidden-lg"]'));
        this.offenceListItemDetails = element(by.css('.policyHolder_drivingOffences .list-group-item .details'));
        this.offenceListAddAnotherItem = element(by.css('button[data-msm-interaction-id="Offence.Add"]'));
        this.offenceListNoMoreItemsMsg = element(by.css('.policyHolder_drivingOffences .list-group-item .maxlimit'));
        this.offenceRemoveButton = browser.profile === 'normal' ?
            element.all(by.css('[class*="hidden-xs"] [data-msm-interaction-id="Offence.Remove"]')) :
            element.all(by.css('[class*="hidden-lg"] [data-msm-interaction-id="Offence.Remove"]'));
        this.offenceRemoveButtonYes = browser.profile === 'normal' ?
            element(by.css('[class*="hidden-xs"] button[id*="remove_offenceConfirmYes"]')) :
            element(by.css('[class*="hidden-lg"] button[id*="remove_offenceConfirmYes"]'));
        this.offenceRemoveButtonNo = browser.profile === 'normal' ?
            element(by.css('[class*="hidden-xs"] button[id*="remove_offenceConfirmNo"]')) :
            element(by.css('[class*="hidden-lg"] button[id*="remove_offenceConfirmNo"]'));

        //Vehicle details elements
        this.vehicleDetails = element(by.id('vehicle.carDetails'));
        this.vehicleDetailsSelection = element(by.css('[data-name="vehicle.carDetails"]'));
        this.vehicleDetailsSelectionAll = element.all(by.css('label[for*="vehicle.carDetails"]'));
        this.vehicleModelAndRegnumber = element(by.css('[class*="selected-car"] b'));
        this.vehicleDeatilsRegnumber = element(by.css('[class*="selected-car"] b span'));
        this.vehicleDeatilsParts = element.all(by.css('[class*="selected-car"] div'));
        this.vehicleDetailsYear = element(by.css('[class*="selected-car"] div + div span'));

        this.inputError = element(by.css('.inputerror'));
        this.continueButton = browser.profile === 'normal' ?
            element(by.css("[class*='hidden-xs'] button[data-ng-show*='nextPage']")) :
            element(by.css("[class*='hidden-lg'] button[data-ng-show*='nextPage']"));

        //EventlogElement
        this.eventLogElement = element(by.css("div[class*='page-banner'] p"));

        this.policyHolderList = element(by.css('div[data-ng-model="additionalComponents.peopleSelectionId"]'));
    }

    pageLoad() {
        return browserHelper.get('/fixtures/legacy-questionset-fixtures/car-insurance/questionset/');
    }

    pageLoadWithEnquiryId(enquiryId) {
        return browserHelper.get(`/fixtures/legacy-questionset-fixtures/car-insurance/questionset/?enquiryId=${enquiryId}`);
    }

    hasErrorDisplayed(element) {
        return element.getAttribute('class').then((classAttribute) => {
            return element.isDisplayed() && classAttribute.includes('has-error');
        });
    }

    gotoAboutTheCarPage() {
        return browser.executeScript(`
            const $injector = angular.element(document.body).injector(),
                $location = $injector.get('$location'),
                $rootScope = $injector.get('$rootScope');

            $location.search('step', 'aboutthecar');
            $rootScope.$digest();
        `).then(() => {
            return browserHelper.waitForUrlContains('step=aboutthecar');
        });
    }

    setDateOfBirth(day, month, year) {
        elementHelper.setTextInputByValue(this.DOBDay, day);
        elementHelper.setTextInputByValue(this.DOBMonth, month);
        elementHelper.setTextInputByValue(this.DOBYear, year);
    }

}

module.exports = HighImpactPage;
