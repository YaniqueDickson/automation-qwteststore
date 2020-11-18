const loginData = require('../data/loginData');
const homePage = require('./home.page')
const productPage = require('./product.page')

class cartPage {

    cartItemName(index) { return $(`.items .item:nth-child(${index}) .content .header a`) }
    itemQuantity(index) { return $(`.items .item:nth-child(${index}) .content .meta`) }
    get cartLink() { return $('div i.cart') }
    get emptyCartHeader() { return $('.warning .header') }
    get orderPlacedHeader() { return $('div.success div') }
    get orderPlacedMessage() { return $('div.success p') }
    get checkoutButton() { return $('div span .button') }
    
    /**
     * Gets the name of a product in the cart
     * @param {number} index 
     */
    getCartItemName(index) {
        this.cartItemName(index).waitForDisplayed()
        return this.cartItemName(index).getText()
    }

    /**
     * Gets the quantity ('1x') of an item in the cart
     * @param {number} index 
     */
    getItemQuantity(index) {
        this.itemQuantity(index).waitForDisplayed()
        return this.itemQuantity(index).getText().split(' ')[0]
    }

    /**
     * Gets the price of an item in the cart
     * @param {number} index 
     */
    getCartItemPrice(index) {
        this.itemQuantity(index).waitForDisplayed()
        return this.itemQuantity(index).getText().split(' ')[1]
    }

    /**
     * Clicks the checkout button
     */
    clickCheckoutButton() {
        this.checkoutButton.waitForDisplayed()
        this.checkoutButton.click()
    }

    /**
     * Gets empty cart header
     */
    getEmptyCartHeader() {
        this.cartLink.waitForDisplayed()
        this.cartLink.click()
        this.emptyCartHeader.waitForDisplayed()
        return this.emptyCartHeader.getText()
    }

    /**
     * Gets order placed header
     */
    getOrderPlacedheader() {
        this.orderPlacedHeader.waitForDisplayed()
        return this.orderPlacedHeader.getText()
    }

    /**
     * Gets order placed message
     */
    getOrderPlacedMessage() {
        this.orderPlacedMessage.waitForDisplayed()
        return this.orderPlacedMessage.getText()
    }

}

module.exports = new cartPage;