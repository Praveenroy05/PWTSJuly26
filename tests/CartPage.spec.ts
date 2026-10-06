
import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import loginData from '../testdata/login.json'

let product = "ABC"



test("Cart page", async ({page})=>{
    let lp = new LoginPage(page) // Object for LoginPage.ts
    let dp = new DashboardPage(page) // Object for DashboardPage.ts
    await lp.launchURL(loginData.url)
    await lp.loginIntoApplication(loginData.username, loginData.password)
    await dp.searchProduct(product, 1)
    // click on the cart page link
    // ........ cart page


})