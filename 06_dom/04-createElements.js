// JavaScript: Creating and Inserting DOM Elements
// ===============================================================

/*
1. **Creating a New Element**
--------------------------------------------------
- `document.createElement('tagName')`: Creates a new HTML element of the specified tag name.
- The newly created element exists only in JavaScript memory and is **not part of the DOM** until it's inserted.

Example:
*/
const div = document.createElement('div');  // Creates a new <div> element in memory
console.log(div);  // Output: <div></div> (An empty <div> element in memory)

/*
Explanation:
- The `div` variable now holds a reference to a new `<div>` element.
- It is not yet part of the visible DOM tree, so you won't see it in the HTML until it is appended.
*/


/*
2. **Adding Class, ID, and Attributes**
--------------------------------------------------
- `.className`: Adds or sets the class name(s) of the element.
- `.id`: Sets a unique identifier for the element.
- `.setAttribute(attribute, value)`: Adds or updates an attribute with the specified value.

Using the individual .id or .className property is more optimized than using setAttribute() for setting IDs or class names because:

- Performance: The .id and .className properties directly modify the DOM element's properties,  whereas setAttribute() is a more generic method that accesses the attribute map of the element.
- Readability: Using .id and .className is more straightforward and readable for setting these specific attributes.

Examples:
*/
div.className = "main";  // Adds a class "main" to the <div> element
div.id = Math.round(Math.random() * 10 + 1);  // Sets a unique ID based on a random number
div.setAttribute("title", "generated title");  // Adds a 'title' attribute with value "generated title"

/*
Explanation:
- `className` and `id` are properties that directly set the class and ID of the element.
- `setAttribute` is used to add any HTML attribute (like `title`, `data-*`, etc.) to the element.
*/


/*
3. **Modifying CSS Styles**
--------------------------------------------------
- `element.style.propertyName = 'value'`: Sets an inline CSS style on the element.
- Use the `style` property to directly modify or add styles to an element.

Examples:
*/
div.style.backgroundColor = "green";  // Sets the background color to green
div.style.padding = "12px";  // Adds 12px padding around the <div> element

/*
Explanation:
- The `style` property allows you to set inline CSS styles using camelCase syntax.
- Properties like `background-color` in CSS become `backgroundColor` in JavaScript.
*/


/*
4. **Inserting Content into the Element**
--------------------------------------------------
- `.innerText`: Sets or gets the visible text content inside the element. It respects styling (e.g., `display: none`) and does not include hidden text.
- `document.createTextNode('text')`: Creates a text node with the specified text. This node can be inserted into an element using `.appendChild()`.

Examples:
*/
// div.innerText = "Chai aur code";  // Uncomment to directly set text content
const addText = document.createTextNode("Chai aur code");  // Creates a text node with "Chai aur code"
div.appendChild(addText);  // Adds the text node inside the <div> element

/*
**Difference Between `.innerText` and `createTextNode()`**:
- `.innerText` directly inserts text content into an element, replacing any existing content.
- `createTextNode()` creates a standalone text node that can be added or appended to elements.
- Use `createTextNode()` when you want to build content dynamically and insert it into the DOM in a structured manner.
*/


/*
5. **Appending the New Element to the DOM**
--------------------------------------------------
- `document.body.appendChild(newElement)`: Appends the newly created element as the last child of a parent element.
- The new element is now part of the visible DOM and can be viewed in the HTML structure.

Example:
*/
document.body.appendChild(div);  // Adds the <div> element to the end of the <body> element

/*
Explanation:
- `appendChild()` inserts the new `div` element into the DOM tree as the last child of the <body> element.
- Before this step, the `div` element was only in memory and not visible in the DOM.
*/


/*
6. **Summary of Methods and Properties Used:**
--------------------------------------------------
- **`document.createElement('tagName')`**: Creates a new element in memory.
- **`.className`**: Adds or sets class name(s) for the element.
- **`.id`**: Sets the ID of the element.
- **`.setAttribute('attribute', 'value')`**: Adds or updates a specified attribute with a given value.
- **`.style.propertyName = 'value'`**: Sets an inline CSS style on the element.
- **`.innerText`**: Directly sets the visible text content inside an element.
- **`document.createTextNode('text')`**: Creates a text node with the specified text.
- **`.appendChild(newChildNode)`**: Inserts the new element or text node as the last child of the specified parent element.
- **`document.body.appendChild(newElement)`**: Appends the element to the body, making it part of the visible DOM.
*/
