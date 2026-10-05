// Hooks - A special method which perform a setup and tear down process

// test.beforeAll() - It will be executed before running any of the test case.
// DB connection - read file - test data, API 

// test.beforeEach() - It will run once before running each and every test case.
// Pre-condition/common steps inside each test case

// test(){...}

// test.afterEach() - It will run once after running each and every test case.
// closing the browser

// test.afterAll() - It will be executed after running all of the test case.
// Close the DB connect, close the file


import {test} from '@playwright/test'


test.beforeEach(async ()=>{
    console.log("Before Each");
})

test.afterEach(async ()=>{
    console.log("After Each");
})

test.beforeAll(async ()=>{
    console.log("Before All");
})

test.afterAll(async ()=>{
    console.log("After All");
})


test("Test1", async()=>{
    console.log("Test1");
    
})

test("Test2", async()=>{
    console.log("Test2");
    
})

test("Test3", async()=>{
    console.log("Test3");
    
})




