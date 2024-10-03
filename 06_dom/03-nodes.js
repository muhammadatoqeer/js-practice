// JavaScript DOM Node Relationships: Parent, Child, and Sibling Nodes
// ===============================================================

/*
1. **Parent Nodes**
--------------------------------------------------
- `parentElement`: Returns the parent element of a specified element.
- `parentNode`: Returns the parent node of a specified node (element or text node).
- If there is no parent (e.g., `document` node), it returns `null`.

Example:
*/
const dayOne = document.querySelector('.day');  // Selects the first element with class 'day'
console.log(dayOne.parentElement);  // Output: <div class="parent">...</div> (Parent element)
console.log(dayOne.parentNode);     // Output: <div class="parent">...</div> (Parent node)

/*
Explanation:
- Both `parentElement` and `parentNode` return the same parent element (`<div class="parent">`).
- Use `parentElement` for element nodes and `parentNode` when dealing with other node types (text, comment, etc.).
*/


/*
2. **Child Nodes**
--------------------------------------------------
- `children`: Returns a **live HTMLCollection** of an element's children (only element nodes).
- `childNodes`: Returns a **NodeList** of all child nodes, including text nodes, comments, and elements.
- `firstElementChild`: Returns the first child element node.
- `lastElementChild`: Returns the last child element node.
- Use `.children` when you only want element nodes, and `.childNodes` for all nodes (including text, comments).

Example:
*/
const parent = document.querySelector('.parent');
console.log(parent.children);  // Output: HTMLCollection of all child elements with class 'day'
console.log(parent.childNodes);  // Output: NodeList of all child nodes (including text and comments)

console.log(parent.firstElementChild);  // Output: First child element <div class="day">Monday</div>
console.log(parent.lastElementChild);   // Output: Last child element <div class="day">Thursday</div>

/*
Explanation:
- `parent.children` returns only the `<div class="day">...</div>` elements.
- `parent.childNodes` includes text nodes (whitespace) and comment nodes.
- `firstElementChild` and `lastElementChild` provide easy access to the first and last child elements, excluding non-element nodes.
*/


/*
3. **Sibling Nodes**
--------------------------------------------------
- `nextElementSibling`: Returns the next sibling element of a specified element.
- `previousElementSibling`: Returns the previous sibling element of a specified element.
- `nextSibling` and `previousSibling` also exist but include text nodes and comments as siblings.

Example:
*/
const dayTwo = parent.children[1];  // Selects the second child <div class="day">Tuesday</div>
console.log(dayTwo.nextElementSibling);  // Output: <div class="day">Wednesday</div> (Next sibling element)
console.log(dayTwo.previousElementSibling);  // Output: <div class="day">Monday</div> (Previous sibling element)

/*
Explanation:
- `nextElementSibling` returns the next element node, ignoring text nodes and comments.
- `previousElementSibling` returns the previous element node.
- Use `nextSibling` and `previousSibling` for all node types.
*/


/*
4. **Accessing and Modifying Node Properties**
--------------------------------------------------
- `innerHTML`: Gets or sets the HTML content of an element.
- `textContent`: Gets or sets the text content of an element (includes hidden text).
- `style`: Directly modifies the CSS properties of an element.

Example:
*/
dayTwo.style.color = 'orange';  // Changes the text color of Tuesday to orange
console.log(dayTwo.innerHTML);  // Output: "Tuesday" (HTML content)
console.log(dayTwo.textContent);  // Output: "Tuesday" (Text content)


/*
5. **Node Properties vs. Element Properties**
--------------------------------------------------
- `parentNode`, `childNodes`, `firstChild`, and `lastChild` are node-based properties.
- `parentElement`, `children`, `firstElementChild`, and `lastElementChild` are element-based properties.
- Use element properties (`parentElement`, `children`) to focus only on element nodes and node properties (`parentNode`, `childNodes`) for all nodes (including text and comment nodes).

Example:
*/
console.log(parent.firstChild);  // Output: #text (Whitespace text node)
console.log(parent.firstElementChild);  // Output: <div class="day">Monday</div> (First child element)
