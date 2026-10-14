import { randomInt } from 'node:crypto'
import { expect, test } from '@playwright/test'
import { CartPage } from '../pages/CartPage'
import { SauceDemoCheckoutPage } from '../pages/SauceDemoCheckoutPage'
import { SauceDemoInventoryPage } from '../pages/SauceDemoInventoryPage'
import { SauceDemoLoginPage } from '../pages/SauceDemoLoginPage'
import sauceDemoData from '../testdata/sauceDemo.json'

test('complete checkout for Sauce Labs Backpack', async ({ page }) => {
    const loginPage = new SauceDemoLoginPage(page)
    const inventoryPage = new SauceDemoInventoryPage(page)
    const cartPage = new CartPage(page)
    const checkoutPage = new SauceDemoCheckoutPage(page)

    await loginPage.launchURL(sauceDemoData.url)
    await loginPage.loginIntoApplication(sauceDemoData.username, sauceDemoData.password)
    await inventoryPage.addProductToCart(sauceDemoData.productName)
    await inventoryPage.openCart()

    await expect(cartPage.productInCart(sauceDemoData.productName)).toBeVisible()
    await cartPage.proceedToCheckout()

    await checkoutPage.fillCustomerInformation(
        `Casey${randomInt(1000, 10000)}`,
        `Tester${randomInt(1000, 10000)}`,
        String(randomInt(10000, 100000))
    )
    await checkoutPage.continueCheckout()
    await checkoutPage.finishOrder()

    await expect(checkoutPage.confirmationMessage).toHaveText(sauceDemoData.confirmationMessage)
})