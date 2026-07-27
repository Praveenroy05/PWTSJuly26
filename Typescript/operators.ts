// Operators - Operators is a symbol that perform various operation

 // 2 addition 2 - 2+2

// 1. Arithmetic Operators
// 2. Comparison Operators
// 3. Logical Operators
// 4. Assignment Operators
// 5. Ternary Operator - If else statement


// 1. Arithemetic Operator - Used to perform mathematical calculator

    // 1. Addition (+) - Addition or Concatenation
    // 2. Subtraction (-)
    // 3. Multiplication (*)
    // 4. Division (/)
    // 5. Modulus (%) - Remainder
    // 6. Exponential (**) - Power
    // 7. Increment (++) - Increase the value by 1
    // 8. Decrement (--) - Decrease the value by 1


    // 1. Addition (+) - Addition or concatation

    let number1 = 10
    let number2 = 3

    console.log(typeof (number1 + number2 + 10 + "5")) // 103

    // What is difference between Type conversion and Type coercion

    // Type coercion - Implicit conversion of one data type into other datatype 
    // Type conversion - Explicit conversion of datatype into other 

    // 2. Subtraction (-)
    console.log(number1 - number2);

    // 3. Multiplication(*)
    console.log(number1 * number2);

    // 4. Division (/)
    console.log(number1/number2); // floating point number 3.3333333

    // 5. Modulus (%) - Remainder after the division - 10/3
    console.log(number1 % number2);
    
    // 6. Exponential (**) - Power
    console.log(number1 ** number2) // 10 ** 3 // 10^3 - 10*10*10

    // 7. Increment (++) - Increases the value of the variable by 1

    let number3 = 10

        // a. Pre-increment (++number3) - First the value of the variable 
        // will be incremented and then the action will be performed

        console.log(++number3) // ++10 - 1+10 = 11
        
    let number4 = 5

        // b. Post-increment (number3++) - First the action will be performed 
        // and then the value of the variable will be incremented.

        console.log(number4++); //5++ - 5 - 5+1
        console.log(number4); // 6
        
        

        // Assignment - Decrement OP - Decrease the value by 1


        console.log("***********************************************")

        // 2. Comparison Operator - Used to compare the two values and return the
        // result in the form of boolean(true/false)

         // 1. Equal to (==)
         // 2. Not Equal to (!=)
         // 3. Strict Equal to (===)
         // 4. Strict Not Equal to (!==)
         // 5. Greater than (>)
         // 6. Greater than or Equal (>=) // 10 >= 10
         // 7. Less than (<)
         // 8. Less than or equal (<=)


         // 1. Equal to (==) - Checks if the two VALUES are same or not

         let var1 = 10
         let var2 = 10

         let var3 = (var1 == var2)
         console.log(var3) // 

         // 2. Not Equal to (!=)
         console.log(!var3) // !true - false

         // 3. Strict Equal to (===) - Checks if the two VALUES along with the
         // DATATYPE of the variable are same or not

         console.log(var1 === var2);

         // 4. Strict Not Equal to (!==)
            console.log(var1 !== var2);

         
         // Assignment 5-8 
         // 5. Greater than (>)
         console.log(10 > 4 );

    console.log("***************************************************");
    

    // 3. Logical Operator - Used to combine multiple condition to get the final result.
    // It will compare 2 expression and return us the result in the form of boolean.

        // 1. AND (&&)  - Both of the conditions are true then only it will return us true
        // 2. OR (||)   - Either of the condition is true - it will return us true
        // 3. NOT (!) - It will reverse the result from true to false and vice-versa


        // 1. AND (&&)

        // true && true - true
        // true && false - false
        // false && true - false
        // false && false - false

        console.log((10 >5) && (20>6)) // true
        console.log((10 >5) && (20>60)) // false
        console.log((10 >50) && (20>6)) // false
        console.log((10 >50) && (20>60)) // false
        
    // 2. OR (||)

        // true || true - true
        // true || false - true
        // false || true - true
        // false || false - false

        console.log((10 >5) || (20>6)) // true
        console.log((10 >5) || (20>60)) // true
        console.log((10 >50) || (20>6)) // true
        console.log((10 >50) || (20>60)) // false

    // 3. NOT(!)
    console.log( !(10> 60));


    let month = "May"
    let year = "2027"
    let day = "5"

    let monthText = "July"
    let yearText = "2026"

    while(!((month == monthText) && (year == yearText))){
        console.log("Month and year are matching");
        break
    }
    
         
    // 4. Assignment Operator (=)     - Assign the value to a variable
    
    let i = 10 


        
    
    
    
    