/*

// Locators - To identify the element on the web page is known as locators

// <input type="text" name="username" id="username">- DOM

// input - tagname
// type, name and id - attribute of an element
// text, username and username - Values of the attrubute resp.


<label for="username">Username</label> - DOM

<label ......> - starting tag

</label> - closing tag

<> </>

label - tagname
for - attribute
Username - Text Value of an element


1. CSS Selector - #2
2. XPATH - #3
3. Playwright getBy Locators - #1



CSS SELECTOR
----------------------------------------------

1. If "id" as an attribute is present for any element we can use below css selector for locators:
-----------------------------------------------------------------------------
Syntax:

<button id="submit" class="btn">Submit</button>

# = id attribute

a. #idvalue - #submit
b. tagname#idvalue -  button#submit
c. [attribute='value']  - [id='submit']

Note: Id will always be unique for every element

2. if "class" as an attribute is present for any of the element we use the below selector:
-----------------------------------------------------------------------------
. - class attribute

<button id="submit" class="btn">Submit</button>

a. .classvalue - .btn
b. tagname.classvalue - button.btn
c. [attribute='value']  - [class='btn']

// .classValue.classvalue1.classvalue2

<input required="" autocomplete="off" pattern="\d*" minlength="10" 
maxlength="10" placeholder="Mobile Number" id="userNumber"
 class=" mr-sm-2 form-control" type="text">

.mr-sm-2.form-control

Note: class might or might not be unique



3. Write css based on any attribute  - []
-----------------------------------------------------------------------

Syntax:

[attribute='value']


4. Write css traversing from parent to child:

Syntax:

parentlocator childlocator - By just providing a space between parent and child

div.practice-form-wrapper h5

page.locator("div.practice-form-wrapper h5").nth(4)

first() -  First matching element out of all the matching element
last() - last matching element
nth(index) - Index starts with 0 - identify any element with the index value

--------------------------------------------------------------------------

XPATH
--------------------------------------------------------------------------

Assignment - Practice 20 different locators by following all the above 4 properties



*/