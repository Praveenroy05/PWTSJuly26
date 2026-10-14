import { Locator, Page } from '@playwright/test'

export class SauceDemoCheckoutPage {
    private firstName: Locator
    private lastName: Locator
    private postalCode: Locator
    private continueButton: Locator
    private finishButton: Locator
    confirmationMessage: Locator

    constructor(page: Page) {
        this.firstName = page.locator('#first-name')
        this.lastName = page.locator('#last-name')
        this.postalCode = page.locator('#postal-code')
        this.continueButton = page.locator('#continue')
        this.finishButton = page.locator('#finish')
        this.confirmationMessage = page.locator('.complete-header')
    }

    async fillCustomerInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.postalCode.fill(postalCode)
    }

    async continueCheckout() {
        await this.continueButton.click()
    }

    async finishOrder() {
        await this.finishButton.click()
    }
}