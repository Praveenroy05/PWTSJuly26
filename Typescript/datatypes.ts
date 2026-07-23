// Data Types - Which defines what type of data a variable is storing

// Syntax:
// keyword(var/let/const) variableName:datatype(optional) = value

let j = [10,20,30]
let k :(number | string | boolean) = 20
k = "TS"
k = true

// There are 2 Types of Datatypes:

// 1. Primitive data type - Only have a singl value

    // 1. number
    // 2. string
    // 3. boolean 
    // 4. null
    // 5. undefined
    // 6. union (|) - Combination of multiple datatype (number | string)
    // 7. any
    // 8. void - Function

    // 1. number - Combination of integer (98, -68) and flotaing point number (67.4354, -35.47)


    let num1 = 10 // Type Inference
    let num2 :number = 90.45 // Type Annotation

    // typeof - Which return the datatype of a variable

    console.log(typeof num1)
    console.log(typeof num2)

    // What is difference between Type Annotation and Type inference

    // Whenever we define the datatype of a variable explicitly is known as Type Annotation
    // Whenever JS & TS is able to identify the datatype of a variable implictly is known as Type inference

    
    // 2. string - Sequence of characters - string, text, word

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
    

    // 3. boolean - true/false
    let isAdmin = false
    let isEmployee = true

    console.log(5 > 20)

    // 4. null - Intentional absence of a value
    let num3:null = null


    // 5. undefined - You have defined a variable but have not assigned any value to it.

    let num4:undefined = undefined

    let num5 // declaration
    console.log(num5)

    // Note:
    // 1. By default any type of variable will have a value as "undefined"
    // 2. By default the dataype of a variable will be "any"
    
    
    // 6. union (|) - is known as union
    let num6 :(number| string |boolean) = true
    num6 = "TS"
    num6 = 10
    console.log(num6)
    

    // {
    //     id : ad102,
    //     "name" :"Rahul"
    // }


    // 7. any - it is free to accept any type of datatype

    let num7:any = 10
    num7 = "TS"
    num7 = true
    num7 = null
    num7 = undefined






// 2. Non-primitive data type - Can store more than one value

    // 1. Array
    // 2. String
    // 3. Object - {key : value}