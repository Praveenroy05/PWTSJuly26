/*

Class - Blueprint/structure to create an object

ES 6 - ECMA SCRIPT 6 - 2015

 - Class is collection of properties(variables) and methods (function)
 - ClassName should be similar to fileName (Employee.ts - Employee)
 - ClassName should always starts with capital letter 
 Ex: - Employee , EmployeeDept

 - Whenever you create a variable inside a class we do not need to mention let/const keyword
 - without () - variable/properties
 - Whenever you create a function inside a class we do not need to mention "function"
 keyword to declare a function

 - with () - Function/Method

 - Access Modifier - It is a permission to access a variable and method outside of a class

 - public - Can be accessible anywhere inside the project
 - private - Can only be accessible inside the same class
 - protected - Can be accessible inside the child class 
 - readonly - Cannot be modified
 - static - It doesn't belongs to the object. It cannot be accessible by an 
   object of a class. We can access static variable or method directly by using
   the ClassName

   Ex: Obj.propertyName
   Obj.functionName()

   Syntax:

   class ClassName{

    key:datatype
    key1: datatype

    construction() - Special function which helps us in terms of initialsing 
    the value of the of the variable of a class except static variable. It 
    automatically gets called when an object of a class is created. It can accept
    parameters to initialize the properties of a class.
   
   
   }

   const obj = new ClassName()



*/

class Employee{

    empName:string
    empId: number
    empAge: number 
    private empSalary: number 
    static companyName = "ABC"

    constructor(name:string, id:number, age:number, salary:number){
        this.empName = name
        this.empId = id,
        this.empAge = age
        this.empSalary = salary
    }

    displayInformation(){
        console.log(this.empName, this.empAge, this.empId, this.empSalary); 
    }

    static greeting(){
        console.log("Welcome to ", Employee.companyName);
        
    }
}
const emp = new Employee("Raj", 101, 24, 100000)
console.log(emp.empName)
console.log(Employee.companyName);


emp.displayInformation()
Employee.greeting()

const emp1 = new Employee("Pushpa", 103, 26, 120000)
emp1.displayInformation()

const emp2 = new Employee("Anjali", 104, 28, 140000)
emp2.displayInformation()

const emp3 = new Employee("John", 105, 29, 150000)
emp3.displayInformation()





