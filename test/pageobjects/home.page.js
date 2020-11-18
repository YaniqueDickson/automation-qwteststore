class homePage {

    product(index) { return $(`div.cards a:nth-child(${index})`) }
    get storefrontHeading() { return $('div.content img.image') }
    get storeHome() { return $('div.container a.header') }


    /**
     * Clicks on a product on the product listing (home) page
     * @param {number} index 
     */
    clickOnProduct(index) {
        this.product(index).waitForDisplayed()
        this.product(index).scrollIntoView()
        this.product(index).click()
    }

}

module.exports = new homePage;