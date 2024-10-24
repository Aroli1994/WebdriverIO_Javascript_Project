describe('Ecommerce Application', async () => {

    it('Login fail page Smoke', async function () {
        this.retries(2)
        await browser.url('/loginpagePractise/')
        await browser.maximizeWindow()
        console.log(await browser.getTitle())
        expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty Academy"))
        await $("#username").setValue('rahulshettyacademy')
        await $("input[name='username']").setValue('secondCSS')
        const password = $("//input[@name='password']")
        await password.setValue('learning')
        const signInBtn = $("#signInBtn")
        console.log(await signInBtn.getAttribute('value'))
        await signInBtn.click()
        console.log(await signInBtn.getAttribute('value'))
        await browser.waitUntil(async () => await signInBtn.getAttribute('value') === 'Sign In', { 
            timeout: 8000,
            timeoutMsg: 'Error message is not showing up'
        })
        console.log(await $(".alert-danger").getText())
        console.log(await signInBtn.getAttribute('value'))
        await expect($("p.text-center")).toHaveText(expect.stringContaining('username is rahulshettyacademy and Password is learning'))
    })

    xit('Login success page title', async () => {
        await browser.url('/loginpagePractise/')
        await browser.maximizeWindow()
        await $("input[name='username']").setValue('rahulshettyacademy')
        await $("//input[@name='password']").setValue('learning')
        await $("#signInBtn").click()
        //wait until checkout button is displayed
        await $("ul.ml-auto>li>a").waitForExist()
        await expect(browser).toHaveUrl(expect.stringContaining('shop'))
        await expect(browser).toHaveTitle(expect.stringContaining('ProtoCommerce'))
    })
})