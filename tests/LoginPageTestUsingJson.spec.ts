import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../testdata/login.json'
// console.log(loginData);

let lp : any

test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    await lp.launchURL(loginData.url)
})

test("Login into application using correct credentials",{tag:'@smoke'}, async ()=>{
    await lp.loginIntoApplication(loginData.username, loginData.password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test("Login into application using incorrect creds", async ()=>{
    await lp.loginIntoApplication(loginData.username, loginData.incorrectPassword)
    await expect(lp.errorMessage).toHaveText("Incorrect email or password.")
})


// let i = [{1:2}, {2:3}, {4:5}]
