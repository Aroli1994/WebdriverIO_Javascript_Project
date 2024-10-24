class ShopPage {


    get checkout() {
        //return $("ul.ml-auto>li>a")
        return $("*=Checkout")
    }
    get cards() {
        return $$("div[class='card h-100']")
    }

    async addProductsToCart(products) {
        for (let i = 0; i < await this.cards.length; i++) {
            const card = this.cards[i].$("div h4 a")  //chaining locators
            if (products.includes(await card.getText())) {
                await this.cards[i].$(".card-footer button").click()
            }
        }
    }
}
export default new ShopPage()