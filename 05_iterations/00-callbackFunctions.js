// JavaScript Callback Functions

/*
What is a Callback Function?
--------------------------------------------------
- A **callback function** is a function that is **passed as an argument** to another function and is executed (or "called back") inside the outer function.
- This allows functions to be more flexible and enables **asynchronous** programming.

Why Use Callback Functions?
--------------------------------------------------
1. **Flexibility**: Allows us to execute different functions within a single function based on the situation.
2. **Asynchronous Programming**: Helps in handling asynchronous operations like reading files, making API calls, or setting timers.
3. **Avoiding Repetition**: You can reuse the same function logic with different callback functions.

Syntax of a Callback Function:
--------------------------------------------------
    function outerFunction(callback) {
        // some code
        callback();  // Execute the callback function
    }

    function myCallback() {
        console.log("I am a callback function");
    }

    outerFunction(myCallback);  // Pass 'myCallback' as an argument
*/

// Example 1: Basic Callback Function
function greetUser(name, callback) {
    console.log(`Hello, ${name}`);
    callback();  // Execute the callback function
}

// Define a callback function
function sayGoodbye() {
    console.log("Goodbye!");
}

// Call greetUser with sayGoodbye as the callback
greetUser("Alice", sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!

/*
Explanation:
- `greetUser` is the main function that takes two arguments: `name` and `callback`.
- After printing `Hello, ${name}`, it executes the `callback()` function, which in this case is `sayGoodbye()`.
- `sayGoodbye` is executed after the main function finishes its own operations.
*/


// Example 2: Using Anonymous Functions as Callbacks
function processNumbers(num1, num2, callback) {
    const sum = num1 + num2;
    console.log(`Sum: ${sum}`);
    callback(sum);  // Call the callback function with `sum` as an argument
}

// Pass an anonymous function as a callback
processNumbers(5, 10, function (result) {
    console.log(`The result after adding is: ${result}`);
});
// Output:
// Sum: 15
// The result after adding is: 15

/*
Explanation:
- The callback function here is passed directly as an anonymous function without giving it a name.
- This pattern is commonly used in scenarios where you don’t need to reuse the callback function elsewhere.
*/


// Example 3: Asynchronous Callbacks
// Callbacks are heavily used in asynchronous programming to ensure that code runs in the correct order.

console.log("Start");

setTimeout(function () {
    console.log("This runs after 2 seconds");  // This code runs after 2 seconds (asynchronously)
}, 2000);

console.log("End");

// Output:
// Start
// End
// This runs after 2 seconds

/*
Explanation:
- `setTimeout` takes a callback function and a delay in milliseconds (2000 ms = 2 seconds).
- The callback function is executed after 2 seconds, demonstrating how callbacks help manage asynchronous operations.
*/


// Example 4: Callback with Error Handling
// Callbacks can also be used for error handling in asynchronous operations.

function fetchData(callback) {
    const error = false; // Change to true to simulate an error
    const data = { id: 1, name: "Sample Data" };

    if (error) {
        callback("Error: Failed to fetch data", null);  // Pass an error message to the callback
    } else {
        callback(null, data);  // Pass the data to the callback
    }
}

// Use a callback to handle error and success cases
fetchData(function (err, result) {
    if (err) {
        console.log(err);  // Output: Error: Failed to fetch data (if error is true)
    } else {
        console.log(result);  // Output: { id: 1, name: "Sample Data" }
    }
});

/*
Explanation:
- The `fetchData` function simulates fetching data and accepts a callback.
- If an error occurs, it passes an error message to the callback.
- If successful, it passes the data to the callback.
- This pattern is known as **error-first callbacks** and is commonly used in Node.js for error handling.
*/


// Example 5: Nested Callbacks and "Callback Hell"
// When multiple callbacks are nested, it can lead to a situation called "callback hell" or "pyramid of doom."

function first(callback) {
    setTimeout(() => {
        console.log("First function executed");
        callback();
    }, 1000);
}

function second(callback) {
    setTimeout(() => {
        console.log("Second function executed");
        callback();
    }, 1000);
}

function third(callback) {
    setTimeout(() => {
        console.log("Third function executed");
        callback();
    }, 1000);
}

// Nesting callbacks (this leads to callback hell)
first(function () {
    second(function () {
        third(function () {
            console.log("All functions executed in sequence");
        });
    });
});
// Output:
// First function executed
// Second function executed
// Third function executed
// All functions executed in sequence

/*
Explanation:
- While the above code works, it's difficult to read and maintain.
- Callback hell can be avoided using **Promises** or **async/await**.
*/


/*
Important Concepts:
--------------------------------------------------
1. **Synchronous vs. Asynchronous Callbacks**:
   - Synchronous callbacks are executed immediately within the function.
   - Asynchronous callbacks (e.g., `setTimeout`) are executed after a certain event occurs, such as a timer completing or data being fetched.

2. **Error-First Callbacks**:
   - Commonly used in Node.js.
   - The first argument of the callback is reserved for error handling (e.g., `err`), while the second is for the successful result.

3. **Callback Hell**:
   - Occurs when callbacks are nested deeply, making the code harder to read and maintain.
   - Can be avoided by using Promises or async/await.

Common Mistakes to Avoid:
--------------------------------------------------
- **Not invoking the callback function**: Remember to call the callback inside the main function, or it won't run.
- **Over-nesting callbacks**: This leads to callback hell, making the code hard to understand.
- **Misunderstanding async nature**: When using asynchronous callbacks, remember that code following the callback may execute before the callback is complete.
*/


// Summary:
// --------------------------------------------------
// - A callback function is a function passed as an argument to another function and is executed inside the main function.
// - Callbacks are essential for asynchronous programming and flexible function execution.
// - Use callbacks carefully to avoid callback hell, and consider using Promises or async/await for complex asynchronous operations.

