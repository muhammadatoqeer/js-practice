"use strict" //treat all the code as it's based on the newer version of Javascript

alert(3===3); //won't work in the Node. Should work in the browser engine

// Always focus on the readability of the code, should be readable under all circumstances.

console.log(3
    +
    3
) // an example of a bad code readability-wise.

// most common documentations are 1.MDN, 2.tc39.es

// Datatypes

// JavaScript is a dynamic language with dynamic types. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types.

// Primitive Data Types (Value type)
// These are the most basic data types in JavaScript. They are immutable which means fixed values and are stored directly in memory.

// 1. Number: Represents both integer and floating-point numbers.
let age = 25; // Example of an integer
let price = 99.99; // Example of a floating-point number. Floats are included in Number as well

// Maximum value for Number
let maxNumber = Number.MAX_VALUE; // 1.7976931348623157e+308
console.log(maxNumber); // Output: 1.7976931348623157e+308

// Minimum value for Number
let minNumber = Number.MIN_VALUE; // 5e-324
console.log(minNumber); // Output: 5e-324

// 2. BigInt: Represents integers with arbitrary precision.
let bigIntValue = 1234567890123456789012345678901234567890n; // Add 'n' at the end to denote BigInt

// Maximum safe integer for Number
let maxSafeInt = Number.MAX_SAFE_INTEGER; // 9007199254740991
console.log(maxSafeInt); // Output: 9007199254740991

// BigInt can exceed this limit
let largerThanMax = BigInt(maxSafeInt) + 1n; // BigInt value
console.log(largerThanMax); // Output: 9007199254740992n

// 3. String: Represents textual data enclosed in single quotes, double quotes, or backticks.
let name = "John Doe"; // Double quotes
let greeting = 'Hello, World!'; // Single quotes
let multiLine = `This is
a multi-line
string`; // Template literals (backticks)

// 4. Boolean: Represents logical values: true or false.
let isActive = true; // Boolean true
let isLoggedIn = false; // Boolean false

// 5. Undefined: A variable that has been declared but not assigned a value.
let uninitialized; // No value assigned
console.log(uninitialized); // Output: undefined

// 6. Null: Represents the intentional absence of any object value.
let emptyValue = null; // Represents "no value" or "nothing"

// 7. Symbol: A unique and immutable value, often used as a key for object properties. used to introduce uniqueness to the program. 
let uniqueId = Symbol('id'); // Creating a new unique Symbol

// Non-Primitive (Reference) Data Types
// These types are mutable and hold references to memory locations where the data is stored.

// 1. Object: A collection of key-value pairs.
let person = {
    name: "Alice",
    age: 30,
    isEmployee: true
};

// 2. Array: An ordered list of values.
let fruits = ["apple", "banana", "cherry"]; // Array of strings

// 3. Function: A block of code designed to perform a particular task. Complete datatype is Object Function. But shown as function in the console.
function greet(name) {
    return `Hello, ${name}!`;
}

// 4. Date: Represents dates and times.
let currentDate = new Date(); // Current date and time

// 5. RegExp (Regular Expression): Patterns used to match character combinations in strings.
let regex = /hello/i; // Regular expression to match "hello" case-insensitively

// 6. Map: A collection of keyed data items, similar to an object but with keys of any type.
let map = new Map();
map.set('name', 'John'); // Adding key-value pairs

// 7. Set: A collection of unique values.
let set = new Set();
set.add(1); // Adding values
set.add(2);
set.add(1); // Duplicate values are ignored



// Use the typeof operator to look for the type of the variable. Very handy to understand variables. 

console.log(typeof undefined) //should return undefined;
console.log(typeof null) //should return OBJECT. Interview Question.
