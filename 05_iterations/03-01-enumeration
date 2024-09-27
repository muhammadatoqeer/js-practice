// JavaScript Enumeration: Comprehensive Guide

/*
Enumeration in JavaScript:
--------------------------------------------------
- Enumeration refers to the process of iterating over the **enumerable properties** of an object.
- Properties in JavaScript objects have an `enumerable` attribute that controls whether they can be enumerated.
- Enumeration can be performed using `for...in`, `Object.keys()`, `Object.getOwnPropertyNames()`, and other methods.

*/

// Example Object to Demonstrate Enumeration
const person = { name: "Alice", age: 25 };
person.city = "New York";  // Add another property

// 1. `for...in` Loop
// --------------------------------------------------
// The `for...in` loop iterates over all **enumerable** properties of an object, including those inherited from its prototype chain.

console.log("Using `for...in`:");
for (const key in person) {
    console.log(key);  // Output: name, age, city
}

/*
Explanation:
- `for...in` loops over each **enumerable property** in the `person` object.
- It iterates over own properties (name, age, city) and properties inherited from the prototype, if any.
*/


// 2. `Object.keys()` Method
// --------------------------------------------------
// The `Object.keys()` method returns an array of **own enumerable properties** (keys) of an object.

console.log("\nUsing `Object.keys()`:");
const keys = Object.keys(person);
console.log(keys);  // Output: ["name", "age", "city"]

/*
Explanation:
- `Object.keys()` returns an array of keys that are **own** enumerable properties of `person`.
- It does not include properties from the prototype chain.
*/


// 3. `Object.getOwnPropertyNames()` Method
// --------------------------------------------------
// `Object.getOwnPropertyNames()` returns an array of all own properties, including **non-enumerable** ones.

const hiddenPropertyPerson = Object.create({}, {
    name: { value: "Bob", enumerable: true },
    age: { value: 30, enumerable: false }  // `age` is non-enumerable
});

console.log("\nUsing `Object.getOwnPropertyNames()`:");
console.log(Object.getOwnPropertyNames(hiddenPropertyPerson));  // Output: ["name", "age"]

/*
Explanation:
- `Object.getOwnPropertyNames()` returns both enumerable (`name`) and non-enumerable (`age`) properties.
- This method is useful when you want to include non-enumerable properties in the result.
*/


// 4. `for...of` with `Object.entries()`
// --------------------------------------------------
// The `for...of` loop can be used to iterate over key-value pairs using methods like `Object.entries()`.

console.log("\nUsing `for...of` with `Object.entries()`:");
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);  // Output: name: Alice, age: 25, city: New York
}

/*
Explanation:
- `Object.entries()` returns an array of the object's own enumerable key-value pairs.
- The `for...of` loop is then used to iterate over these pairs.
*/


// 5. Controlling Enumerability with `Object.defineProperty()`
// --------------------------------------------------
// You can set the `enumerable` attribute to `false` to exclude properties from enumeration.

const car = {};
Object.defineProperty(car, 'make', {
    value: 'Toyota',
    enumerable: false  // This property will not show up during enumeration
});

Object.defineProperty(car, 'model', {
    value: 'Corolla',
    enumerable: true  // This property will be enumerated
});

console.log("\nUsing `Object.keys()` on `car`:");
console.log(Object.keys(car));  // Output: ["model"] (only model is enumerable)

/*
Explanation:
- The `make` property is defined with `enumerable: false` and is not included in `Object.keys()` or `for...in`.
- The `model` property is enumerable and will be included.
*/


// 6. Common Issues: Using `for...in` on Arrays
// --------------------------------------------------
// `for...in` should generally not be used for arrays, as it can also enumerate non-index properties.

const array = [10, 20, 30];
array.customProp = "I am a custom property";

console.log("\nUsing `for...in` on an array:");
for (const index in array) {
    console.log(index);  // Output: 0, 1, 2, customProp (unexpected for array)
}

/*
Explanation:
- `for...in` iterates over all enumerable properties, including non-index properties like `customProp`.
- This can lead to unexpected results when used on arrays. Prefer `for...of` or standard loops for arrays.
*/


// 7. Using `hasOwnProperty()` to Filter Inherited Properties
// --------------------------------------------------
// `for...in` can enumerate inherited properties from the prototype chain, which can be filtered using `hasOwnProperty()`.

Object.prototype.inheritedProperty = "I am inherited";  // Add property to prototype

console.log("\nUsing `for...in` with `hasOwnProperty()`:");
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);  // Output: name: Alice, age: 25, city: New York
    }
}

/*
Explanation:
- The `for...in` loop includes inherited properties like `inheritedProperty`.
- `hasOwnProperty()` filters out inherited properties, leaving only `person`'s own properties.
*/


// 8. Avoiding Common Errors
// --------------------------------------------------
// Attempting to use `for...of` on a non-iterable object will throw a TypeError.

try {
    for (const key of car) {
        console.log(key);
    }
} catch (error) {
    console.log("\nError when using `for...of` on a non-iterable object:", error.message);
    // Output: Error when using `for...of` on a non-iterable object: car is not iterable
}

/*
Explanation:
- `for...of` can only be used on iterable objects like arrays, strings, Maps, or Sets.
- Using it on a plain object like `car` throws a `TypeError` because plain objects are not iterable.
*/


// Summary:
// --------------------------------------------------
// - Enumeration refers to iterating over an object's enumerable properties.
// - Use `for...in` to iterate over all enumerable properties, but be cautious with prototype chain properties.
// - Use `Object.keys()` for an array of own enumerable properties.
// - Use `Object.getOwnPropertyNames()` for all own properties (including non-enumerable).
// - Control enumerability using `Object.defineProperty()` by setting `enumerable` to true or false.
// - Prefer `for...of` with `Object.entries()` for iterating over key-value pairs in an object.
// - Be cautious w
