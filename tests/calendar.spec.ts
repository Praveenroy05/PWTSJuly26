import {test, expect} from '@playwright/test'
import { execArgv } from 'node:process'

test("Hanlding calendar", async ({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()


    let targetDay = "20"
    let targetMonth = "September"
    let targetYear = "2027"


    const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")

    /*

    (await monthPicker.textContent() != targetMonth) ||
            (await yearPicker.textContent() != targetYear)

    !((await monthPicker.textContent() == targetMonth) &&
            (await yearPicker.textContent() == targetYear))

    */

    while(true){

        if((await monthPicker.textContent() == targetMonth) &&
            (await yearPicker.textContent() == targetYear))
        {
            await page.getByText(targetDay, {exact:true}).click()
            break
        }
        else{
            await page.getByText("Next", {exact: true}).click()
        }

    
    }


    await page.waitForTimeout(3000)


})

// Object - Class