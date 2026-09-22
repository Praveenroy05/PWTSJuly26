// File Download - download event will appear on the page


// Step by step process to handle file download

// 1. Launch the url - page.goto("")
// 2. wait for "download" event to appear on the page without using await

// const downloadResult = page.waitForEvent("download")

// 3. Identify and click on the element which is responsibilie for generation 
// of "download" event on the page

// page.locator("").click()

// 4. Wait for the completion of the downloading

// const download = await downloadResult

// 5. By using the path module we can generate the path to store the downloable file

// 6. Save the downloaded file to a particular location inside your project
// 7. fs module - Validate if the filename is available inside any of the folder


// Download - 
// suggestedFilename() - Will return the filename of the downloaded file
// saveAs(filePath) - Save the downloaded file to the path that you have given


import {test, expect} from '@playwright/test'
import path from 'path'

test("Handling file download scenario", async ({page})=>{
    await page.goto("https://demoqa.com/upload-download")

    const downloadResult = page.waitForEvent("download")

    await page.locator("#downloadButton").click()

    const download = await downloadResult

    const downloadDir = path.join(__dirname, "../downloads")
    //console.log(downloadDir);

    // suggestedFilename() - Return the downloaded file name

    const fileName = await download.suggestedFilename()

    const filePath = await path.join(downloadDir, fileName)
    // console.log(filePath);

    await download.saveAs(filePath)

    await expect(filePath).toContain("sampleFile.jpeg")
    


    







})


