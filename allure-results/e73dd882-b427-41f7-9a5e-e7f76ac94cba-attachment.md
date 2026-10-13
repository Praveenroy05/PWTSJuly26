# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPageTest.spec.ts >> Login Page Test >> @regression Login into application using incorrect creds
- Location: tests\LoginPageTest.spec.ts:27:9

# Error details

```
Test timeout of 10000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 10000ms exceeded.
Call log:
  - navigating to "https://rahulshettyacademy.com/client", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e28]:
      - paragraph [ref=e29]:
        - generic [ref=e30]: Register to sign in with your personal account
      - generic [ref=e31]:
        - heading "Log in" [level=1] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Email
            - textbox "email@example.com" [ref=e36]
          - generic [ref=e37]:
            - generic [ref=e38]: Password
            - textbox "enter your passsword" [ref=e39]
          - button "Login" [ref=e40] [cursor=pointer]
        - link "Forgot password?" [ref=e41] [cursor=pointer]:
          - /url: "#/auth/password-new"
        - paragraph [ref=e42] [cursor=pointer]: Don't have an account? Register here
  - generic [ref=e43]:
    - heading "Why People Choose Us?" [level=1] [ref=e46]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e49]: 
        - generic [ref=e51]:
          - heading "3546540" [level=1]
          - paragraph [ref=e52]: Successfull Orders
      - generic [ref=e53]:
        - generic [ref=e54]: 
        - generic [ref=e56]:
          - heading "37653" [level=1]
          - paragraph [ref=e57]: Customers
      - generic [ref=e58]:
        - generic [ref=e59]: 
        - generic [ref=e61]:
          - heading "3243" [level=1]
          - paragraph [ref=e62]: Sellers
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e65]: 
        - generic [ref=e67]:
          - heading "4500+" [level=1]
          - paragraph [ref=e68]: Daily Orders
      - generic [ref=e69]:
        - generic [ref=e70]: 
        - generic [ref=e72]:
          - heading "500+" [level=1]
          - paragraph [ref=e73]: Daily New Customer Joining
```

# Test source

```ts
  1  | // Locators and methods related the Login Page ONLY
  2  | 
  3  | import { Locator, Page } from '@playwright/test'
  4  | 
  5  | export class LoginPage{
  6  | 
  7  |     //Locators - properties
  8  | 
  9  |     private page: Page
  10 |     private email: Locator
  11 |     private password: Locator
  12 |     private loginBtn: Locator
  13 |     errorMessage: Locator
  14 |     homePageIdentifier : Locator
  15 | 
  16 |     constructor(page:Page){
  17 |         this.page = page
  18 |         this.email = this.page.getByPlaceholder("email@example.com")
  19 |         this.password = this.page.getByPlaceholder("enter your passsword")
  20 |         this.loginBtn = this.page.locator("#login")
  21 |         this.homePageIdentifier = this.page.locator("[routerlink='/dashboard/']")
  22 |         this.errorMessage = this.page.locator("#toast-container")
  23 |     }
  24 | 
  25 |     // Methods
  26 | 
  27 |     async launchURL(url:string){
> 28 |         await this.page.goto(url)
     |                         ^ Error: page.goto: Test timeout of 10000ms exceeded.
  29 |     }
  30 | 
  31 |     async loginIntoApplication(username:string, password: string){
  32 |         await this.email.fill(username)
  33 |         await this.password.fill(password)
  34 |         await this.loginBtn.click({timeout: 30000})
  35 |     }
  36 | 
  37 | }
  38 | 
  39 | 
  40 | 
```