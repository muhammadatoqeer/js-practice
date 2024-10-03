// JavaScript DOM Manipulation: Editing and Removing Elements
// ===============================================================

/*
1. **Adding New Elements**
--------------------------------------------------
- Elements can be added using the `document.createElement()` method and then inserting them using methods like `.appendChild()` or `.insertBefore()`.
- You can set the inner content using `.innerHTML`, `.innerText`, or `.textContent`.

Example:
*/
function addLanguage(langName) {
    const li = document.createElement('li');  // Create a new <li> element
    li.innerHTML = `${langName}`;  // Set the inner HTML content to the language name
    document.querySelector('.language').appendChild(li);  // Append the <li> to the <ul> with class 'language'
}
addLanguage("python");   // Adds <li>python</li>
addLanguage("typescript");  // Adds <li>typescript</li>

/*
Explanation:
- This function creates a new `<li>` element and sets its content using `innerHTML`.
- `innerHTML` is fine here because it's a simple string, but avoid using it with untrusted data due to potential security issues like XSS (Cross-Site Scripting).
*/

function addOptiLanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));  // Creates a text node with the language name and appends it
    document.querySelector('.language').appendChild(li);
}
addOptiLanguage('golang');  // Adds <li>golang</li>

/*
Explanation:
- The `addOptiLanguage` function uses `createTextNode()` instead of `innerHTML`.
- `createTextNode()` is more **secure** because it treats everything as plain text, avoiding the risks of inserting HTML code.
*/


/*
2. **Editing Elements**
--------------------------------------------------
There are multiple ways to edit elements in the DOM, each with its pros and cons depending on use case:

A. **Using `.innerHTML`**:
--------------------------------------------------
- `element.innerHTML = 'new content'` replaces all the inner HTML of the element, including any child elements.
- It can lead to performance issues if the element has many children, as it re-renders the entire inner content.

Example:
*/
// Replace content using `.innerHTML`
const secondLang = document.querySelector("li:nth-child(2)");
secondLang.innerHTML = "Mojo";  // Replaces "typescript" with "Mojo"

/*
Analysis:
- `.innerHTML` is simple to use but replaces the entire content, which can lead to performance issues with complex elements.
- Avoid using `.innerHTML` for frequent updates or when working with nested elements, as it causes unnecessary re-rendering.
*/

/*
B. ** Using`.textContent` or`.innerText` **:
--------------------------------------------------
- `element.textContent = 'new content'` changes only the text content of the element, not the HTML structure.
- `innerText` behaves similarly but respects styles like `display: none` and does not show hidden text.

    Example:
*/
const thirdLang = document.querySelector("li:nth-child(3)");
thirdLang.textContent = "Dart";  // Changes the text content to "Dart" without altering the structure

/*
Analysis:
- Use `.textContent` for changing only the text content when HTML tags are not needed.
- It is more secure than `.innerHTML` as it does not interpret HTML, making it resistant to XSS attacks.
*/

/*
C. ** Using`.outerHTML` **:
--------------------------------------------------
- `element.outerHTML = 'new element'` replaces the entire element, including itself, with new HTML.
- It replaces both the element and its content with the new markup.

    Example:
*/
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = '<li>TypeScript</li>';  // Completely replaces the first <li> with new markup

/*
Analysis:
- `.outerHTML` is useful when you want to replace the whole element, not just its content.
- This method can lead to the **loss of references** if you were storing the replaced element in a variable, as it no longer exists in the DOM.
*/

/*
D. ** Using`.replaceWith(newElement)` **:
--------------------------------------------------
- `element.replaceWith(newElement)` replaces the element with another element or node.
- This approach is more flexible as it can accept multiple nodes or strings.

    Example:
*/
const newli = document.createElement('li');
newli.textContent = "Mojo";  // Create a new <li> element with text "Mojo"
secondLang.replaceWith(newli);  // Replace the second <li> (typescript) with the new <li> (Mojo)

/*
Analysis:
- `replaceWith()` allows more flexibility as you can pass in nodes, elements, or strings.
- It is a clean way to swap elements without directly modifying their content.
*/


/*
3. **Removing Elements**
--------------------------------------------------
There are several methods to remove elements from the DOM:

A. **Using `.remove()`**:
--------------------------------------------------
- `element.remove()` directly removes the specified element from the DOM.
- It is straightforward and does not require access to the parent element.

Example:
*/
const lastLang = document.querySelector('li:last-child');  // Selects the last <li> element
lastLang.remove();  // Removes the last <li> element from the DOM

/*
Explanation:
- `remove()` is a simple method that removes the element and all its content, making it no longer accessible in the DOM.
*/

/*
B. ** Using`.removeChild(childElement)` **:
--------------------------------------------------
- `parentElement.removeChild(childElement)` removes a specific child element from its parent.
- It requires a reference to both the parent and child elements.

    Example:
*/
const parentElement = document.querySelector('.language');
parentElement.removeChild(parentElement.firstElementChild);  // Removes the first child <li> element

/*
Explanation:
- Use `.removeChild()` when you need to ensure that a specific child element is removed, especially in dynamic scenarios where child nodes might change.
*/


/*
4. **Comparison and Optimization Notes**
--------------------------------------------------
- **Performance**:
    - `innerHTML` is more computationally expensive when replacing large or complex structures.
    - `textContent` and `replaceWith` are generally faster as they do not re-render the entire element structure.

- **Security**:
    - `innerHTML` can expose your application to XSS attacks if you insert untrusted content.
    - Prefer `textContent` or `createTextNode()` when inserting plain text to avoid security risks.

- **Use Case**:
    - Use `.innerHTML` for setting multiple child elements or inserting HTML markup.
    - Use `.textContent` for simple text content changes.
    - Use `.outerHTML` or `replaceWith` when you need to replace the entire element itself.
    - Use `.remove()` for straightforward removal, or `.removeChild()` when you need to manipulate parent-child relationships.
*/


/*
Summary of Methods and Properties Used:
--------------------------------------------------
1. `document.createElement('tag')`: Creates a new HTML element.
2. `element.innerHTML`: Sets or gets the HTML content of an element.
3. `element.textContent`: Sets or gets the plain text content of an element.
4. `element.outerHTML`: Replaces the element itself and its content with new markup.
5. `element.replaceWith(newElement)`: Replaces the element with another node or string.
6. `element.remove()`: Removes the element from the DOM.
7. `parentElement.removeChild(childElement)`: Removes a child element from the parent.

Understanding these methods will help you manipulate DOM elements effectively while considering performance and security implications.
*/
