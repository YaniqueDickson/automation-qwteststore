const { assert } = require('chai');
const productPage = require('../pageobjects/product.page')
const homePage = require('../pageobjects/home.page')
const cartPage = require('../pageobjects/cart.page')


describe('Guest User Shopping Cart', function() {
    it('Should allow the user to add an item', () => {
        browser.url('/')
        homePage.clickOnProduct(2)
        const productName1 = productPage.getProductName()
        productPage.clickAddToCartButton()
        browser.pause(3000)
        cartPage.cartLink.click()
        assert.equal(cartPage.getCartItemName(1), productName1)
        console.log(productName1)
    })

    it('Should allow user to add an item mutilple times', () => {
        cartPage.cartItemName(1).click()
        productPage.clickAddToCartButton()
        browser.pause(3000)
        cartPage.cartLink.click()
        cartPage.itemQuantity(1).waitForDisplayed()
        assert.equal(cartPage.getItemQuantity(1), "2x")
        console.log(cartPage.getItemQuantity(1))
    })

    it('Should allow user to add multiple items', () => {
        homePage.storeHome.click()
        homePage.clickOnProduct(1)
        const productName2 = productPage.getProductName()
        productPage.clickAddToCartButton()
        browser.pause(3000)
        cartPage.cartLink.click()
        assert.equal(cartPage.getCartItemName(2), productName2)

        homePage.storeHome.click()
        homePage.clickOnProduct(4)
        const productName3 = productPage.getProductName()
        productPage.clickAddToCartButton()
        browser.pause(3000)
        cartPage.cartLink.click()
        assert.equal(cartPage.getCartItemName(3), productName3)
        console.log(productName2, productName3)
    })

})