// JavaScript DOM Events: Comprehensive Notes
// ===============================================================
// Event listeners expect a function reference not a number 

// Function Execution vs. Passing a Function Reference in event listeners

/*
1. **What are Events?**
--------------------------------------------------
- Events are actions or occurrences that happen in the browser, such as:
    - Clicking a button
    - Hovering over an element
    - Typing into a text field
    - Loading a page
- JavaScript allows you to respond to these events using **Event Listeners**.

Syntax for adding an event listener:
    element.addEventListener('eventType', function, useCapture);
*/


/*
2. **Common Types of Events**
--------------------------------------------------
- **Mouse Events**:
    - `click`: Triggered when an element is clicked.
    - `dblclick`: Triggered when an element is double-clicked.
    - `mouseover`: Triggered when the mouse hovers over an element.
    - `mouseout`: Triggered when the mouse leaves an element.

- **Keyboard Events**:
    - `keydown`: Triggered when a key is pressed down.
    - `keyup`: Triggered when a key is released.
    - `keypress`: Triggered while a key is pressed (deprecated in modern browsers).

- **Form Events**:
    - `submit`: Triggered when a form is submitted.
    - `change`: Triggered when a form element value changes.
    - `input`: Triggered when a user provides input.

- **Window Events**:
    - `load`: Triggered when the page finishes loading.
    - `resize`: Triggered when the browser window is resized.
    - `scroll`: Triggered when the user scrolls the page.

- **Focus Events**:
    - `focus`: Triggered when an element gains focus.
    - `blur`: Triggered when an element loses focus.
*/


/*
3. **Event Listeners and the Event Object**
--------------------------------------------------
- Use `addEventListener()` to attach event handlers to elements.
- Syntax:
    element.addEventListener('eventType', function, useCapture);

    - `eventType`: The type of event to listen for (e.g., 'click', 'submit').
    - `function`: The callback function to execute when the event is triggered.
    - `useCapture`: A boolean (true/false) indicating whether to use capturing or bubbling phase.

Example:
*/
document.querySelector("button").addEventListener("click", function (e) {
    console.log("Button clicked!");
    console.log("Event Object:", e);  // Logs the event object
});

/*
**The Event Object (`e`)**:
- The `e` parameter in the callback function represents the **event object**.
- It contains details about the event, such as:
    - `e.target`: The element that triggered the event.
    - `e.type`: The type of event (e.g., 'click').
    - `e.preventDefault()`: Prevents the default behavior (e.g., stopping form submission).
    - `e.stopPropagation()`: Stops the event from propagating further (used in bubbling/capturing).
*/


/*
4. **Event Propagation: Bubbling and Capturing**
--------------------------------------------------
- **Event Propagation** is the process by which an event moves through the DOM tree.

A. **Event Bubbling**:
    - The event starts at the target element and bubbles **upward** to its ancestors.
    - This is the default behavior in JavaScript.

Example:
*/
document.querySelector(".parent").addEventListener("click", () => {
    console.log("Parent clicked!");
});
document.querySelector(".child").addEventListener("click", () => {
    console.log("Child clicked!");
});

// Output when clicking on the child:
// "Child clicked!" (triggered first)
// "Parent clicked!" (bubbles up)

/*
Explanation:
- The event is first handled by the `.child` element, then bubbles up to the `.parent` element.
*/

///** Event Capturing(Trickling) **:
//- The event starts from the topmost ancestor and moves ** downward ** to the target element.

//   Example:
//*/
document.querySelector(".parent").addEventListener(
    "click",
    () => {
        console.log("Parent clicked (capturing)!");
    },
    true // Enables capturing phase
);

/*
Explanation:
- By passing `true` as the third parameter in `addEventListener`, the event listener is executed during the capturing phase.
- The default behavior is to execute the event during the bubbling phase (`false`).
*/


/*
5. **Stopping Event Propagation**
--------------------------------------------------
- Use `e.stopPropagation()` to stop the event from propagating to parent elements.
- This works for both bubbling and capturing phases.

Example:
*/
document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation();  // Prevents the event from reaching the parent
    console.log("Child clicked (propagation stopped)!");
});

/*
Output when clicking the child:
- "Child clicked (propagation stopped)!" (Parent click handler is not executed)
*/


/*
6. **Preventing Default Behavior**
--------------------------------------------------
- Use `e.preventDefault()` to prevent the browser's default behavior for an event.

Example:
*/
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();  // Prevents the form from submitting
    console.log("Form submission prevented!");
});

/*
Explanation:
- Prevents actions like form submission or navigating to a new page when a link is clicked.
*/


/*
7. **Delegating Events**
--------------------------------------------------
- Event Delegation involves attaching a single event listener to a parent element and handling events for its child elements.
- This improves performance and simplifies dynamic content handling.

Example:
*/
document.querySelector(".parent").addEventListener("click", (e) => {
    if (e.target.classList.contains("child")) {
        console.log("Child element clicked!");
    }
});

/*
Explanation:
- Instead of adding individual listeners to each `.child` element, attach one listener to the `.parent` and use `e.target` to check which child was clicked.
*/


/*
8. **Comparison of Bubbling and Capturing**
--------------------------------------------------
- Bubbling (default):
    - Starts from the target element and propagates upward.
    - Most event listeners work during this phase (useCapture: false).

- Capturing:
    - Starts from the root and propagates downward to the target.
    - Must explicitly enable using `useCapture: true`.

Summary:
- Use bubbling for most cases (default behavior).
- Use capturing only when you need to handle events before the target.
*/


/*
9. **Inline Event Handlers vs. addEventListener**
--------------------------------------------------
- **Inline Event Handlers**:
    - Declared directly in HTML (e.g., `<button onclick="doSomething()">Click</button>`).
    - Limited flexibility and difficult to manage.

- **addEventListener**:
    - Allows attaching multiple listeners to the same event.
    - Offers better separation of HTML and JavaScript.
    - More versatile for dynamic content.

Example:
*/
document.querySelector("button").addEventListener("click", () => {
    console.log("First listener!");
});
document.querySelector("button").addEventListener("click", () => {
    console.log("Second listener!");
});

/*
Output when clicking the button:
- "First listener!"
- "Second listener!"
*/


/*
10. **Summary of Key Concepts**
--------------------------------------------------
- Event Types: Mouse, Keyboard, Form, Window, and more.
- Event Propagation: Bubbling (default) and Capturing (useCapture: true).
- Event Object (`e`): Provides details about the event and methods like `preventDefault()` and `stopPropagation()`.
- addEventListener: Flexible and recommended way to handle events.
- Event Delegation: Attach listeners to parent elements for better performance and dynamic content handling.
*/

