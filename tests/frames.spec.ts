// Frames
/*

Helping us in intergrating one html page to another html page by using <iframe>
as tag name



<html> - page.goto("")
...... - page.locator("")

    <iframe> - const framePage = page.frameLocator("")

        <html>  - framePage.locator("")

            <iframe> const nestedFramePage = framePage.frameLocator()

                <html> 
                ....... - nestedFramePage.locator("")
                </html>
                
            </iframe> - Nested Frame
        .....
        </html>
    </iframe>
......
</html>


*/

import {test, expect} from '@playwright/test'

test("Handling frames", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")

    // frameLocator("selector") - Which helps un in entering inside the iframe to select the elements

    const framePage = page.frameLocator("#singleframe")


    await framePage.locator("[type='text']").first().fill("Testing")
    await expect(framePage.locator("[type='text']").first()).toHaveValue("Testing")

    // Come back to the main/original page and perform any action - we can move
    // to the "page" fixture.

    await page.getByText("Iframe with in an Iframe", {exact:true}).click()

    const outerFrame = page.frameLocator("#Multiple iframe")
    const innerFrame = outerFrame.frameLocator(".iframe-container iframe")

    await innerFrame.locator("[type='text']").first().fill("Nested Frame")
    await expect(innerFrame.locator("[type='text']").first()).toHaveValue("Nested Frame")

    await page.getByText("Home", {exact: true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})