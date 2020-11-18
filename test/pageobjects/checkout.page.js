const loginData = require("../data/loginData")
const paymentData = require("../data/paymentData")

class Checkout {

    get email() { return $('[placeholder="Email"]') }
    get name() { return $('[placeholder="Name"]') }
    get street() { return $('[placeholder="Street"]') }
    get city() { return $('[placeholder="City"]') }
    get postcode() { return $('[placeholder="Postcode"]') }
    get dropdownArrow() { return $('select.Fieldset-input') }
    get submitButton() { return $('[type="submit"]') }
    get smsDeliveryMessage() { return $('div.Center-cell div') }
    get iframe() { return $('.stripe_checkout_app') }
    country(index) { return $(`select.Select-control option:nth-child(${index})`) }
    get cardNumber() { return $('[placeholder="Card number"]') }
    get expiryDate() { return $('[placeholder="MM / YY"]') }
    get cvc() { return $('[placeholder="CVC"]') }
    get chekoutWindow() { return $('.Modal-animationWrapper main.Modal') }

    /**
     * Enters email in payment details
     */
    enterEmail() {
        this.email.waitForDisplayed()
        this.email.clearValue()
        this.email.click()
        this.email.keys(loginData.validEmail)
    }

    /**
     * Enters name in payment details
     */
    enterName() {
        this.name.waitForDisplayed()
        this.name.clearValue()
        this.name.click()
        this.name.keys(paymentData.name)
    }

    /**
     * Enters street in payment details
     */
    enterStreet() {
        this.street.waitForDisplayed()
        this.street.clearValue()
        this.street.click()
        this.street.keys(paymentData.street)
    }

    /**
     * Enters city in payment details
     */
    enterCity() {
        this.city.waitForDisplayed()
        this.city.clearValue()
        this.city.click()
        this.city.keys(paymentData.city)
    }

    /**
     * Selects a country from the dropdown menu
     * @param {number} index 
     */
    selectCountry(index) {
        this.dropdownArrow.waitForDisplayed()
        this.dropdownArrow.moveTo()
        this.dropdownArrow.click()
        this.country(index).waitForDisplayed()
        this.country(index).click()
    }

    /**
     * Enters card number
     */
    enterCardNumber() {
        this.cardNumber.waitForDisplayed()
        this.cardNumber.clearValue()
        this.cardNumber.click()
        this.cardNumber.keys(paymentData.cardNumber)
    }

    /**
     * Enters expiration date
     */
    enterExpiryDate() {
        this.expiryDate.waitForDisplayed()
        this.expiryDate.clearValue()
        this.expiryDate.click()
        this.expiryDate.keys(paymentData.expiryDate)
    }

    /**
     * Enters cvc number
     */
    enterCVC() {
        this.cvc.waitForDisplayed()
        this.cvc.clearValue()
        this.cvc.click()
        this.cvc.keys(paymentData.cvc)
    }

    /**
     * Clicks the Payment button
     */
    clickOnSubmitButton() {
        this.submitButton.waitForDisplayed()
        this.submitButton.click()
    }



}

module.exports = new Checkout