const loginData = require('../data/loginData');


class LoginPage {

    get userEmail() { return $('div.input #email')}
    get password() { return $('div.input #password')}
    get loginButton() { return $('.segment button.button') }
    get noOrdersHeader() { return $('.message > div.header') }
    get previousOrdersHeader() { return $('div.ui div h1.ui') }
    get myAccount() { return $('.menu .active') }
    get loginErrorMessage() { return $('.content p') }
    get signInOutLink() { return $('div.right a:nth-child(2)') }
    credentialRequiredMessage(index) { return $(`form .segment p:nth-child(${index})`) }

    /**
     * Enters user email
     * @param {string} text 
     */
    enterUserEmail(text) {
        this.userEmail.waitForDisplayed()
        this.userEmail.clearValue()
        this.userEmail.setValue(text)
    }

    /**
     * Enter password
     * @param {string} text 
     */
    enterPassword(text) {
        this.password.waitForDisplayed()
        this.password.clearValue()
        this.password.setValue(text)
    }

    /**
     * Clicks the login button
     */
    clickLoginButton() {
        this.loginButton.waitForDisplayed()
        this.loginButton.click()
    }
  
    /**
     * Gets the heading of the 'Previous Orders' page
     */
    getLoginConfirmation() {
        var result;
        if(this.previousOrdersHeader.isDisplayed() === true){
            result = (this.previousOrdersHeader.getText() === 'My previous orders');
        }
        else{
            result = (this.noOrdersHeader.getText() === 'No recent orders');
        }
        return result
    }

    /**
     * This function logs in an authenticated user
     */
    loginValidUser() {
        this.enterUserEmail(loginData.validEmail)
        this.enterPassword(loginData.validPassword)
        this.clickLoginButton()
        browser.waitUntil( () => this.myAccount.getText() === 'My Account',
            {
                timeout: 20000,
                timeoutMsg: 'Expected "My Account" to be present'
            })
    }

    /**
     * Clicks the sign in/sign out button
     */
    clickSignInOutLink() {
        this.signInOutLink.waitForDisplayed()
        this.signInOutLink.click()
    }

}

module.exports = new LoginPage;
