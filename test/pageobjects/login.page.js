const loginData = require('../data/loginData');


class LoginPage {

    get userEmail() { return $('div.input #email')}
    get password() { return $('div.input #password')}
    get loginButton() { return $('.segment button.button') }
    get noOrdersHeader() { return $('.message > div.header') }
    get previousOrdersHeader() { return $('div.ui div h1.ui') }
    get myAccount() { return $('.menu .active') }
    get loginErrorMessage() { return $('.content p') }
    credentialRequiredMessage(index) { return $(`form .segment p:nth-child(${index})`) }

    /**
     * Enter user email
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
     * Click the login button
     */
    clickLoginButton() {
        this.loginButton.waitForDisplayed()
        this.loginButton.click()
    }

    // getMyAccountHeader() {
    //     this.myAccoundHeader.waitForDisplayed()
    //     return this.myAccoundHeader.getText()
    // }

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

}

module.exports = new LoginPage;
