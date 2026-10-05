// Locators and methods related the dashboard Page ONLY

import { Locator, Page } from "@playwright/test";

export class DashboardPage{

    private page:Page
    private products : Locator
    addToCartMsg : Locator
    homePageProductPrice : string | null
    viewPageProductName: Locator
    viewPageProductPrice : Locator
    productName: Locator
    addToCartBtn: Locator
    viewBtn: Locator



    constructor(page:Page){
        this.page = page
        this.products = this.page.locator("div.card-body")
        this.addToCartMsg = this.page.locator("#toast-container")
        this.homePageProductPrice = ""
        this.viewPageProductName = this.page.locator("div.rtl-text h2")
        this.viewPageProductPrice = this.page.locator("div.rtl-text h3")

        this.productName = this.page.locator("div.card-body b")
        this.addToCartBtn = this.page.getByText("Add To Cart")
        this.viewBtn = this.page.getByText("View")

    }

  // product.filter({hasText:productName})
 
  // filter() - Filter out the value depending on the criteria


  async searchProduct(productName:string, index:number){
    this.homePageProductPrice = await this.products.filter({hasText:`${productName}`}).locator("div.text-muted").textContent()
    await this.products.filter({hasText:`${productName}`}).locator("button").nth(index).click()
  }
  
    // async searchProduct(productName:string, index:number){
    //     await this.products.first().waitFor()

    //     const countOfProducts = await this.products.count()
    //     for(let i=0; i<countOfProducts; i++){
    //         const productText = await this.products.nth(i).locator("b").textContent() // div.card-body b
    //         if(productText == productName){
    //             this.homePageProductPrice = await this.products.nth(i).locator("div.text-muted").textContent()
    //             await this.products.nth(i).locator("button").nth(index).click()
    //             break
    //         }
    //     }
    // }

    // Just for utilising another way

    // async searchProduct1(productName:string, button:Locator){
    //     await this.productName.first().waitFor()
    //     const countOfProducts = await this.productName.count()
    //     for(let i=0; i<countOfProducts; i++){
    //         const productText = await this.productName.nth(i).textContent() // div.card-body b
    //         if(productText == productName){
    //             this.homePageProductPrice = await this.products.nth(i).locator("div.text-muted").textContent()
    //             await button.nth(i).click()
    //             break
    //         }
    //     }
    // }



}