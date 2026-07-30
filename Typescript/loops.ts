// Loops - Will execute the same block of code {...} multiple times until the condition
// is false

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("*********************************************")

// for(let i=1; i<=5; i++){
//     console.log(i)   
// }


// 1. for loop
    // 1. for loop - Traditional for loop - 
    // When we know that how many times we have to run the iteration

    // 2. for of loop - Loop through the iterable object like array - [1,2,3,45]
    // 3. for in loop - Loop through the properties of an object
    // {key : value}

// 2. while loop - When we do not know how many times we have to run the iteration
// 3. do while loop - When we want to execute the block of code at least once before
// checking the condition

// Drop down - countries - for loop
// Calendar date  - 5th May 2027
// Pagination - while loop
// Login page - 


// 1. for loop
// Syntax:
/*

let m = 90  - initialization
let n - declaration

for(initialization; condition; increment/decrement)
{
    code
    break/continue
}

Initialization - Initialize the value of the variable to start the iteration
let i = 0
Condition - Condition to check whether the loop should continue or not. i<=5

Increment/Decrement - Increse or decrease the value of the variable ; i++/i--


*/

for(let i =1; i<6; i++){ // 6<6
    console.log(i)  // 1 2 3 4 5
}

console.log("******************************************");


// 10 to 1

for(let i=10; i>=1; i--) // i>=1 ; i>0;i!=0 
{
    
    if(i==5){
        continue
    }
    console.log(i)
    
}

// break - to exit the loop whereever the break keyword inside the loop
// continue - To skip the current iteration and move to the next iteration


let array = [10,20,30,"TS", "Python"]

// 2. for of loop
// Syntax:

/*

for(declaration of iterable)
{
 code
}


*/

// for(let ele of array){
//     console.log(ele) 
// }


// 2. while loop:

/*

Initialization;

while(condition)
{
    code
    Increment/decrement
}

// 10 to 0 - 10 8 6 4 2 0  - using while loop

*/


let attempt = 0 // <=3, >=3, >3 

while(attempt <=3){ // 0 <=3
    console.log("Attempt = " +attempt);
    attempt++;
}

console.log("Your account have been locked for 24H");

console.log("*****************************************************")

// 3. do while loop

// syntax:

/*

initialization - let k = 1

do
{
   // code to be executed
}while(condition);


*/

let k = 0

do{
    console.log("Attempt = ", k);
    k++ 
}while(k <=3);
