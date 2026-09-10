// Multiple tabs or windows - "popup" event appears on the page

// Step by step process to handle multiple tabs/windows using PW:

// 1. Launch the url
// 2. wait for "popup" event to appear on the page without using await
// const page1 = page.waitForEvent("popup")
// 3. Identify and click on the element which is responsible for generation of "popup"
// event on the page.
// 4. We can store the final result of "popup" event in a variable
// Ex:  const newPage = await page1

// 5. Perform any action on the new tab/window, we must use "newPage" object
// 6. Come back to the main/original page and perform nay action - we can move
// to the "page" fixture.


import {test, expect} from '@playwright/test'

test("Handlimg multiple windows", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")

    // 2. wait for "popup" event to appear on the page without using await
    const page1 = page.waitForEvent("popup")

    // 3. Identify and click on the element which is responsible for generation of "popup"
    //  event on the page.
    await page.locator("#Tabbed button").click()

    // 4. We can store the final result of "popup" event in a variable
    const newPage = await page1
    //console.log(newPage);
    // newPage - is the control of the newely create page

    // 5. Perform any action on the new tab/window, we must use "newPage" object

    await newPage.getByText("Downloads", {exact: true}).click()
    await expect(newPage.locator("h2#bindings")).toContainText("WebDriver Language Bindings")
    
    await page.bringToFront()
    //await page.waitForTimeout(2000)

    // 6. Come back to the main/original page and perform nay action - we can move
    // to the "page" fixture.

    await page.getByText("Home", {exact: true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()



})