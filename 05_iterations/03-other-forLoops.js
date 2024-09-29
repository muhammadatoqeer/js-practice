// JavaScript Loops and Iteration Methods
// ======================================

/*
1. `for...of` Loop:
--------------------------------------------------
- The `for...of` loop is used to iterate over **iterable objects** such as arrays, strings, Maps, Sets, and more.
- It **cannot** be used to iterate over plain objects. Attempting to do so results in an error.

Syntax:
    for (variable of iterable) {
        // code block to execute
    }

Use Case:
- Use `for...of` to iterate over iterable data structures (arrays, strings, etc.) when you want to access **values** directly.

Example:
*/
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);  // Output: apple, banana, cherry
}

/*
Common Errors:
- If you use `for...of` on a non-iterable like a plain object, you will get a TypeError.

Example:
*/
const person = { name: "John", age: 30 };
// for (const key of person) {
//     console.log(key);  // TypeError: person is not iterable
// }

/*
2. `for...in` Loop:
--------------------------------------------------
- The `for...in` loop is used to iterate over **enumerable properties** of an object. (Enumeration in JavaScript refers to the process of iterating over the properties (keys) of an object. When you enumerate an object, you go through each of its enumerable properties, including keys that belong directly to the object)

- It iterates over **keys** (property names), not values, and it can be used on plain objects.

Syntax:
    for (key in object) {
        // code block to execute
    }

Use Case:
- Use `for...in` to iterate over the **keys** of an object or to access the properties of an object.

Example:
*/
const car = { make: "Toyota", model: "Corolla", year: 2020 };
for (const key in car) {
    console.log(`${key}: ${car[key]}`);  // Output: make: Toyota, model: Corolla, year: 2020
}

/*
Common Errors:
- `for...in` also iterates over inherited properties from the prototype chain, which may cause unexpected results.
- To prevent this, use `hasOwnProperty()` to filter out inherited properties.

Example:
*/
for (const key in car) {
    if (car.hasOwnProperty(key)) {
        console.log(`${key}: ${car[key]}`);  // Output: Only own properties will be printed
    }
}

/*
3. Iterating Over a Map Object:
--------------------------------------------------
- A `Map` object holds key-value pairs and remembers the original insertion order of the keys.
- You can use `for...of` to iterate over Maps, but **not** `for...in` because `for...in` works on enumerable properties of objects, not iterable objects like Maps.

Syntax:
    for (const [key, value] of map) {
        // code block to execute
    }

Use Case:
- Use `for...of` to access both keys and values in a Map.

Example:
*/
const userMap = new Map();
userMap.set("name", "Alice");
userMap.set("age", 25);

for (const [key, value] of userMap) {
    console.log(`${key}: ${value}`);  // Output: name: Alice, age: 25
}

/*
Common Errors:
- Using `for...in` on a Map will not iterate over its entries because `for...in` only works on objects' properties.

Example:
*/
// for (const key in userMap) {
//     console.log(key);  // Output: Nothing (Map does not have enumerable properties)
// }

/*
4. `forEach()` Method:
--------------------------------------------------
- The `forEach()` method is used to iterate over arrays and other collections (like Maps and Sets).
- It allows you to execute a provided function once for each element in the array.

Syntax:
    array.forEach((element, index, array) => {
        // code block to execute
    });

Use Case:
- Use `forEach()` for arrays when you need to access each element or perform operations on each element. Returns nothing

Example:
*/
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);  // Output: Index 0: 1, Index 1: 2, etc.
});

/*
- With `forEach()`, you cannot use `break` or `continue` to control the flow, unlike traditional loops.

Example with Map:
*/
userMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);  // Output: name: Alice, age: 25
});

/*
Important Differences and Use Cases:
--------------------------------------------------
1. `for...of`:
   - Best for iterating over iterable objects (arrays, strings, Maps, Sets).
   - Directly gives the **value** of each element.
   - Cannot be used on plain objects.

2. `for...in`:
   - Best for iterating over **keys** of an object.
   - Iterates over all enumerable properties (including inherited ones).
   - Can be used on plain objects, but be cautious of inherited properties.

3. `forEach()`:
   - Best for performing an operation on each element of an array or collection.
   - Cannot be used with `break` or `continue`.
   - Works on arrays, Maps, and Sets.

4. Iterating Over Maps:
   - Use `for...of` or `forEach()` to iterate over key-value pairs.
   - Do not use `for...in` as it does not work with Maps.

Common Errors to Avoid:
--------------------------------------------------
- Using `for...of` on objects results in a `TypeError` because objects are not iterable.
- Using `for...in` on Maps or Sets will not iterate through their key-value pairs.
- Using `forEach()` on a non-array-like structure will result in an error.
*/ 

