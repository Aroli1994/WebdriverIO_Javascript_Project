class ReviewPage {

    get productPrices() {
        return $$("tr td:nth-child(4) strong")
    }

    get totalPrice() {
        return $("h3 strong")
    }

    get checkoutReview() {
        return $(".btn-success")
    }

    async listProductPrices() {
        await this.productPrices.forEach(async ($ele) => {
            console.log(await $ele.getText())
        })
    }

    async sumOfProducts() {
        //const sumOfProducts = await this.productPrices.map(async (this.productPrices) => parseInt((await this.productPrices.getText()).split('.')[1].trim()))).reduce((acc, price) => acc + price, 0)
        const sumOfProducts = await this.productPrices.map(async (productPrice) => parseInt((await productPrice.getText()).split('.')[1].trim())).reduce((acc, price) => acc + price, 0)
        console.log("calculated sum of products = " + sumOfProducts)
    }

    async totalFormattedPrice() {
        const totalValue = this.totalPrice.getText()
        const totalIntValue = parseInt((await totalValue).split(".")[1].trim())
        console.log("total product sum = " + totalIntValue)
    }
}

export default new ReviewPage()