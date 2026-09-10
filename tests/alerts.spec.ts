// Alert - "dialog" event appeared on the page

// 1. Simple alert - Only one button
// 2. Confirm Alert - Yes/No, Ok/Cancel, Submit/Cancel
// 3. Prompt Alert - Along with Yes/No - textbox as well


// "dialog" event - Alert/Popup
// "popup" event - Child window/New page/New tab
// "download" event - File download


// Step by step process to handle alert

// 1. Launch the url
// 2. Wait for "dialog" event to appear on the page without using await
// 3. Click on the element which is responsible for generation of alert

// In playwright there is a class known as Dialog

// 1. dialog.accept(argument?) - To click on Yes/Ok/Submit
// 2. dialog.dismiss() - To click on Cancel/No
// 3. dialog.message() - To get the text displayed on the alert


import {test, expect} from '@playwright/test'

test("Handling alerts", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")

    // page.on()
    // page.waitForEvent()

    let prompt = "Alert"

    page.on("dialog",async (dialog)=>{
        await console.log(dialog.message())
        await dialog.accept(prompt)
    })

    await page.locator("#alertButton").click()
    await page.locator("#confirmButton").click()

    await expect(page.locator("#confirmResult")).toHaveText("You selected Ok")

    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toHaveText(`You entered ${prompt}`)

})


