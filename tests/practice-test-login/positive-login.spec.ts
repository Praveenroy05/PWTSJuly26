// spec: test-plan/practice-test-login-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test'
import { PracticeTestLoginPage } from './PracticeTestLoginPage'
import loginData from './practiceTestLoginData'

test.describe('Positive Login and Session Flows', () => {
    test('PTL-P01 - Login succeeds with published credentials', async ({ page }) => {
        const loginPage = new PracticeTestLoginPage(page)

        // 1. Open the login URL in a fresh browser context.
        await loginPage.launchURL(loginData.url)
        await expect(page).toHaveTitle(loginData.pageTitle)
        await expect(loginPage.usernameField).toBeVisible()
        await expect(loginPage.passwordField).toBeVisible()
        await expect(loginPage.submitButton).toBeVisible()

        // 2. Enter student and Password123, then click Submit.
        await loginPage.enterUsername(loginData.valid.username)
        await loginPage.enterPassword(loginData.valid.password)
        await loginPage.submit()

        await expect(page).toHaveURL(/\/logged-in-successfully\//)
        await expect(loginPage.successHeading).toBeVisible()
        await expect(loginPage.successConfirmation).toHaveText(loginData.successConfirmation)
        await expect(loginPage.logoutLink).toBeVisible()
    })
})