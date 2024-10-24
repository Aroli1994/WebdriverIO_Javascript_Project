describe('Windows and Frames miscallenous', async () => {
   xit('Parent and child window switch', async () => {
        await browser.url('/loginpagePractise/')
        await $(".blinkingText").click()
      
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
        console.log(await browser.getTitle())
       
        await browser.switchToWindow(handles[1])
        console.log(await browser.getTitle())

        
        await browser.pause(3000)
        //const headerEle = $('div[class="inner-box"] h1')
        //console.log(await headerEle.getText())
        // const email = $("#showHeader+div ul.clearfix li")
        // console.log(await email.getText())

        browser.waitUntil(async () => await $(".theme-btn.register-btn").isExisting() == true, {
            timeout: 8000,
            timeoutMsg: "element not found in child window"
        })

        console.log(await $(".theme-btn.register-btn").isExisting())

        await $(".theme-btn.register-btn").click()

        browser.closeWindow()
        await browser.switchToWindow(handles[0])
       
    })

    it('Child Window', async () => {    
        // launch url
        await browser.url('https://secure.indeed.com/account/login')  
        //identify element then click
        await $('#apple-signin-button').click()
        //get all window handle ids in list
        var l = await browser.getWindowHandles()
        //switch to child window
        await browser.switchToWindow(l[1])
        //get page title of child window
        console.log(await browser.getTitle() + ' - Page title of child window')
        await $("#account_name_text_field").setValue('6361094954')
        await browser.pause(4000)
        //close child window
        await browser.closeWindow()
        //switch to parent window
        await browser.switchToWindow(l[0])
        //get page title of parent window
        console.log(await browser.getTitle() + ' - Page title of parent window')      
     });
})