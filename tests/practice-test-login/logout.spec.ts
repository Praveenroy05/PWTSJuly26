// spec: test-plan/practice-test-login-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test'
import { PracticeTestLoginPage } from './PracticeTestLoginPage'
import loginData from './practiceTestLoginData'

test.describe('Positive Login and Session Flows', () => {
    test('PTL-P03 - Logout ends the authenticated flow', async ({ page }) => {
        const loginPage = new PracticeTestLoginPage(page)

        // 1. Log in with student / Password123.
        await loginPage.launchURL(loginData.url)
        await loginPage.enterUsername(loginData.valid.username)
        await loginPage.enterPassword(loginData.valid.password)
        await loginPage.submit()
        await expect(page).toHaveURL(/\/logged-in-successfully\//)
        await expect(loginPage.logoutLink).toBeVisible()

        // 2. Click Log out.
        await loginPage.logout()
        await expect(page).toHaveURL(/\/practice-test-login\//)
        await expect(loginPage.usernameField).toBeVisible()
        await expect(loginPage.passwordField).toBeVisible()
        await expect(loginPage.successHeading).toBeHidden()
    })
})