const { assert } = require('chai');
const productPage = require('../pageobjects/product.page');
const homePage = require('../pageobjects/home.page');
const cartPage = require('../pageobjects/cart.page');
const loginPage = require('../pageobjects/login.page'); 
const { clickLoginButton } = require('../pageobjects/login.page');
const { getCartItemName } = require('../pageobjects/cart.page');

describe('Authenticated User Shopping Cart', function() {

    it('Should have the same item price on the product details page and in the cart', () => {
        browser.url(`${browser.options.baseUrl}/login/`)
        loginPage.loginValidUser()
        homePage.storeHome.click()
        homePage.clickOnProduct(5)
        const price = productPage.getProductPrice()
        productPage.clickAddToCartButton()
        browser.pause(3000)
        cartPage.cartLink.click()
        assert.equal(cartPage.getCartItemPrice(1), price)
    })

    it('Should not change when user logs out and logs in again', () => {
        const cartItemName = cartPage.getCartItemName(1)
        loginPage.clickSignInOutLink()
        browser.waitUntil(
            () => loginPage.signInOutLink.getText() === "Sign in", {
                timeout: 10000,
                timeoutMsg: "Expected "
            })
        loginPage.clickSignInOutLink()
        loginPage.loginValidUser()
        cartPage.cartLink.click()
        assert.equal(cartPage.getCartItemName(1), cartItemName)
        console.log(cartItemName, cartPage.getCartItemName(1))
    })
})
