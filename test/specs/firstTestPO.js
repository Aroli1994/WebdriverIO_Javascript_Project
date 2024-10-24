//const loginpage = require('../pageobjects/loginPage')
import loginpage from "../pageobjects/loginPage"
import shoppage from "../pageobjects/shopPage"
import fs from "fs"

let credentials = JSON.parse(fs.readFileSync('test/testdata/loginTest.json'))
describe('Ecommerce Application', async () => {
  credentials.forEach(({username, password}) => {
    it('Login fail page', async () => {
        await browser.url('/loginpagePractise/')
        console.log(await browser.getTitle())
        expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty Academy"))
        //console.log(await loginpage.signIn.getAttribute('value'))
        //await loginpage.Login("rahulshettyacademy", "learning123")
        await loginpage.Login(username, password)
        await loginpage.signIn.click()
        //console.log(await loginpage.signIn.getAttribute('value'))
        await browser.waitUntil(async () => await loginpage.signIn.getAttribute('value') === 'Sign In', { 
            timeout: 8000,
            timeoutMsg: 'Error message is not showing up'
        })
        console.log(await loginpage.alert.getText())
        //console.log(await loginpage.signIn.getAttribute('value'))
        await expect(loginpage.textInfo).toHaveText(expect.stringContaining('username is rahulshettyacademy and Password is learning'))
    })
  })

    xit('Login success page title', async () => {
        await browser.url('/loginpagePractise/')
        await loginpage.Login("rahulshettyacademy", "learning")
        //wait until checkout button is displayed
        await shoppage.checkout.waitForExist()
        await expect(browser).toHaveUrl(expect.stringContaining('shop'))
        await expect(browser).toHaveTitle(expect.stringContaining('ProtoCommerce'))
    })
})