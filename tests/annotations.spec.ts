// Annotation

/*

1. test.skip() - Marks the test as irrelevant. Playwright does run such tests.

2. test.fail() - Marks the test as failing test case.

3. test.fixme() - Marks the test as failing test case. Playwright does run such tests.

4. test.only() - PW will run only those test cases which have been marled as test.only()

5. test.slow() - Mark the test as slow and triple the timeout that you have given globally.

6. test.step() - Provide the title of the test step

7. test.describe() - Group the test cases and display the title of the describe inside the report

8. test.describe().configure()


*/

import {test, expect} from '@playwright/test'


test.skip("Test1", async()=>{
    console.log("Test1");
    
})

test.fixme("Test2", async()=>{
    console.log("Test2");
    
})

test.fail("Test3", async()=>{
    expect(25).toBe(20)
    console.log("Test3");  
})

test("Test4", async()=>{
    console.log("Test4");
    
})

test("Test5", async ({page})=>{
    //test.slow()
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("#username").fill("student")
    await expect(page.getByRole("textbox", {name:'Username'})).toHaveValue("student")
    await page.getByLabel("Password").pressSequentially("Password123")
    await page.getByText("Submit", {exact: true}).nth(0).click()
})