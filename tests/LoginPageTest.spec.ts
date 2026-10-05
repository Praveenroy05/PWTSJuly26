import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


const url = "https://rahulshettyacademy.com/client"
const username = "testnHNK@gmail.com"
const password = "Testing@1234"
const incorrectPassword = "Test"

let lp : any

test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    await lp.launchURL(url)
})

test("Login into application using correct credentials",{tag:'@smoke'}, async ()=>{
    await lp.loginIntoApplication(username, password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test("Login into application using incorrect creds", async ()=>{
    await lp.loginIntoApplication(username, incorrectPassword)
    await expect(lp.errorMessage).toHaveText("Incorrect email or password.")
})

