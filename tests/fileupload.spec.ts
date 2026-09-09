import {test, expect} from '@playwright/test'

test("Handling file upload", async function({page}){
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    // setInputFiles("path of the file(s)")

    await page.locator("#filesToUpload").
    setInputFiles(["testdata/AILLM.jpg","testdata/AILLM1.jpg" ])

    await expect(page.locator("#fileList li").first()).toContainText("AILLM")
    await expect(page.locator("#fileList li").last()).toContainText("AILLM1")

})

// 


