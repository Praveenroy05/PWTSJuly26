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

// Absolute xpath -  / - /html/body/div/div/section/section/h2
// Relative xpath -  // - //h2


In xpath the index starts from 1

// Syntax:

1. //*[@attribute='value'] - Slower in terms of finding

2. //tagname[@attribute='value'] - faster

(//input)[2]

AXES - xpath

3. Parent to child - by using /(immediate child) or //(Any children - can be descandant)

//div[@class='practice-form-wrapper']/h5 OR

//div[@id='root']//h5

(//div[@class='practice-form-wrapper']/h5)[1]


4. Moving from one sibling to another sibling

Syntax:

//tagname[@attribute='value']/following-sibling::tagname[@attribute='value']

//tagname[@attribute='value']/preceding-sibling::tagname[@attribute='value']

//div[@id='userName-wrapper']/following-sibling::div[@id='userEmail-wrapper']

//div[@id='userEmail-wrapper']/preceding-sibling::div[@id='userName-wrapper']

//div[@id='userName-wrapper']/following-sibling::div - It might identify mutliple elements

//div[@id='userName-wrapper']/following-sibling:://h2[text()='Test login']



5. Identify the element by using text of an element

Syntax:

 1. By using exact text value of an element
//* or tagname[text()='Exact text value of an element']

//h2[text()='Test login']

// 2. By using partial text value of an element

//* or tagname[contains(text(), 'Partial text value of an element')]

//*[contains(text(), 'negative LogIn tests')]


This is a simple Login page. Students can use this page 
to practice writing simple positive and negative LogIn tests. 
Login functionality is something that most of the test automation 
engineers need to automate.

count(//div) - Total number of element matching with div as a tagname


Assignment - Practice 20 different locators by following all the above 4 properties

Assignment 2 - To write the locator to find out the value of CPU% for Firefox



Example in the below table: 9.0%

Dynamic Web Table:

Name	CPU (%)	Memory (MB)	Disk (MB/s)	Network (Mbps)
System	6.0%	51.9 MB	0.91 MB/s	5.4 Mbps
Internet Explorer	7.1%	33.2 MB	0.12 MB/s	4.1 Mbps
Firefox	9.0%	39.0 MB	0.55 MB/s	9.6 Mbps
Chrome	9.9%	38.2 MB	0.41 MB/s	0.4 Mbps

id = name453656

//*[contains(@id, 'name')]



// ancestor-or-self - //*[contains(@id, 'user')]/ancestor::*

// Identify the current element and all the parent elements (ancestor)

table
tbody - Table body
thead - Table Header
tr - Table Row
td - Table Definition (Column)


1. Identify the row that you are trying to write the locator

//tr[td[text()='Chrome']]/td

2. Count the preceding-sibling are available before the CPU % column

count(//th[text()='CPU (%)']/preceding-sibling::th) - 4

3. Increase the count by 1 to reach to the CPU % column

//tr[td[text()='Chrome']]/td[count(//th[text()='CPU (%)']/preceding-sibling::th)+1]

//td[text()='Chrome']/following-sibling::td[count(//th[text()='CPU (%)']/preceding-sibling::th)]

Note: Whenever you write a locator by using CSS Selector or XPATH, we will use:
page.locator("css selector or xpath")




3. Playwright getBy Locators

1. page.getByRole()
2. page.getByText()
3. page.getByLabel()
4. page.getByPlaceholder()
5. page.getByAltText()
6. page.getByTitle()
7. page.getByTestId() - data-testid



page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
    
1. page.getByRole() - 

Heading - <h1-h6> - role - heading
button - <button> or class="btn" - role - button
textbox - <input> or <textarea> - role - textbox
radio - type = 'radio' - role - radio
checkbox - type= "checkbox" - role- checkbox
link - <a> - role - link

page.getByRole("checbox", {name:"Sports"})


2. page.getByText() - page.getByText("Test login")

    1. <p>Email</p>
    2. <span>Emails</span>
    3. <span>Email-ID</span>

page.getByText('Email') - This will identify all the above 3 elements
page.getByText("Email", {exact:true}) - This will identify only the first element


3. page.getByLabel()

    1. When you have "for" as an attribute for an element that have been developed using <label> - 
    THere we can directly use page.getBylabel("label text")
    2. When you find out <input> inside the <label> - 
    <label class="abcd" <input....>> Tuesday</label>

4. page.getByPlaceholder() - To locate an input field by using "placeholder" as an attribute

    page.getByPlaceholder("Enter Name")

5. page.getByAltText() - To locate an element usually image, 
by its text alternative. ("alt" as an attribute)

page.getByAltText("logo image")

6. page.getByTitle() - To locate an element by its "title" attribute

<a href="#" title="Home page link">Home</a>

page.getByTitle("Home page link")

7. page.getByTestId() - To locate an element based on its "data-testid" attribute.

<button data-testid="edit-profile-btn">Edit Profile</button>

page.getByTestId("edit-profile-btn")




On regular basis we will be using the below locators:

1. page.getByRole()
2. page.getByText()
3. page.getByPlaceholder()
4. page.getByTestId() - data-testid

codegen  - Code Generation - automatic locator

*/
