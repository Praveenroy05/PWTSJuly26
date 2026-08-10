// Arrays - []

let arr = [10, "TS", true, null, undefined] 

// [0:10, 1:"TS", 2:true, 3:null, 4:undefined] #[index:value]

console.log(typeof arr)
// Syntax:
// arrayName[index]

console.log(arr[2])


/*

1. Array is a collection of data, which can have different data types
2. Array is an ordered collection. Means we can access the element from the array
by using the position(index)
3. Index starts with 0 in an array
4. Array in dynamic in size


*/

// Declaration of an array:

// 1. Using Array Literal - []
// 2. Using Array Contructor - new Array()

// 1. Using Array Literal - []
// Syntax:
// let arrayName:datatype[] = [value, value1, value2...]

let pages:string[] = ["Login", "Dashboard", "Admin", "Home", "Cart"]
console.log(pages)

let arr1 = [10,20,30,"TS", "JS", true]

// 2. Using Array Constructor - new Array()

// Syntax:
// let arrayName = new Array<datatype>(value1, value2,...)

let arr2 = new Array<any>(10,20,30,40,"50",60, null)
console.log(arr2)

// length - It return the total number of element available inside an array

console.log(arr2.length)


// let pages = ["Login", "Dashboard", "Admin", "Home", "Cart"]
// 5
// 0,1,2,3,4

console.log(pages[0])
console.log(pages[1])

console.log("************************************");


// using the loop to iterate through the element of array

// 1. Traditional for loop

for(let i=0; i<pages.length; i++){
    console.log(pages[i])
}

console.log("************************************");


// 2. for of loop - directly interact with the element of an array

// Syntax:

/*

for(declaration of iterable)
{
 code
}


*/

// let pages = ["Login", "Dashboard", "Admin", "Home", "Cart"]


for(let ele of pages){
    console.log(ele)
}

// keyword variableName
console.log("************************************");

for(let ele in pages){
    console.log(pages[ele])
}


console.log("****************Methods of arrays******************");

let arr3 = [10,20,30, "TS", true, "JS"]

// 1. push(ele1, ele2, ele3,....) - It adds the elements to the end of an array
// Syntax:
// arrayName.push(ele1, ele2,...)

console.log(arr3)

arr3.push(50, "Python")

console.log(arr3)


// 2. pop() - It removes the last element from the array

 const env = ["QA", "UAT", "stg", "prod"]

 env.pop()

 console.log(env)


// What is difference between push() and unshift()
// What is difference between pop() and shift()

// 3. unshift(ele1, ele2, ele3,....) - It adds the elements to the beginning of an array

const browsers = ["firefox", "safari"]

browsers.unshift("chrome")
console.log(browsers)

// 4. shift() - Removes the first element from the array

browsers.shift()
console.log(browsers);


// What is difference between splice() and slice()

// 5. splice(startIndex, deleteCount, ...ele) - Add/Remove the element from the array
// at specified index

// startIndex - The position where you want to add/delete the element
// deleteCount - The number of elements to be deleted from array
// ...ele - The element that you want to add at startIndex

const browser = ["chrome", "firefox", "safari", "edge"] // 0-3
//  ["chrome", "chrominum", "firefox", "safari", "edge"]

browser.splice(1, 2, "Google Chrome", "Opera", "IE")
console.log(browser)

// ["chrome", "egde", "Google Chrome", "Opera"]
// ["Chrome", "Google Chrome", "Opera", "IE", "edge"] - 



// 6. slice(startIndex?, endIndex?(exclusive) - Returns the postion of an element from
// startIndex to endIndex-1 from the array


// [ 'chrome', 'Google Chrome', 'Opera', 'IE', 'edge' ]

console.log(browser.slice())
console.log(browser.slice(1))
console.log(browser.slice(1,4))
console.log(browser.slice(-4,-1))



// 6. indexOf(element, startIndex?) - Return the index of the first occurances of
// an element in an array, -1 if not found

let arr4 = [10,20,30,40,50,10,60,70,10,80]

console.log(arr4.indexOf(10))
console.log(arr4.indexOf(90,1))

// Assignment 
// Find out all the index of 10 available inside arr4 - 0, 5, 8


// 7. lastIndexOf(element, startIndex?) - Return the index of last occurance 
// of an element from the array

console.log(arr4.lastIndexOf(10, -4))

// 8. includes(element, startIndex?) - Return true if the element is found in the
// array otherwise false

console.log(arr4.includes(90))
console.log(arr4.includes(50));

// 9. join(separator?) - Joins all the elements of an array and return as a string

let arr5 = [20,11,2026] // dd-mm-yyyy

let resultJoin = arr5.join("-")
console.log(resultJoin);

// 10. toString() - Convert the array into string
console.log(arr5.toString())


// string
