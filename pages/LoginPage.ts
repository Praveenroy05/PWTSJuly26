// Locators and methods related the Login Page ONLY

import { Locator, Page } from '@playwright/test'

export class LoginPage{

    //Locators - properties

    private page: Page
    private email: Locator
    private password: Locator
    private loginBtn: Locator
    errorMessage: Locator
    homePageIdentifier : Locator

    constructor(page:Page){
        this.page = page
        this.email = this.page.getByPlaceholder("email@example.com")
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginBtn = this.page.locator("#login")
        this.homePageIdentifier = this.page.locator("[routerlink='/dashboard/']")
        this.errorMessage = this.page.locator("#toast-container")
    }

    // Methods

    async launchURL(url:string){
        await this.page.goto(url)
    }

    async loginIntoApplication(username:string, password: string){
        await this.email.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

}


