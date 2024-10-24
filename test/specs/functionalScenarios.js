import { expect as chaiExpect, assert } from 'chai'

describe('Functional Test on application', async () => {
    xit('Scrolling and mouse hover', async () => {
        await browser.url('/AutomationPractice/')
        await browser.maximizeWindow()
        await $("#mousehover").scrollIntoView()
        await browser.pause(2000)
        await $("#mousehover").moveTo()
        await browser.waitUntil(async () => await $("a[href*='top']").isDisplayed(), {
            timeout: 8000,
            timeoutMsg: 'Top link is not shown'
        })
        await browser.pause(2000)
        await $("a[href*='top']").click()
    })

    it('Javscript alert handling', async () => {
        //await browser.url('http://the-internet.herokuapp.com/javascript_alerts')

        await browser.url("http://the-internet.herokuapp.com/");
       // await browser.maximizeWindow()
       await browser.pause(2000);
       $("//a[normalize-space()='JavaScript Alerts']").click();
       await browser.pause(2000);
       $(".//button[text()='Click for JS Confirm']").click();
    // browser.waitUntil( async () => { 
    //     await $(".//button[text()='Click for JS Confirm']").click(),
    //     console.log(await browser.isAlertOpen())
    // }, {
    //     timeout: 5000,
    //     timeoutMsg: "element disappaered quickly"
    // })
        await browser.pause(2000)
        console.log(await browser.isAlertOpen())
        await browser.pause(3000)
        await browser.acceptAlert()

//         console.log(await browser.isAlertOpen()); // outputs: false
// await browser.execute('window.alert()');
// console.log(await browser.isAlertOpen());
// await browser.pause(5000)
        // const alertButton = $("button")
        // //await alertButton.scrollIntoView()
        // await $("button").doubleClick()
        // await browser.pause(3000)
        // console.log(await browser.isAlertOpen())
        // await alertButton.waitForExist()
        // chaiExpect(await browser.isAlertOpen()).to.be.true
        // console.log(await browser.getAlertText())
        // chaiExpect(await browser.getAlertText()).to.deep.equals("Press 'OK' or 'Cancel' button!")
        // await browser.acceptAlert()
    })
})