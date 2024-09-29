// JavaScript Method Chaining: Comprehensive Guide with Examples
// ===============================================================

/*
What is Method Chaining?
--------------------------------------------------
- Method chaining is a technique that allows you to call multiple methods on the same object, one after another, in a single statement.
- It works when each method in the chain returns either the object itself (`this`) or a new object/value that has more methods available to it.
- This results in a more fluid, readable, and less repetitive code.

Why Use Method Chaining?
--------------------------------------------------
- Improves readability and reduces the need for temporary variables.
- Encapsulates operations, making it easier to follow a series of transformations or actions.
- Supports a more expressive and declarative programming style.

Common Use Cases:
- Array and string transformations (e.g., filtering, mapping, reducing).
- Promises in asynchronous programming.
- Custom objects like Fluent API design patterns.
*/


// 1. Method Chaining with Array Methods
// --------------------------------------------------
// Example: Using `filter`, `map`, and `reduce` in a chained sequence

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .filter(num => num % 2 === 0)  // Step 1: Filter even numbers [2, 4, 6, 8, 10]
    .map(num => num * 2)           // Step 2: Double each number [4, 8, 12, 16, 20]
    .reduce((sum, num) => sum + num, 0);  // Step 3: Sum up the doubled values

console.log("Chained Array Result:", result);  // Output: 60

/*
Explanation:
- Step 1: Filters even numbers from the array.
- Step 2: Doubles each filtered number.
- Step 3: Sums up the doubled numbers.
- Each method returns a new array or value that is used by the next method in the chain.
*/


// 2. Method Chaining with String Methods
// --------------------------------------------------
// Example: Chaining string methods like `trim`, `toUpperCase`, and `replace`

const text = "   Hello World! JavaScript is awesome.   ";

const processedText = text
    .trim()                  // Step 1: Remove whitespace from both ends
    .toUpperCase()           // Step 2: Convert to uppercase
    .replace("JAVASCRIPT", "JS");  // Step 3: Replace 'JAVASCRIPT' with 'JS'

console.log("Chained String Result:", processedText);  // Output: "HELLO WORLD! JS IS AWESOME."

/*
Explanation:
- `trim()` removes whitespace.
- `toUpperCase()` converts to uppercase.
- `replace()` substitutes 'JAVASCRIPT' with 'JS'.
- Each string method returns a new string, making chaining possible.
*/


// 3. Custom Method Chaining with Objects
// --------------------------------------------------
// Example: Defining a custom object that supports method chaining

const Calculator = function (value = 0) {
    this.value = value;
    return this;  // Return the object itself to allow chaining
};

// Adding methods to the Calculator prototype
Calculator.prototype.add = function (num) {
    this.value += num;
    return this;  // Return the object for chaining
};

Calculator.prototype.subtract = function (num) {
    this.value -= num;
    return this;
};

Calculator.prototype.multiply = function (num) {
    this.value *= num;
    return this;
};

Calculator.prototype.divide = function (num) {
    if (num !== 0) this.value /= num;
    return this;
};

Calculator.prototype.result = function () {
    return this.value;  // Return the final value
};

// Using Custom Method Chaining
const calc = new Calculator();
const finalValue = calc.add(10).subtract(2).multiply(3).divide(2).result();
console.log("Chained Calculation Result:", finalValue);  // Output: 12

/*
Explanation:
- Each method (add, subtract, multiply, divide) modifies the `value` property and returns `this` for further chaining.
- `result()` returns the final value after all operations.
- This pattern is commonly used in Fluent APIs to chain multiple actions together.
*/


// 4. Method Chaining with Promises
// --------------------------------------------------
// Example: Chaining Promise methods like `then`, `catch`, and `finally`

const asyncOperation = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operation Successful!");
    }, 1000);
});

asyncOperation
    .then(result => {
        console.log("Step 1 - Result:", result);  // Output: Operation Successful!
        return result + " Processed";
    })
    .then(processedResult => {
        console.log("Step 2 - Processed Result:", processedResult);  // Output: Operation Successful! Processed
        return processedResult + " Again";
    })
    .catch(error => {
        console.error("Error:", error);  // Catch any error if occurred
    })
    .finally(() => {
        console.log("Operation Completed!");  // Output: Operation Completed!
    });

/*
Explanation:
- The promise is resolved with a message after a 1-second delay.
- Each `then` method receives the result from the previous `then`.
- `catch` is used for error handling, and `finally` is called at the end regardless of success or failure.
- This pattern is commonly used for handling asynchronous code in JavaScript.
*/


// 5. Chaining with `reduce` and `reduceRight`
// --------------------------------------------------
// Example: Using `reduceRight` to create a reverse-order sentence

const words = ["JavaScript", "is", "fun"];

// Using `reduceRight` to create a sentence in reverse order
const reverseSentence = words.reduceRight((acc, word) => acc + " " + word);
console.log("Chained ReduceRight Result:", reverseSentence);  // Output: "fun is JavaScript"

/*
Explanation:
- `reduceRight` processes elements from right to left.
- It concatenates the words into a reverse-order sentence.
*/


// Summary of Method Chaining:
// --------------------------------------------------
// - **Array Methods**: Chaining methods like `map`, `filter`, `reduce`, and `sort` allow you to transform and reduce data efficiently.
// - **String Methods**: Chaining methods like `trim`, `replace`, and `toUpperCase` simplifies text manipulation.
// - **Custom Objects**: Returning `this` in custom object methods allows for creating Fluent API designs.
// - **Promises**: Chaining `then`, `catch`, and `finally` enables structured and readable asynchronous code handling.

