import { Locator, Page } from '@playwright/test'

export class SauceDemoInventoryPage {
    private page: Page
    private products: Locator
    private cartLink: Locator

    constructor(page: Page) {
        this.page = page
        this.products = this.page.locator('.inventory_item')
        this.cartLink = this.page.locator('.shopping_cart_link')
    }

    async addProductToCart(productName: string) {
        await this.products.filter({ hasText: productName }).getByRole('button', { name: 'Add to cart' }).click()
    }

    async openCart() {
        await this.cartLink.click()
    }
}