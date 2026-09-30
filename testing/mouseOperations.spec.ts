// click - click()
// double click - dblclick()
// right click - click({button:'right'})
// Mouse hover - hover()
// Scrolling - scrollIntoViewIfNeeded()
// Drag and drop - Locator.dragTo(Locator)

import {test, expect} from '@playwright/test'

test("Handling right click and double click", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

    await page.getByText("Double-Click Me To See Alert", {exact:true}).dblclick()

    await page.getByText("right click me", {exact:true}).click({button:'right'})
    await page.waitForTimeout(2000)
    
    await page.getByText("Delete", {exact:true}).click()
    await page.waitForTimeout(2000)

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole("button", {name:'Copy Text'}).dblclick()
    await expect(page.locator("#field2")).toHaveValue("Hello World!")

    // Note: Playwright auto handles the alert/popup/dialog event
    // Note Playwright by default perform scrolling on the page
})

test("Handling mouse over on an element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    await page.getByText("Travel Policies", {exact: true}).highlight()
    await page.waitForTimeout(2000)
    await page.getByText("Travel Policies", {exact: true}).hover()

    await expect(page.getByTestId("test-id-Baggage Information")).toContainText("Baggage Information")
})

// highlight() - Highlight the element 

test("Scrolling the page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByRole('link', {name:'Download Files'}).scrollIntoViewIfNeeded()

    await page.getByRole('link', {name:'Download Files'}).click()

    await page.locator("#input3").fill("Scoll down")
    await expect(page.locator("#input3")).toHaveValue("Scoll down")

    await page.locator("textarea#inputText").fill("Scrolled Up")
    await expect(page.locator("textarea#inputText")).toHaveValue("Scrolled Up")

})

test("Handling drag and drop", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const sourceElement = page.locator("div#draggable")
    const targetElement = page.locator("div#droppable")

    // await sourceElement.dragTo(targetElement)

    await sourceElement.hover()
    await page.mouse.down()
    await targetElement.hover()
    await page.mouse.up()

    await expect(page.locator("div#droppable p")).toHaveText("Dropped!")


})

// Upload the file / dialog event - alert handling
