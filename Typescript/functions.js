"use strict";
// Functions - It is a set of instruction that perform a specific task
function login() {
    // fill the username
    // fill the password 
    // click on login button
}
// login()
// 100 Test Cases - 300 lines of code - 195
// Duplication - Solve the problem of duplication
// Maintenance - 100 Test cases to fix the issue - 99 steps
// Reusability - We can reuse the code whenever is needed
// 1. Named Function - Function Declaration - If you want to reuse the 
// function multiple time
// 2. Anonymous Function - Function expression
// 3. Arrow Function - ES6(2015) - Lambda Function - =>
// 4. Constructor Function - Class
// 1. Named function - Function Declaration - A function which will be declared 
// along with the name is known as function declaration
// Syntax:
/*

JS

function functionName(parameter) // Defining the function
{
  // Block of code to be executed
  return
}

functionName(arguments) // Calling the function

TS

function functionName(parameter:datatype(optional)):returntype(Optional) // Defining the function
{
  // Block of code to be executed
  return
}

functionName(arguments) // Calling the function


return - It should be last statement inside the function

parameter - It is a variable in the declaration of a function.
   It is used to receve the value when the function is called.

Argument - It is a value that is passed to the function when it is called



*/
// Named Function - Reusability - 
// 1. loginIntoApplication(username, password) - 
// 2. Launching the url - launchURL(url)
// 3. GetDataFromExcel(excel) - Parametrised and return (read from excel)
// 4. screenshot() - Non-par non-returning
// 1. Non-parameterised and non-returning function
function greetings() {
    console.log("Welcome to Typescript");
}
greetings();
// function takeScreenshot(){ // user defined
//   page.screenshot({path:""}) // built-in
// }
// screenshot()
// 2. Non-parameterised and returning function
function greet() {
    console.log("This is a non parameterise function");
    return "Welcome to Typescript-Playwright";
}
// function logout(){
//   return Element.isVisible()
// }
// logout()
// greet() // "Welcome to Typescript-Playwright"
const message = greet(); // "Welcome to Typescript-Playwright"
console.log(message);
// console.log(greet())
// 3. Parameterised and non-return function
function launchURL(url) {
    console.log(`This is the url - ${url}`);
    // page.goto(url)
}
launchURL("https://facebook.com");
// 4. Parameterised and returning
function getDataFromExcel(pathOfTheFile, sheetName) {
    return pathOfTheFile + "-" + sheetName;
}
const result = getDataFromExcel("testdata.xlsx", "Login");
console.log(result);
function addition(a, b) {
    return a + b;
}
let sum = addition(10, 20); // 10, 20 - Arguments
console.log(sum);
// let i = function();
// 2. Anonymous Function - Function Expression - A function which will not have
// any name. A function which is declared without any name that function will get
// stored inside a variable and that variable becomes the name of the function.
// callback function
/*

Syntax:

const variable = function(parameter:datatype):returnType
{
 code to be executed
 return
}

variable(arguments)


*/
let c = 10;
let d = 90;
let e = c + d;
const sum1 = function (a, b) {
    return (a + b);
};
let result1 = sum1(30, 70);
console.log(result1);
// Callback Function - A function which will be utlised as a parameter of another function
// is knowm as call back function
function add1(a) {
    console.log(a);
}
add1(10);
// let j = function(){}
function add(fun) {
    fun();
}
add(() => {
    console.log("This is a callback function");
});
// 3. Arrow Function (=>) - ES 2015
// 1. This is also a part of anonymous function and will not have any name
// 2. This function will be declared by using (=>) arrow symbol after the paranthesis
// 3. Arrow function use to shorten the number of lines of code
// 4. If there is only one line of code inside the function then we can skip the 
// curly braces {} inside the arrow function and you do not mandatorly define
// the return keyword.
// Syntax:
/*

const variable = (parameters:datatype)=>{...}

variable(arguments)


*/
// Anonymous
const random = function (a, b) {
    return (a + b);
};
// Arrow function
const random1 = (a, b) => a + b;
let returnResult = random1(150, 250);
let returnResult1 = random1(1500, 250);
console.log(returnResult);
const random2 = (a, b) => console.log(a + b);
random2(10, 20);
random2(100, 200);
// returnResult = 100
// method overloading - Method overloading is a process where you can declare the
// same method name with different parameters
/*

function display(name:string){

}

function display(name:string, age:number){

}

display("Jyoti")
display("Pankaj", 25)

*/
// Default parameter and Optional Parameter
// Default Parameter - A parameter which has a default value
function sum2(a, b = 90) {
    console.log(a + b);
}
sum2(100);
sum2(130, 70);
// Optional Parameter (p?) - A parameter which may or may not be provided with the value
// during the function call
function display(name, age) {
    console.log(`Your name is ${name} and age is ${age}`);
}
display("Priya");
display("Raj", 20);
// Assignment - Complete the above "display" function by writing the logic to 
// print only name if age parameter has not been given any value and print both
// name and age if age value has also been given at the time of calling the 
// function
