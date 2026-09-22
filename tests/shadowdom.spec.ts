import {test, expect} from '@playwright/test'

test("Shadow dom element handling", async ({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/")

    await page.getByPlaceholder("Enter pizza name").fill("Shadow dom")
    await expect(page.getByPlaceholder("Enter pizza name")).toHaveValue("Shadow dom")

    // Note: For shadow dom element you cannot use XPATH
})