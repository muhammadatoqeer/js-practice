//Assumed value that will always return false is a falsy value and every single other value will be truthy

//Check for true false value via the Booloan Object.

/*
Falsy Values:

1. 0 (zero)
2. "" (empty string)
3. false (boolean)
4. null (datatype)
5. undefined
6. NaN
7. -0 (negative zero)
8. 0n (BigInt zero)

Every other value will always be a truthy value

Surprising truthy values:

"0" (zero in string), "false" (false in string), " " (space in string), {} (empty object), [] (empty array).

- test for checking empty array is arr.length === 0;
- test for checking empty object is Object.keys(obj).length


false == 0 //true
false == '' //true
0 == '' //true

*/

//Nullish Coalescing Operator (??) logical operator : null and undefined. Basically a safety check for null/undefined value

const val1 = 5 ?? 10
console.log(val1); //5

const val2 = undefined ?? 10
console.log(val1); //10

const val3 = null ?? 10
console.log(val1); //10

const val4 = null ?? 10 ?? 20 //picks up the first non-null/und value
console.log(val1); //10

//Ternary Operator (shorthand for if...else)

const price = 200;

price > 100 ? "Yes" : "No" //Output: Yes





//++++++++++++++++++++++++++++ OPERATORS NOTES +++++++++++++++++++++++++++++++++++++++

// JavaScript Logical Operators: Comprehensive Guide

// 1. AND Operator (&&)
// The AND operator (&&) evaluates to `true` if both operands are true. If the first value is falsy, it returns the first value.
// Otherwise, it returns the second value.

const a = true;
let b = false;

console.log(a && b); // Output: false (because b is false)
console.log(5 && 10); // Output: 10 (because both operands are truthy, returns the second)

// Usage example: Check if both conditions are true
let isLoggedIn = true;
let hasPermission = true;

if (isLoggedIn && hasPermission) {
    console.log("User can access the dashboard"); // This will run because both conditions are true
}


// 2. OR Operator (||)
// The OR operator (||) returns `true` if at least one of the operands is true. If the first value is truthy, it returns that value.
// Otherwise, it returns the second value.

console.log(a || b); // Output: true (because a is true)
console.log(0 || "Hello"); // Output: "Hello" (because 0 is falsy, so it returns the second value)

// Usage example: Set default values
let userName = null;
let defaultName = "Guest";
console.log(userName || defaultName); // Output: "Guest" (because userName is null)


// 3. Nullish Coalescing Operator (??)
// The nullish coalescing operator (??) returns the right-hand operand if the left-hand operand is `null` or `undefined`. 
// Otherwise, it returns the left-hand operand.

let user = null;
let fallbackUser = "Anonymous";
console.log(user ?? fallbackUser); // Output: "Anonymous" (because user is null)

let definedUser = "John";
console.log(definedUser ?? fallbackUser); // Output: "John" (because definedUser is not null or undefined)


// 4. Ternary Operator (Conditional Operator)
// The ternary operator takes three operands and is used as a shorthand for if-else statements.
// Syntax: condition ? expressionIfTrue : expressionIfFalse

let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: "Yes" (because age is 18, so the condition is true)

// Example: Shorthand for condition
let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result); // Output: "Even" (because 10 is even)


// 5. Unary Operators
// Unary operators operate on a single operand. Some common unary operators include `+`, `-`, `++`, `--`, and `typeof`.

// Unary Plus (+) - Converts the operand to a number
let str = "5";
console.log(+str); // Output: 5 (converts string to number)

// Unary Negation (-) - Negates the operand (makes it negative)
let num = 10;
console.log(-num); // Output: -10

// Increment (++) - Increments the operand by 1
let count = 0;
count++;
console.log(count); // Output: 1

// Decrement (--) - Decreases the operand by 1
count--;
console.log(count); // Output: 0

// `typeof` - Returns the type of the operand
let value = "Hello";
console.log(typeof value); // Output: string

// `delete` - Removes a property from an object
let obj = { name: "John", age: 30 };
delete obj.age;
console.log(obj); // Output: { name: "John" }


// 6. NOT Operator (!)
// The NOT operator (!) inverts the boolean value of the operand. If it's true, it becomes false and vice versa.

let isFalse = false;
console.log(!isFalse); // Output: true (inverts the boolean value)

let truthyValue = "Hello";
console.log(!truthyValue); // Output: false (because "Hello" is truthy, ! turns it to false)


// 7. Double NOT (!!)
// Double NOT (!!) is used to convert any value to a boolean.

console.log(!!0); // Output: false (because 0 is falsy)
console.log(!!"Non-empty string"); // Output: true (because non-empty strings are truthy)


// 8. Bitwise NOT (~)
// The bitwise NOT (~) operator inverts the bits of a number.

let bitwiseValue = 5; // In binary: 0000000000000101
console.log(~bitwiseValue); // Output: -6 (because bitwise NOT inverts all bits)


// 9. Optional Chaining (?.)
// The optional chaining operator (?.) allows you to access deeply nested properties safely. If a property is `null` or `undefined`, it returns `undefined` instead of throwing an error.

let person = { name: "John", address: { city: "New York" } };
console.log(person?.address?.city); // Output: "New York"
console.log(person?.contact?.phone); // Output: undefined (because contact is undefined, but no error is thrown)


// 10. `in` Operator
// The `in` operator checks whether a property exists in an object.

let car = { make: "Toyota", model: "Corolla" };
console.log("make" in car); // Output: true (because "make" exists in car)
console.log("year" in car); // Output: false (because "year" does not exist in car)


// 11. `instanceof` Operator
// The `instanceof` operator checks if an object is an instance of a specific class or constructor.

class Animal { }
let dog = new Animal();
console.log(dog instanceof Animal); // Output: true (dog is an instance of Animal)


// Summary:
// -------------------------------------
// - `&&` (AND) returns the first falsy value or the last truthy value.
// - `||` (OR) returns the first truthy value or the last falsy value.
// - `??` (Nullish Coalescing) returns the right-hand value if the left-hand value is null or undefined.
// - The Ternary Operator `? :` is a shorthand for if-else.
// - Unary operators like `+`, `-`, `++`, `--`, `typeof`, and `delete` work on a single operand.
// - `!` inverts a boolean value, while `!!` converts a value to a boolean.
// - Optional Chaining `?.` safely accesses properties without throwing errors.
// - `in` checks if a property exists in an object.
// - `instanceof` checks if an object is an instance of a class.
