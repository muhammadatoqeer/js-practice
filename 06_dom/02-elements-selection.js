//document => Object, getElementById => function, 'name of the ID' => parameter
document.getElementById('Name of the ID') //targets that specific element directly because IDs are unique for HTML Elements.

document.getElementById('Name of the ID').id //return the value of ID .id is the property

document.getElementById('Name of the ID').className //return the value of class for the element

document.getElementById('Name of the ID').class //Invalid porperty to check for class

document.getElementById('Name of the ID').getAttribute('name-of-the-HTML-attribute') //Returns the value of the HTML attribute entered as parameter
//Examples: 

//document.getElementById('heading').getAttribute('class') //head
//document.getElementById('heading').getAttribute('id') //header

document.getElementById('Name of the ID').setAttribute('name-of-the-attribute-you-want-to-add', 'value-of-that-attribute')//Always overrides by default so you have to add multiple values (in case of classes etc.)
//e.g.
//let title = document.getElementsByClassName('head')[0].setAttribute('style', 'font-size:100px')

// changing styles using the Style property

document.getElementById('Name of the ID').style.backgroundColor = 'blue'

document.getElementById('Name of the ID').style.padding = '15px'

//Extracting content

title.textContent //reveals the text content between the HTML tag. Even what's hidden using styles or other code

title.innerHTML //reveals the HTML code inside the 
title.innerText // reveals only what is visible to in the code

document.getElementsByClassName('name of class') //returns a collection of the results (could think like an array) and you then use an index to specify which className you want to target

document.querySelector('h1'); //selects the first h1 on the page. works with CSS selectors as well like class, etc 
document.querySelectorAll();


// NodeList != Array != HTMLCollections

//Convert Nodelist/HTMLCollections to array using Array.from()


// JavaScript DOM Element Selection: Comprehensive Guide
// ===============================================================

/*
Selecting Elements in the DOM
--------------------------------------------------
In JavaScript, you can select and manipulate HTML elements using various DOM selection methods. These methods allow you to target elements based on their IDs, classes, tags, or other attributes.

1. **`document.getElementById('ID')`**
--------------------------------------------------
- Selects an element **by its ID**.
- Returns **a single element** because IDs are unique within an HTML document.
- Use when you want to target a specific element quickly.

Example:
*/
const elementById = document.getElementById('heading'); // Selects the element with ID 'heading'
console.log(elementById);  // Outputs: <h1 id="heading" class="head">DOM LEARNING</h1>

/*
- **Properties**:
    - `.id`: Returns the ID value of the element.
    - `.className`: Returns the class value(s) of the element.
    - `.getAttribute('attribute-name')`: Gets the value of the specified attribute.
    - `.setAttribute('attribute-name', 'value')`: Sets or updates the value of a specified attribute.
    - `.style`: Allows you to directly modify CSS styles.

Example:
*/
elementById.style.color = 'red';  // Changes the text color to red


/*
2. **`document.getElementsByClassName('class-name')`**
--------------------------------------------------
- Selects all elements with the specified class name.
- Returns an **HTMLCollection**, which is similar to an array but does not have all array methods.
- Use index `[0]` to access a specific element within the collection.

Example:
*/
const elementsByClassName = document.getElementsByClassName('head');
console.log(elementsByClassName);  // Outputs: HTMLCollection of elements with class 'head'
console.log(elementsByClassName[0]);  // Outputs: First element with class 'head'

/*
- Note: Use `[0]`, `[1]`, etc., to access individual elements in the collection.
- HTMLCollection is **not a real array**, so it cannot use array methods like `.forEach()`.

Convert HTMLCollection to an array:
*/
const classArray = Array.from(elementsByClassName);
classArray.forEach(element => console.log(element));  // Logs each element


/*
3. **`document.getElementsByTagName('tag-name')`**
--------------------------------------------------
- Selects all elements with the specified tag name (e.g., 'div', 'p').
- Returns an **HTMLCollection** of elements.
- Use when you want to target all elements of a certain tag type.

Example:
*/
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);  // Outputs: HTMLCollection of all <p> elements

/*
4. **`document.querySelector('selector')`**
--------------------------------------------------
- Selects the **first element** that matches the specified CSS selector (ID, class, tag, etc.).
- Returns a **single element**, or `null` if no match is found.
- Use for complex selections like classes or attributes.

Example:
*/
const firstHeading = document.querySelector('h1');  // Selects the first <h1> element
console.log(firstHeading);  // Outputs: <h1 id="heading" class="head">DOM LEARNING</h1>

const firstClass = document.querySelector('.head');  // Selects the first element with class 'head'
console.log(firstClass);  // Outputs: <h1 id="heading" class="head">DOM LEARNING</h1>

/*
5. **`document.querySelectorAll('selector')`**
--------------------------------------------------
- Selects **all elements** that match the specified CSS selector.
- Returns a **NodeList**, which is a collection of nodes similar to an array.
- Unlike HTMLCollection, NodeLists can use array methods like `.forEach()`.

Example:
*/
const allParagraphs = document.querySelectorAll('p');  // Selects all <p> elements
allParagraphs.forEach(paragraph => console.log(paragraph));  // Logs each paragraph element

/*
- Use `querySelectorAll` when you need to select multiple elements with a class, attribute, or any CSS selector.
- NodeLists are not true arrays but can be converted using `Array.from()` if needed.
*/

const paragraphArray = Array.from(allParagraphs);
console.log(paragraphArray);  // Converts NodeList to an array


/*
6. **Differences Between HTMLCollection, NodeList, and Arrays**
--------------------------------------------------
- **HTMLCollection**:
  - Returned by `getElementsByClassName` and `getElementsByTagName`.
  - Live collection that updates when the DOM changes.
  - Cannot use array methods like `.forEach()`.

- **NodeList**:
  - Returned by `querySelectorAll`.
  - Static collection that does not update with DOM changes (unless returned by `childNodes`).
  - Can use `.forEach()` and `for...of` loops.

- **Array**:
  - True array with all array methods.
  - Convert HTMLCollection or NodeList to an array using `Array.from()` or the spread operator `[...collection]`.
*/

const nodeList = document.querySelectorAll('p');  // NodeList
const htmlCollection = document.getElementsByClassName('head');  // HTMLCollection
const arrayFromNodeList = Array.from(nodeList);  // Convert NodeList to array

console.log(Array.isArray(nodeList));  // Output: false (NodeList)
console.log(Array.isArray(arrayFromNodeList));  // Output: true (Array)


/*
7. **Extracting and Manipulating Content**
--------------------------------------------------
- `.textContent`: Retrieves or sets the text content of an element, including hidden text.
- `.innerHTML`: Retrieves or sets the HTML content inside an element.
- `.innerText`: Retrieves or sets the visible text content of an element.

Examples:
*/
console.log(elementById.textContent);  // Logs all text inside the element (even hidden)
console.log(elementById.innerHTML);    // Logs HTML content inside the element
console.log(elementById.innerText);    // Logs only visible text inside the element


/*
8. **Common Mistakes and Tips**
--------------------------------------------------
- **Using `.class` to get or set a class**: Use `.className` or `.getAttribute('class')` instead.
- **Selecting elements by class name**: Remember to use an index like `[0]` for collections.
- **Targeting unique elements**: Prefer `getElementById` for targeting a single element.

Example Mistake:
*/
console.log(document.getElementById('heading').class);  // Error: class is not a property
console.log(document.getElementById('heading').className);  // Correct: Returns class value(s)
