// String - Sequence of characters - string, text, word

    // 1. Single Quote ('') - String Literal
    // 2. Double Quote ("") - String Literal
    // 3. Backtick (``) - Template Literal


    let singleQuote = 'This is a single quote string'
    let doubleQuote :string = "This is a double quote string"

    // There are 2 main purpose of defining the string by using backtick

    // 1. Multi-line string

    let multiline = `This is
    a multiline
    string`

    // 2. For string parameterisation - Calling a variable inside a string
    // ${variableName} - Data driven testing in PW

    let age  = 40

    let message = `Your age is ${age}`
    console.log(message);

    console.log("*********************************")

    let str = "Welcome To Typescript"

    // 1. length - Return the number of characters in string
    // stringName.length

    console.log(str.length)


    // 2. charAt(index) - return the character at a specified index 

    console.log(str.charAt(5))

    // "abcdabcd" - a2b2c2d2

    // 3. concat(str1, str2) - merges all the strings and return us a new string

    console.log(str.concat(" Hello", " Javascript"))
    console.log(str)

    // 4. includes(searchString, startIndex?)
    // 5. indexOf(searchValue, startIndex?)
    // 6. lastIndexOf(searchValue, startIndex?)


    // What is difference between slice() and substring()

    // 7. slice(startIndex?, endIndex?) - Return a portion of the string

    // stringName.slice()

    console.log(str.slice())
    console.log(str.slice(5))
    console.log(str.slice(5, 10))
    console.log(str.slice(10, 5))

    // 8. substring(startIndex, endIndex?) - Return the portion of the string

    // $5678
    
    console.log(str.substring(0))
    console.log(str.substring(5, 10))
    console.log(str.substring(10, 5))

    // 9. startsWith(string) - It checks if the steing is starting with the specified
    // string or character and return us the boolean

    console.log(str.startsWith("w"))

    // 10. endsWith(string) - It checks if the string is ending with the specified
    // string or character and return us the boolean

    let username = "FirstName, LastName"
    console.log(username.endsWith("FirstName"));

    // 11. toLowerCase() - It converts the string to lower case letter and return a new string
    console.log(str.toLowerCase())
    console.log(str)

    // 12. toUpperCase() - It converts the string to upper case letter and return a new string
    console.log(str.toUpperCase())

    // 13. trim() - It removes the leading and trailing whitespace from a string

    let str1 = "    This is a flower    "
    console.log(str1 == "This is a flower")
    console.log(str1.trim() == "This is a flower");

    // 14. trimStart() - It removes the leading whitespace
    // 15. trimEnd() - It removes the trailing whitespace
    console.log(str1.trimStart())
    console.log(str1.trimEnd())

    // 16. split(separator) - Splits the string into an array of substring based 
    // on th separator

    let email = "praveen@qamitra.com"
    let domain = email.split("@")
    console.log(domain[1].split(".")[0]) // [qamitra,  com]
    console.log(domain[0])

    // 17. replace(old, new)
    // 18. replaceAll(old, new)

    let str3 = "This is a string"
    console.log(str3.replace("i", "@"));
    console.log(str3.replaceAll("i", "@"));

    // Object
    // Class - Inheritance
    // Framework


    // 1. node js
    // 2. VS code
    // 3. Typescript
    // 4. tsx
    // 5. playwright - npm init playwright
    // 6. xlsx
    // 7. allure-report


    
    
    
    
    

    
    
    
    
    

    
    


    
    

    