import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';


const url = "https://rahulshettyacademy.com/client"
const username = "testnHNK@gmail.com"
const password = "Testing@1234"
const productName = "ZARA COAT 3"


let loginPage: LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(username, password)
})

test("Select and add the product to the cart", async ()=>{
    await dashboardPage.searchProduct(productName, 1)
    await expect(dashboardPage.addToCartMsg).toHaveText("Product Added To Cart")
})

test("Select and view the details of the product", async ()=>{
    await dashboardPage.searchProduct(productName, 0)
    await expect(dashboardPage.viewPageProductName).toHaveText(productName)
    await expect(dashboardPage.viewPageProductPrice).toHaveText(dashboardPage.homePageProductPrice!)
})

