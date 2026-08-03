// Variables - Storage/Container - Which stores either a single value multiple values

// Syntax:
// keyword(var/let/const) variableName = value - JS
// keyword(var/let/const) variableName:datatype(Optional) = value - TS

// let abc1 = 10

// There are 3 ways in which we can declare a variable in (JS & TS):

// var - In modern JS & TS - ES6(ECMA SCRIPT 6) we do not use var keyword to declare a varaible
// let - If the value of the variable can change at any point of time
// const - To declare a constant variable

// const a = 10

// a= 100

// let a = 10
// LET a = 10


// Scope of Variable

// 1. Local scoped variables - When you try to declare a variable inside {...}
// 2. Global Scoped variables - When you try to declare a variable outside {...}

// let lang = "Python"

// {
//     let var1 = "TS" // Local scope
//     console.log(lang);
//     console.log(var1);  
// }

// console.log(lang)


let lang = 10

{
    let lang = "TS" // Local scope
    console.log("line #43", lang); // TS
}

console.log("line #46",lang) // Python

// Local scoped variable will be given a preference inside local space {...}


// var

var var3;
var var3;

var var2 = 10
var var2 = 1000 // re-declaration
var var2 = 32432
var var2 = 3243555
var2 = 90000 // re-initialization
var var2 = 100
console.log(var2);

// var - 
// 1. Scope - Functional or global
// 2. Whenever we declare a variable using "var" keyword it can be redeclared and can also be re-initalised

// var lang1 = "Python"

// {
//     var lang1 = "TS" // Local scope
//     console.log("line #43", lang1); // TS
// }


// let
// 1. Scope - Block level {...} or global scope
// 2. Whenever we declare a variable using "let" keyword it cannot be redeclared but can be re-initalised
// 3. It is not mandatory to assign the value of the variable at the time of declaration


let abc 
// let abc // re-declaration
//let abc = 90
abc = 90
abc = 9000
console.log(abc)

// const
// 1. Scope - Block level {...} or global scope
// 2. Whenever we declare a variable using "const" keyword it cannot be redeclared and cannot be re-initalised
// 3. It is mandatory to assign the value of the variable at the time of declaration

const abc1 = null
// abc1 = 1000 - This is not possible

// let
// 1. Scope - Block level {...} or global scope
// 2. Whenever we declare a variable using "let" keyword it cannot be redeclared but can be re-initalised
// 3. It is not mandatory to assign the value of the variable at the time of declaration


// const
// 1. Scope - Block level {...} or global scope
// 2. Whenever we declare a variable using "const" keyword it cannot be redeclared and cannot be re-initalised
// 3. It is mandatory to assign the value of the variable at the time of declaration


// let abc2 = 100
// const abc2 = 900

let lang3="java"
{
   lang3="js"
}
console.log(lang3)


console.log(var10);

var var10
