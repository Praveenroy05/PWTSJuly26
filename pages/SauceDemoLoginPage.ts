import { Locator, Page } from '@playwright/test'

export class SauceDemoLoginPage {
    private page: Page
    private username: Locator
    private password: Locator
    private loginButton: Locator

    constructor(page: Page) {
        this.page = page
        this.username = this.page.locator('#user-name')
        this.password = this.page.locator('#password')
        this.loginButton = this.page.locator('#login-button')
    }

    async launchURL(url: string) {
        await this.page.goto(url)
    }

    async loginIntoApplication(username: string, password: string) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }
}