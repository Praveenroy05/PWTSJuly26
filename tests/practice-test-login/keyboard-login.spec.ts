// spec: test-plan/practice-test-login-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test'
import { PracticeTestLoginPage } from './PracticeTestLoginPage'
import loginData from './practiceTestLoginData'

test.describe('Positive Login and Session Flows', () => {
    test('PTL-P02 - Submit valid credentials with Enter', async ({ page }) => {
        const loginPage = new PracticeTestLoginPage(page)

        // 1. Open the login page in a fresh context and enter student and Password123 in their respective fields.
        await loginPage.launchURL(loginData.url)
        await loginPage.enterUsername(loginData.valid.username)
        await loginPage.enterPassword(loginData.valid.password)
        await expect(loginPage.usernameField).toHaveValue(loginData.valid.username)
        await expect(loginPage.passwordField).toHaveValue(loginData.valid.password)

        // 2. Focus Password and press Enter.
        await loginPage.passwordField.focus()
        await loginPage.submitWithEnter()

        await expect(page).toHaveURL(/\/logged-in-successfully\//)
        await expect(loginPage.successConfirmation).toHaveText(loginData.successConfirmation)
        await expect(loginPage.logoutLink).toBeVisible()
    })
})