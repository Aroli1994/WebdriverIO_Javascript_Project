import { expect as chaiExpect } from 'chai'

describe('UI Controls Test Suite', async () => {
    xit('Radio Button Controls', async () => {
        await browser.url('/loginpagePractise/')
        await browser.maximizeWindow()
        await browser.deleteAllCookies()
        await $("input[name='username']").setValue('rahulshettyacademy')
        await $("//input[@name='password']").setValue('learning')
        const radioButtons = $$(".radiotextsty")
        radioButtons[1].click()   //click on User radio button
        const modal = $(".modal-body")
        modal.waitForDisplayed()
        await $("#cancelBtn").click()
        console.log(await $$(".customradio")[0].$("input").isSelected())  //chaining locators and checking Admin radio button is selected
        await $$(".customradio")[1].$("input").click()  //chaining locators & click on User radio button
        await $("#okayBtn").click()
        console.log(await $$(".customradio")[1].$("input").isSelected())  //checking User radio button is selected
        //validate pop up not shown up when you select Admin radio button
        await $$(".customradio")[0].$("span").click()
        await expect(modal).not.toBeDisplayed()

        const dropdown = $("select.form-control")
        await dropdown.selectByAttribute('value', 'teach')
        await dropdown.selectByVisibleText('Consultant')
        await dropdown.selectByIndex(0)
        console.log(await dropdown.getValue())
        //chai assertions
        //expect(await dropdown.getValue()).to.equal('stud')
        chaiExpect(await dropdown.getValue()).to.eql('stud')
    })

    xit('Dynamic Dropdown Controls', async () => {
        await browser.url('/AutomationPractice/')
        await browser.maximizeWindow()
        await $("#autocomplete").setValue('ind')
        await browser.pause(3000)
        let items = $$(".ui-menu-item div")
        await items[0].waitForDisplayed()
        console.log(await items.length)
        await items.forEach(async item => {
            console.log(await item.getText())
            if((await item.getText()) === 'India') {
                await item.click()
            }
        })
        console.log("value selected is = ", await $("#autocomplete").getValue())
        chaiExpect(await $("#autocomplete").getValue()).to.eql('India')
    })

    it('Checkbox Controls Smoke', async () => {
        await browser.url('/AutomationPractice/')
        await browser.maximizeWindow()
        const checkboxes = $$("[type='checkbox']")
        await checkboxes[1].click()
        console.log(await checkboxes[1].isSelected())
        chaiExpect(await checkboxes[1].isSelected()).to.be.true
        await browser.saveScreenshot("screenshot.png")
        await browser.pause(3000)
    })
})