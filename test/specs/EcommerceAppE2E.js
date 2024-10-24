import { expect as chaiExpect } from "chai"
import loginPage from "../pageobjects/loginPage"
import shoppage from "../pageobjects/shopPage"
import reviewpage from "../pageobjects/reviewPage"
import purchasePage from "../pageobjects/purchasePage"
import fs from "fs"

let e2eCredentials = JSON.parse(fs.readFileSync('test/testdata/e2eTest.json'))
describe('Ecommerce Application E2E', async () => {
  e2eCredentials.forEach(({products}) => {
    it('End to End Test', async () => {
        //var products = ['iphone X', 'Blackberry']
        await browser.url('/loginpagePractise/')
        loginPage.Login("rahulshettyacademy", "learning")
        //wait until button is displayed
        await shoppage.checkout.waitForExist()  //partial link text
        await shoppage.addProductsToCart(products)
        await browser.pause(3000)
        await shoppage.checkout.click()
        await browser.pause(3000)

        await reviewpage.listProductPrices()
        //string -> integer
        //javascript streams => array, map, reduce, filter
        //stream async mode example
        const sumOfProducts = await reviewpage.sumOfProducts()
        const totalIntValue = await reviewpage.totalFormattedPrice()

        chaiExpect(sumOfProducts).to.equal(totalIntValue)
        
        await reviewpage.checkoutReview.click()
        await purchasePage.country.setValue('Ind')
        await purchasePage.loadSearchCountry.waitForExist({reverse: true})
        await purchasePage.countryName.click()
        await purchasePage.purchase.click()
        await browser.pause(3000)
        await expect(purchasePage.success_message).toHaveText(expect.stringContaining('Success'))
    })
  })
})