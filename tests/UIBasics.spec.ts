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