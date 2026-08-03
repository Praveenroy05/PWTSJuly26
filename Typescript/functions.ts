// Functions - It is a set of instruction that perform a specific task

function login(){
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

function greetings(){
  console.log("Welcome to Typescript")
}

 greetings()

// function takeScreenshot(){ // user defined
//   page.screenshot({path:""}) // built-in
// }


// screenshot()


// 2. Non-parameterised and returning function

  function greet(){
    console.log("This is a non parameterise function")
    return "Welcome to Typescript-Playwright"
  }

  // function logout(){
  //   return Element.isVisible()
  // }

  // logout()

  // greet() // "Welcome to Typescript-Playwright"

  const message = greet() // "Welcome to Typescript-Playwright"
  console.log(message)

  // console.log(greet())
  


// 3. Parameterised and non-return function

function launchURL(url:string){ // url = https://google.com
  console.log(`This is the url - ${url}`)
  // page.goto(url)
}

launchURL("https://facebook.com")


// 4. Parameterised and returning

function getDataFromExcel(pathOfTheFile:string, sheetName:string){
  return pathOfTheFile + "-" + sheetName
}

const result = getDataFromExcel("testdata.xlsx", "Login")
console.log(result)


function addition(a:number,b:number){ // a,b - parameters
  return a+b
}

let sum = addition(10,20) // 10, 20 - Arguments
console.log(sum)


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

let c = 10
let d = 90
let e = c+d

const sum1 = function(a:number, b:number){
  return(a+b);
}

let result1 = sum1(30,70)
console.log(result1);

// Callback Function - A function which will be utlised as a parameter of another function
// is knowm as call back function

function add1(a:number){ // a = 10
  console.log(a)
}

add1(10)

// let j = function(){}

function add(fun:Function){ // fun = function()
    fun()
}

add(function(){
    console.log("This is a callback function");
})

// 3. Arrow Function
