"use strict" //treat all the code as it's based on the newer version of Javascript

alert(3===3); //won't work in the Node. Should work in the browser engine

// Always focus on the readability of the code, should be readable under all circumstances.

console.log(3
    +
    3
) // an example of a bad code readability-wise.

// most common documentations are 1.MDN, 2.tc39.es

// Datatypes (aka Types of Javascript)

// JavaScript is a dynamic language with dynamic types. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types.

// Use the typeof operator to look for the type of the variable. Very handy to understand variables. 

// Primitive Data Types (Value type)
// These are the most basic data types in JavaScript. They are immutable which means fixed values and are stored directly in memory.

// 1. Number: Represents both integer and floating-point numbers.
let age = 25; // Example of an integer
let price = 99.99; // Example of a floating-point number. Floats are included in Number as well

// Maximum value for Number (NOT only INTEGER)
let maxNumber = Number.MAX_VALUE; // 1.7976931348623157e+308
console.log(maxNumber); // Output: 1.7976931348623157e+308

// Minimum value for Number (NOT  only INTEGER)
let minNumber = Number.MIN_VALUE; // 5e-324
console.log(minNumber); // Output: 5e-324

//Range of Number Type: It can represent extremely large and small numbers, but not all integers within that range can be represented exactly.

//Exact Integer Representation: It is guaranteed only within the range of ±2⁵³ - 1 (±9,007,199,254,740,992). Beyond this range, precision errors occur for integers.


//Examples to understand numbers
const largeNumber = 2 ** 53;  // 9007199254740992
const largerNumber = largeNumber + 1;

console.log(largeNumber);       // Output: 9007199254740992
console.log(largerNumber);      // Output: 9007199254740992 (incorrect due to precision loss)

const exactInteger = 9007199254740991;  // 2^53 - 1, the maximum safe integer
const inexactInteger = 9007199254740993;  // Greater than 2^53

console.log(exactInteger + 1);   // Output: 9007199254740992 (correct)
console.log(inexactInteger);     // Output: 9007199254740992 (precision loss, incorrect)

//For handling integers larger than 2⁵³ - 1, you can use the BigInt type in JavaScript, which allows for representing arbitrarily large integers:

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
// typeof uninitialized => undefined


// 6. Null: Represents the intentional absence of any object value.
let emptyValue = null; // Represents "no value" or "nothing"
// typeof null => Object

// 7. Symbol: A unique and immutable value, often used as a key for object properties. used to introduce uniqueness to the program. 
let uniqueId = Symbol('id'); // Creating a new unique Symbol
// typeof uniqueId => symbol

// Non-Primitive (Reference) Data Types
// These types are mutable and hold references to memory locations where the data is stored.

// 1. Object: A collection of key-value pairs.
let person = {
    name: "Alice",
    age: 30,
    isEmployee: true
};

//typeof person => object

// 2. Array: An ordered list of values.
let fruits = ["apple", "banana", "cherry"]; // Array of strings
// typeof fruits => object. But if you wanna check wether the variable is an array or not then use Array.isArray(fruits) => will return true

// 3. Function: A block of code designed to perform a particular task. Complete datatype is Object Function. But shown as function in the console.
function greet(name) {
    return `Hello, ${name}!`;
}

// typeof fruits => function (complete is function Object)


// 4. Date: Represents dates and times.
let currentDate = new Date(); // Current date and time
// typeof currentDate => Object

// 5. RegExp (Regular Expression): Patterns used to match character combinations in strings.
let regex = /hello/i; // Regular expression to match "hello" case-insensitively
// typeof regex => Object

// 6. Map: A collection of keyed data items, similar to an object but with keys of any type.
let map = new Map();
map.set('name', 'John'); // Adding key-value pairs
// typeof map => Object

// 7. Set: A collection of unique values.
let setOne = new Set();
setOne.setOne(1); // Adding values
setOne.addOne(2);
setOne.add(1); // Duplicate values are ignored
// typeof setOne => Object


//typeof any arrow function will also return an object

console.log(typeof undefined) //should return undefined;
console.log(typeof null) //should return OBJECT. Interview Question.
console.log(typeof Infinity) //Number
