// Conditional Statement - It allows us to execute different block of code {...}
// based on different condition


// 1. if statement - This will handle only the positive scenario
// 2. if else statement - This will handle both positive and negative
// 3. if else if statement - This will validate multiple conditions
// 4. switch statement - This will validate multiple conditions
// 5. Ternary Opeartor (? :) - Short hand form of if else statement

// 1. if statement - Country from a drop down - Singapore - 250 - 
// 2. if else if statement - Cross browser testing



// 1. if statement - It will execute the if block of code only if condition is true

// Syntax:

/*

The condition will be validated, if the condition is true if block of code will
be executed else if the condition is false nothing will happen

if(condition){
    // code
}


*/

// let list = ["text", "login", "pass"]

let text  = "Login"

if(text == "login"){ // "Login" == "login"
    console.log("The text value of an element is matching"); 
}


// 2. if else statement - If the condition is true then if block of code will be
// executed otherwise the else block of code will be executed

/*

if(condition){
    // code
}
else
{
    // code
}


*/

if(text == "login")
{
    console.log("The text value of an element is matching");  
}
else{
    console.log("The text value of an element is not matching"); 
}


let role = "Admin"

if(role == "Normal"){ // "Admin" == "Normal"
    console.log("Navigate the use to the dashboard");  
}
else{
    console.log("Navigate to the adminstrative dashboard");
  
}



// 3. if else if statement - Will validate multiple conditions. Depending on the result of 
// the condition the specific block of code will be execute.

/*

if(condition1)
{
   code  - if the condition1 is true this block of code will be executed
}
else if(condition2)
{
   code - if the condition2 is true this block of code will be executed
}
else if(condition3)
{
   code - if the condition3 is true this block of code will be executed
}
.....
else{
     If none of the condition is true
}


*/


// cross browser - Chrome, firefox, safari,...
// Multiple Env - qa, staging, prod

let browser = "edge"

if(browser == "chrome"){ // "edge" == "chrome"
    console.log("Launch the chrome browser");
}
else if(browser == "firefox"){ // "edge" == "firefox"
    console.log("Launch the firefox browser");
}
else if (browser == "safari"){ // "edge" == "safari"
    console.log("Launch the safari browser");
}
else{
    console.log("Invalid browser");
}

// type log + enter


// 4. switch statement - Switch will compare with the case value. 
// It checks if any case value is avilable as similar to the expression or not.
// If it is available it will directly jumpt to that particular block of code

// Syntax
/*
switch(expression){
    case "value":
        block of code
        break;
    case "value1":
        block of code
        break
    default:
        block of code

}

*/

let browserName = "edge"

switch(browserName){
    case "chrome":
        console.log("Launch the chrome browser - switch");
        break // Terminates the loop or switch statement
    case "firefox":
        console.log("Launch the firefox browser - switch");
        break 
    case "safari":
        console.log("Launch the safari browser - switch");
        break 
    default:
        console.log("Invalid browser  - switch"); 
}


// When to use if else if statement
// 1. Range available in the condition - we have to use if else if 
// 2. Multiple datatypes to be valudate - name == "Rahul" , salary ==100000
// 3. Logical operator for the validation - marks >80 && || marks <90

// 1. Simple validation with single datatype and single value to comapre
// 2. No Range
// 3. No logical op


// let num = 10
// switch(num){
//     case 1:

//     case "one":
// }
    

// 5. Ternary Operator (? :) - 
// Syntax:

/*

condition? execute this if true : execute this if false

*/

let age = 10;

// if(age >=18){
//     console.log("You are eligible for voting");
// }
// else{
//     console.log("You are not eligible for voting");
// }


(age >= 18)? console.log("You are eligible for voting") : console.log("You are not eligible for voting")




// Assignment:
// Write a program to display the grade of a student
// >90 - A
// >80 && <90 - B
// >70 && <80 - C
// >50 && <70 - D
// <50 - Fail