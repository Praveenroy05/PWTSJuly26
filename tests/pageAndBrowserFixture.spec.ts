// Fixture - It is a global object which help us in performing some setup and tear down
import {test, expect} from '@playwright/test'

// page
// browser
// context
// request - API Testing


test("Page Fixture", async ({page})=>{
    await page.goto("https://Google.com")
})

test("Browser Fixture", async ({browser})=>{

    let context = await browser.newContext() // Creating a browser context -Instance of a browser
    let page = await context.newPage() // Creates a new page in the browser context
    await page.goto("https://google.com")
    let page1 = await context.newPage()
    await page1.goto("https://facebook.com")

    let context1 = await browser.newContext() // Creating a browser context -Instance of a browser
    let page2 = await context1.newPage() 
    await page2.goto("https://linkedin.com")
})

// 1. page fixture will identify ONLY a single page on the browser whereas browser
// fixture will represent the complete browser instance - it may have nore than one page as well

// 2. page fixture will automatically launch the browser and create a page on the
// browser whereas browser fixture will not have acapability of launching the browser
// automatically.


// dashboard page - 2 test cases
// login into application - both of the case

// view - add



