import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


const url = "https://rahulshettyacademy.com/client"
const username = "testnHNK@gmail.com"
const password = "Testing@1234"
const incorrectPassword = "Test"


test("Login into application using correct credentials", async ({page})=>{
    const lp = new LoginPage(page)
    await lp.launchURL(url)
    await lp.loginIntoApplication(username, password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test("Login into application using incorrect creds", async ({page})=>{
    const lp = new LoginPage(page)
    await lp.launchURL(url)
    await lp.loginIntoApplication(username, incorrectPassword)
    await expect(lp.homePageIdentifier).toBeVisible()
})

