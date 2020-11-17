class productPage {

    get addToCartButton() { return $('button.button') }
    get productName() { return $('.item .content .header') }
    get productPrice() { return $('.content .description p') }

    /**
     * Clicks the add to cart button on the product details page
     */
    clickAddToCartButton() {
        this.addToCartButton.waitForDisplayed()
        this.addToCartButton.click()
    }

    /**
     * Gets the product name on the product details page
     */
    getProductName() {
        this.productName.waitForDisplayed()
        return this.productName.getText()
    }

    /**
     * Gets the price of the item on the product details page
     */
    getProductPrice() {
        this.productPrice.waitForDisplayed()
        return this.productPrice.getText()
    }

}

module.exports = new productPage;