/*

Drop down

2 Types of Drop down


1. Static drop down - The value will never change
    a. Single select DD
    b. Multi select DD


2. Dynamic drop down - The value will be changable
    a. Single select DD
    b. Multi select DD


Development of DD:

1. Using <select> tag
2. Non select tag - div, li, ul, span

1. DD developed using <select> tag
------------------------------------------------------

Step by step procedure to select the value from the DD

1. Launch the url
2. Locate the drop down element by writing the locator
3. Get the value from the drop down by using - selectOption("value", {label, value or index})

Ex: - selectOption("AD", {label:'Albania'} or {value: 'AQ'} or {index: 102})

4. If the drop down is multi-select - selectOption(["AS", "BS","CS" or {label:'India'}, {index:10}, {value:'AR'}])


let i = [10,20,30]

-------------------------------------------------------

2. DD developed using NON <select> tag
-------------------------------------------------------
Step by step procedure to select the value from the DD

1. Launch the url
2. Locate the drop down element by writing the locator
3. Click on the the drop down element identified in step #2
4. Identify and click on the element that you want to select from the drop down




*/