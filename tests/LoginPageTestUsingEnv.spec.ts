import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


let lp : any

test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    await lp.launchURL(process.env.baseURL)
})

test("@smoke @regression Login into application using correct credentials", async ()=>{
    await lp.loginIntoApplication(process.env.email, process.env.password)
    await expect(lp.homePageIdentifier).toBeVisible()
})


// 3 - smoke
// 3 - Regression
