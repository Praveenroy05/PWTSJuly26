import {test, expect} from '@playwright/test'

// browser
test("Title",  async function({page}){

  // launch the url
  // fill the username
  // fill the password
  // click on login button
  // Validate if the logout button is displaying or not

  await page.goto("https://practicetestautomation.com/practice-test-login/")
  await page.locator("#username").fill("student")
  await page.locator("#password").fill("password123")
  await page.locator("#submit").click()
  await expect(page.getByRole("button", {name: "Log out"})).toBeVisible()



  // Promise is an object - pending, successful, rejected

  // Note: await is NOT to WAIT FOR AN ELEMENT to display on the page - await is making sure
  // that the step should be completed before it moves to the next line of code.
})

// async-await

// JS & TS are asynchronous - Make it in queue - sequential

// Fixture