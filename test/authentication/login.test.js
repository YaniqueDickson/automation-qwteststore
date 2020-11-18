const { assert } = require('chai');
const loginData = require('../data/loginData');
const loginPage = require('../pageobjects/login.page');

describe('User Authentication', function() {

    it('Should login the user', () => {
        browser.url(`${browser.options.baseUrl}/login/`)
        loginPage.enterUserEmail(loginData.validEmail)
        loginPage.enterPassword(loginData.validPassword)
        loginPage.clickLoginButton()
        
        browser.waitUntil( () => loginPage.myAccount.getText() === 'My Account',
            {
                timeout: 20000,
                timeoutMsg: 'Expected "My Account" to be present'
            }
        )
        
        browser.pause(5000)
        assert.equal(loginPage.getLoginConfirmation(), true)
    })

    it('Should not login user with invalid password', () => {
        browser.url(`${browser.options.baseUrl}/login/`)
        loginPage.enterUserEmail(loginData.validEmail)
        loginPage.enterPassword(loginData.invalidPassword)
        loginPage.clickLoginButton()

        loginPage.loginErrorMessage.waitForDisplayed()
        assert.equal(loginPage.loginErrorMessage.getText(), 'Please check your login details and try again.')
    })

    it('Should not login user with no password', () => {
        browser.url(`${browser.options.baseUrl}/login/`)
        loginPage.enterUserEmail(loginData.validEmail)
        loginPage.password.clearValue()
        loginPage.clickLoginButton()

        loginPage.credentialRequiredMessage(3).waitForDisplayed({ timeout: 200000})
        assert.equal(loginPage.credentialRequiredMessage(3).getText(), 'Password is required')        
    })

    it('Should not login user with invalid email', () => {
        browser.url(`${browser.options.baseUrl}/login/`)
        loginPage.enterUserEmail(loginData.invalidEmail)
        loginPage.enterPassword(loginData.validPassword)
        loginPage.clickLoginButton()

        loginPage.loginErrorMessage.waitForDisplayed()
        assert.equal(loginPage.loginErrorMessage.getText(), 'Please check your login details and try again.')
    })

    it('Should not login user with no email no password', () => {
        browser.url(`${browser.options.baseUrl}/login/`)
        loginPage.userEmail.clearValue()
        loginPage.password.clearValue()
        loginPage.clickLoginButton()

        loginPage.credentialRequiredMessage(2).waitForDisplayed()
        loginPage.credentialRequiredMessage(4).waitForDisplayed()

        assert.equal(loginPage.credentialRequiredMessage(2).getText(), 'Email address is required')
        assert.equal(loginPage.credentialRequiredMessage(4).getText(), 'Password is required')
    })

})
