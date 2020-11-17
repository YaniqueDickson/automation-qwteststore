const loginData = require('../data/loginData');
const homePage = require('./home.page')
const productPage = require('./product.page')

class cartPage {

    cartItemName(index) { return $(`.items .item:nth-child(${index}) .content .header a`) }
    itemQuantity(index) { return $(`.items .item:nth-child(${index}) .content .meta`) }
    get cartLink() { return $('div i.cart') }
    get subtotal() { return $('.clearing span') }
    //get cart()  {  return $('div.right a.item div') } 
    
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

}

module.exports = new cartPage;