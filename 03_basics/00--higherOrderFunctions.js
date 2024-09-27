// JavaScript Higher-Order Functions

/*
What is a Higher-Order Function?
--------------------------------------------------
- A **higher-order function** is a function that either:
  1. **Takes one or more functions as arguments** (parameters).
  2. **Returns a function** as its result.

- Higher-order functions are a powerful feature of functional programming in JavaScript, enabling you to write more concise, flexible, and reusable code.

Why Use Higher-Order Functions?
--------------------------------------------------
1. **Improved Code Reusability**: You can pass different functions as arguments to a higher-order function, reducing repetition.
2. **Simplified Operations**: Makes complex operations like filtering, mapping, and reducing arrays simpler and more readable.
3. **Encapsulation of Functionality**: Higher-order functions can create closures, helping in encapsulating functionality.
4. **Supports Functional Programming Paradigm**: Allows treating functions as first-class citizens, enabling functional programming techniques.

*/

// Example 1: A Higher-Order Function Taking Another Function as an Argument

// Function that accepts another function as a parameter
function repeatOperation(operation, num) {
    for (let i = 0; i < num; i++) {
        operation(); // Call the passed-in function
    }
}

// Function to pass as an argument
function greet() {
    console.log("Hello, world!");
}

// Use the higher-order function by passing `greet` as a callback
repeatOperation(greet, 3);
// Output:
// Hello, world!
// Hello, world!
// Hello, world!

/*
Explanation:
- `repeatOperation` is a higher-order function because it accepts another function (`operation`) as its parameter.
- It calls the `operation` function `num` times, allowing you to reuse `repeatOperation` with different functions.
*/


// Example 2: Higher-Order Function Returning Another Function

// Higher-order function that returns a function
function createMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}

const double = createMultiplier(2);  // Creates a function that doubles the input
const triple = createMultiplier(3);  // Creates a function that triples the input

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

/*
Explanation:
- `createMultiplier` is a higher-order function because it returns another function.
- The returned function captures the `multiplier` value, creating a closure.
- This way, you can create multiple multiplier functions with different factors (e.g., double, triple).
*/


// Example 3: Common Array Methods as Higher-Order Functions
// --------------------------------------------------
// JavaScript array methods like `map`, `filter`, and `reduce` are higher-order functions because they take callback functions as arguments.

const numbers = [1, 2, 3, 4, 5];

// `map` - Applies the callback to each element and returns a new array
const squaredNumbers = numbers.map(function (num) {
    return num * num;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

/*
Explanation:
- The `map` function takes a callback that specifies how to transform each element.
- It creates a new array with the transformed values.
*/

// `filter` - Returns a new array with elements that satisfy the condition
const evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;  // Keep only even numbers
});
console.log(evenNumbers);  // Output: [2, 4]

/*
Explanation:
- The `filter` function takes a callback that specifies the condition.
- It returns a new array with elements that pass the condition.
*/

// `reduce` - Accumulates all elements based on the logic in the callback
const sum = numbers.reduce(function (accumulator, current) {
    return accumulator + current;
}, 0);
console.log(sum);  // Output: 15

/*
Explanation:
- The `reduce` function takes a callback that specifies how to combine elements.
- It iterates over the array and reduces it to a single value.
*/


// Example 4: Creating a Custom Higher-Order Function

// A function that logs the execution time of any function passed to it
function measureExecutionTime(func) {
    return function (...args) {  // Rest parameter to capture any number of arguments
        const start = Date.now();
        const result = func(...args);  // Call the original function
        const end = Date.now();
        console.log(`Execution time: ${end - start} ms`);
        return result;
    };
}

// Function to be passed into `measureExecutionTime`
function slowFunction() {
    // Simulate a slow function with a loop
    for (let i = 0; i < 1e6; i++) { }
    return "Done";
}

// Wrap the `slowFunction` with the higher-order function
const timedSlowFunction = measureExecutionTime(slowFunction);

console.log(timedSlowFunction());  // Output: Done (and logs the execution time)

/*
Explanation:
- `measureExecutionTime` is a higher-order function that accepts a function `func` and returns a new function.
- The returned function measures the execution time of `func`.
- This is useful for logging, performance analysis, and debugging.
*/


/*
Important Points to Remember:
--------------------------------------------------
1. **Functions as First-Class Citizens**:
   - JavaScript treats functions as first-class citizens, meaning they can be stored in variables, passed as arguments, and returned from other functions.

2. **Closures with Higher-Order Functions**:
   - Higher-order functions can create closures, where the returned function retains access to variables in its outer function even after the outer function has finished executing.

3. **Common Uses of Higher-Order Functions**:
   - Asynchronous operations (e.g., passing callbacks to handle asynchronous tasks).
   - Array manipulation (e.g., `map`, `filter`, `reduce`).
   - Creating utility functions (e.g., functions that modify the behavior of other functions).

4. **Avoiding Callback Hell**:
   - Be cautious when nesting multiple higher-order functions with callbacks, as it can lead to callback hell.
   - Use Promises or `async/await` for handling asynchronous operations more cleanly.

5. **Performance Considerations**:
   - Overusing higher-order functions may impact performance in some cases due to creating many nested function calls.
   - Use higher-order functions where appropriate and avoid excessive nesting.

6. **Error Handling**:
   - Always handle errors and unexpected behavior, especially when dealing with asynchronous higher-order functions.

Conclusion:
--------------------------------------------------
- Higher-order functions are a core concept in JavaScript that enable flexibility, reusability, and cleaner code.
- They are widely used in both synchronous and asynchronous programming.
- Learning higher-order functions helps you understand JavaScript's functional programming capabilities.
*/
