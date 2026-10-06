import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import datas from '../testdata/products.json'
// console.log(datas);




let loginPage: LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
})

for(let product of datas){
    test(`Select and view the details of the product for ${product.productName}`, async ()=>{
        await loginPage.launchURL(product.url)
        await loginPage.loginIntoApplication(product.username, product.password)
        await dashboardPage.searchProduct(product.productName, 0)
        await expect(dashboardPage.viewPageProductName).toHaveText(product.productName)
        await expect(dashboardPage.viewPageProductPrice).toHaveText(dashboardPage.homePageProductPrice!)
    })
}



// table
// MCP - AI Agent
// Calendar - 
// Custom fixture
// Data - driven
// API test cases


/*
let dd = 
[
  {
    url: 'https://rahulshettyacademy.com/client',
    username: 'testnHNK@gmail.com',
    password: 'Testing@1234',
    productName: 'ADIDAS ORIGINAL'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    username: 'testnHNK@gmail.com',
    password: 'Testing@1234',
    productName: 'ZARA COAT 3'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    username: 'testnHNK@gmail.com',
    password: 'Testing@1234',
    productName: 'iphone 13 pro'
  }
]

for (let product of dd){
    console.log(product.productName);
}

*/