import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import path from 'path'
import { ExcelUtils } from '../utils/ExcelUtils';

const filePath = path.join(__dirname, "../testdata/excel.xlsx")
const sheetName = "Login"

let datas
try{
  datas = ExcelUtils.getDataFromExcel(filePath, sheetName)
}
catch(e){
  console.log(e);
}

//console.log(datas);



let loginPage: LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
})

for(let product of datas!){
    test(`Select and add the product to the cart for  ${product.productName}`, async ()=>{
        await loginPage.launchURL(product.url)
        await loginPage.loginIntoApplication(product.username, product.password)
        await test.step("Search  and a product to the cart", async()=>{
          await dashboardPage.searchProduct(product.productName, 1)
      })
      await expect(dashboardPage.addToCartMsg).toHaveText(product.cartSuccessMsg)
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