/*

Framework - It is a design pattern. Set of guidlines.

POM - Page Object Model - It is a design pattern

It is a class which represents the page of the application. It contains the locators
and methods of the specific page.

Page object model is a design pattern used in software testing to represent a web page
as an object. It is a way to organise and manage the interaction with the web page by
creating the properties (variables - locators) and methods (Actions) of a particular page.


This approach helps us in reducing the code duplication, improve test redability and
maintanibility by encapusulating the page specific properties and methods inside a 
particular class.


POM Framework from scratch:

There are different layers that we have to create:


1. PAGE LAYER - This will consists of Locators and methods related to a specific page.
We will create a folder or package (pages).  Different class you will create inside this folder.
// LoginPage.ts, DashboardPage.ts ....
// email, password, loginBtn, loginIntoApplication(), invalidLogin(), ... - Loging Page
// products, viewPage, addToCart.....


2. TEST LAYER - Pure test case and assertions. Will create a folder or package (tests).
We will call the locators and methods from the specific page classes to the test file.
// LoginPageTest.spec.ts, DashboardPageTest.spec.ts,......


3. TEST DATA LAYER - JSON/excel/.env - TestData.json, data.xlsx, qa.env, prod.env

4. CONFIGURATION LAYER - playwright.config.ts - Global configuration file

5. UTILS LAYER - We will create a utils folder - Custom functions - log(), report()
screenshot(), scrollDown(), alert(), getDataFromExcel(),.......

6. REPORT LAYER - HTML/Allure - We do not have to create it separately in playwright.








*/
