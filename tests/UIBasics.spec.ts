// testfile.spec.ts
// testfile.test.ts

// 1. How to enter an "input" inside the textbox
// 2. Validate if the input field have a value "input"
// 3. Click on the element

import {test, expect} from '@playwright/test'


test("Login into application using valid credentials", async ({page})=>{

    // Goto the url 
    // fill the username
    // fill the password
    // click on submit button
    // expect if the dashboard page is visible

    // goto(url:string) - It helps us in launching the url on the given browser
    // url should consits of http/https.

    // fill("string")  - Set the value inside the input field
    // expect()
    // click()


    await page.goto("https://practicetestautomation.com/practice-test-login/")

    // await page.setViewportSize({
    //     width: 1000,
    //     height: 500
    // })

    await page.getByRole("textbox", {name:'Username'}).fill("student")

    // toHaveValue("value") - Checks if the INPUT field is having the value as "value"

    await expect(page.getByRole("textbox", {name:'Username'})).toHaveValue("student")

    // pressSequentially("string") - Set the value inside the input field character by character
    await page.getByLabel("Password").pressSequentially("Password123")

    await page.getByText("Submit", {exact: true}).nth(0).click()

    // 1. There should be an element which should have a text value as "Logged In Successfully"
    // 2. There should be an element which contains a text value as "Congratualtions".
    // 3. The logout button should be visible on the page

    // 1. toHaveText("Exact text")
    // 2. toContainsText("partial text")
    // 3. toBeVisible()
    // expect(25).toBe(20) - Non retrying assertion

    await expect(page.locator("h1.post-title")).toContainText("Successfully")
    await expect(page.getByText("Log out", {exact: true})).toBeVisible()


})


// Select radio/checkbox

test("Handling radio button and checkbox", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // click() - Click on an element
    // check() - It validates if the element is already checked/selected,
    // if it is not selected then only it click on an element. Only work for
    // radio button or checkbox

    // uncheck() - It validates if the element is not already checked/selected,
    // if it is selected then only it click on an element. Only work for
    // radio button or checkbox

    const radioBtn = page.getByRole('radio', {name:'Female'})

    await radioBtn.check()

    // toBeChecked() - Which validates if the radio button or checkbox is checked or not

    await expect(radioBtn).toBeChecked()

    const checbox = page.getByRole('checkbox', {name:'Monday'})
    await expect(checbox).not.toBeChecked()

    // await checbox.check()

    // await expect(checbox).toBeChecked()

    await checbox.uncheck()

    await expect(checbox).not.toBeChecked()


    //  Write a logic to check all the checkbox

})

// Get the text value of an element and multiple elements

// drop down - India

test("Get the text from an element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // textContent() - return the text value from the matching element even if 
    // the element is not visible on the page
    // innerText() - return the text value from the matching element from only 
    // the visible element on the page 

    const text = await page.locator("h1.title").textContent()
    console.log(text)
    
    // Get the text value from multiple elements

    // allTextContents()
    // allInnerTexts()

    // Note: Whenever you write a locator which is matching 
    // with multiple element on the webpage, the auto waiting 
    // concept doesnot apply for those locators.

    const allTexts = await page.locator("h2.title").allInnerTexts()
    console.log(allTexts);
    
})