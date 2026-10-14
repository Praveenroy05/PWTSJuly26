# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SauceDemoCheckout.spec.ts >> complete checkout for Sauce Labs Backpack
- Location: tests\SauceDemoCheckout.spec.ts:9:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.complete-header')
Expected: "Thank you for your order!"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.complete-header')

```

```yaml
- banner:
  - button "Open Menu"
  - img "Open Menu"
  - text: Swag Labs
  - button "Cart, 1 items": "1"
  - text: "Checkout: Overview"
- main:
  - text: QTY Description 1
  - button "View details for Sauce Labs Backpack": Sauce Labs Backpack
  - text: "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99 Payment Information: SauceCard #31337 Shipping Information: Free Pony Express Delivery! Price Total Item total: $29.99 Tax: $2.40 Total: $32.39"
  - button "Cancel"
  - button "Finish"
- contentinfo:
  - list:
    - listitem:
      - link "X":
        - /url: https://x.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { randomInt } from 'node:crypto'
  2  | import { expect, test } from '@playwright/test'
  3  | import { CartPage } from '../pages/CartPage'
  4  | import { SauceDemoCheckoutPage } from '../pages/SauceDemoCheckoutPage'
  5  | import { SauceDemoInventoryPage } from '../pages/SauceDemoInventoryPage'
  6  | import { SauceDemoLoginPage } from '../pages/SauceDemoLoginPage'
  7  | import sauceDemoData from '../testdata/sauceDemo.json'
  8  | 
  9  | test('complete checkout for Sauce Labs Backpack', async ({ page }) => {
  10 |     const loginPage = new SauceDemoLoginPage(page)
  11 |     const inventoryPage = new SauceDemoInventoryPage(page)
  12 |     const cartPage = new CartPage(page)
  13 |     const checkoutPage = new SauceDemoCheckoutPage(page)
  14 | 
  15 |     await loginPage.launchURL(sauceDemoData.url)
  16 |     await loginPage.loginIntoApplication(sauceDemoData.username, sauceDemoData.password)
  17 |     await inventoryPage.addProductToCart(sauceDemoData.productName)
  18 |     await inventoryPage.openCart()
  19 | 
  20 |     await expect(cartPage.productInCart(sauceDemoData.productName)).toBeVisible()
  21 |     await cartPage.proceedToCheckout()
  22 | 
  23 |     await checkoutPage.fillCustomerInformation(
  24 |         `Casey${randomInt(1000, 10000)}`,
  25 |         `Tester${randomInt(1000, 10000)}`,
  26 |         String(randomInt(10000, 100000))
  27 |     )
  28 |     await checkoutPage.continueCheckout()
> 29 |     await expect(checkoutPage.confirmationMessage).toHaveText(sauceDemoData.confirmationMessage)
     |                                                    ^ Error: expect(locator).toHaveText(expected) failed
  30 | })
```