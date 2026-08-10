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



const arr4 = [10,30,40]

// arr4 = [10,20,30,40] 

arr4.push(90)
console.log(arr4);

