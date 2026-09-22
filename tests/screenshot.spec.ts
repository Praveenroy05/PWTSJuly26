import {test} from '@playwright/test'

// screenshot({path})

// 1. How to take the screenshot of a page

test("screenshot of the page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path:"screenshot/page.jpeg"})
})

// 2. How to take the screenshot of an element

test("screenshot of an element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder("Enter Name").screenshot({path:"screenshot/element.jpeg"})
})

// 3. How to take the screenshot of full page

test("screenshot of full page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path:"screenshot/fullPage.jpeg", fullPage:true})
})