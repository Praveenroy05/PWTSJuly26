import { Locator, Page } from '@playwright/test'

export class CartPage {
    private page: Page
    private cartItems: Locator
    private checkoutButton: Locator

    constructor(page: Page) {
        this.page = page
        this.cartItems = this.page.locator('.cart_item')
        this.checkoutButton = this.page.locator('#checkout')
    }

    productInCart(productName: string) {
        return this.cartItems.filter({ hasText: productName })
    }

    async proceedToCheckout() {
        await this.checkoutButton.click()
    }
}