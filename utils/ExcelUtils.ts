import xlsx from 'xlsx'

export class ExcelUtils{

    // filePath - excel.xsx
    // sheetName - Login

    // try{} catch{}


    static getDataFromExcel(filePath:string, sheetName: string){
        try{
            const wb = xlsx.readFile(filePath)
            const sheet = wb.Sheets[sheetName]
            const data = xlsx.utils.sheet_to_json(sheet)
            return data
        }
        catch(exception){
            console.log("We have an issue in the excel having", exception);
        }


    }


}

// .env
