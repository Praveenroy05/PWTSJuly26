import { Locator, Page } from '@playwright/test'

export class PracticeTestLoginPage {
    readonly usernameField: Locator
    readonly passwordField: Locator
    readonly submitButton: Locator
    readonly errorMessage: Locator
    readonly successHeading: Locator
    readonly successConfirmation: Locator
    readonly logoutLink: Locator

    constructor(private readonly page: Page) {
        this.usernameField = page.getByRole('textbox', { name: 'Username' })
        this.passwordField = page.getByRole('textbox', { name: 'Password' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.errorMessage = page.locator('#error')
        this.successHeading = page.getByRole('heading', { name: 'Logged In Successfully' })
        this.successConfirmation = page.getByText('Congratulations student. You successfully logged in!', { exact: true })
        this.logoutLink = page.getByRole('link', { name: 'Log out' })
    }

    async launchURL(url: string) {
        await this.page.goto(url)
    }

    async enterUsername(username: string) {
        await this.usernameField.fill(username)
    }

    async enterPassword(password: string) {
        await this.passwordField.fill(password)
    }

    async submit() {
        await this.submitButton.click()
    }

    async submitWithEnter() {
        await this.passwordField.press('Enter')
    }

    async logout() {
        await this.logoutLink.click()
    }
}