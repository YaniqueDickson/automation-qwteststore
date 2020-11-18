const { assert } = require('chai');
const productPage = require('../pageobjects/product.page');
const homePage = require('../pageobjects/home.page');
const cartPage = require('../pageobjects/cart.page');
const loginPage = require('../pageobjects/login.page'); 
const checkoutPage = require('../pageobjects/checkout.page');

describe('User Checkout:', function() {

    it('Guest user should be able to checkout', () => {
        //Navigate to url
        browser.url('/')

        //Select a product
        homePage.clickOnProduct(5)

        //Add product to cart
        productPage.clickAddToCartButton()
        browser.pause(3000)

        //Navigate to cart
        cartPage.cartLink.click()

        //Complete checkout process
        cartPage.clickCheckoutButton()
        checkoutPage.iframe.waitForDisplayed()
        browser.switchToFrame(checkoutPage.iframe)
        checkoutPage.enterEmail()
        checkoutPage.enterName()
        checkoutPage.enterStreet()
        checkoutPage.enterCity()
        checkoutPage.selectCountry(10)
        checkoutPage.clickOnSubmitButton()
        checkoutPage.enterCardNumber()
        checkoutPage.enterExpiryDate()
        checkoutPage.enterCVC()
        checkoutPage.clickOnSubmitButton()

        browser.waitUntil(
            () => checkoutPage.chekoutWindow.isDisplayed(true) === false, {
                timeout: 5000,
                timeoutMsg: 'Expected window to be not displayed'
            })

        //Confirm order is placed
        browser.waitUntil(
            () => cartPage.getOrderPlacedheader() === "Order placed!", {
                timeout: 5000,
                timeoutMsg: "Expected header to be 'Order placed!'"
            })
        assert.equal(cartPage.orderPlacedMessage(), "Congratulations. Your order and payment has been accepted.", "Expected order confirmation message")

        //Confirm cart is empty
        homePage.storeHome.waitForDisplayed()
        homePage.storeHome.click()
        assert.equal(cartPage.getEmptyCartHeader(), "Your cart is empty", "Expected cart to be empty")
    })

    it('Authenticated user should be able to checkout', () => {
        //Navigate to url
        browser.url(`${browser.options.baseUrl}/login/`)

        //Sign in
        loginPage.loginValidUser()

        //Select a product
        homePage.storeHome.click()
        homePage.clickOnProduct(8)

        //Add product to cart
        productPage.clickAddToCartButton()
        browser.pause(3000)

        //Navigate to cart
        cartPage.cartLink.click()

        //Complete checkout process
        cartPage.clickCheckoutButton()
        checkoutPage.iframe.waitForDisplayed()
        browser.switchToFrame(checkoutPage.iframe)
        checkoutPage.enterEmail()
        checkoutPage.enterName()
        checkoutPage.enterStreet()
        checkoutPage.enterCity()
        checkoutPage.selectCountry(10)
        checkoutPage.clickOnSubmitButton()
        checkoutPage.enterCardNumber()
        checkoutPage.enterExpiryDate()
        checkoutPage.enterCVC()
        checkoutPage.clickOnSubmitButton()

        browser.waitUntil(
            () => checkoutPage.chekoutWindow.isDisplayed(true) === false, {
                timeout: 5000,
                timeoutMsg: 'Expected window to be not displayed'
            })

        //Confirm order is placed
        browser.waitUntil(
            () => cartPage.getOrderPlacedheader() === "Order placed!", {
                timeout: 5000,
                timeoutMsg: "Expected header to be 'Order placed!'"
            })
        assert.equal(cartPage.orderPlacedMessage(), "Congratulations. Your order and payment has been accepted.", "Expected order confirmation message")

        //Confirm cart is empty
        homePage.storeHome.waitForDisplayed()
        homePage.storeHome.click()
        assert.equal(cartPage.getEmptyCartHeader(), "Your cart is empty", "Expected cart to be empty")

    })

})