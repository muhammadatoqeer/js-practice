// JavaScript Iterable vs. Non-Iterable Objects

/*
What is an Iterable?
--------------------------------------------------
- An **iterable** is an object that defines its iteration behavior.
- An object is considered iterable if it implements the **`[Symbol.iterator]` method**, which returns an iterator.
- Iterables can be looped over using constructs like `for...of`, the spread operator (`...`), or `Array.from()`.

Common Examples of Iterables:
1. Arrays
2. Strings
3. Sets
4. Maps
5. Typed Arrays (e.g., Int32Array)
6. NodeLists (returned by methods like `document.querySelectorAll()`)

What is NOT Iterable?
--------------------------------------------------
- Regular objects (plain objects) are **not iterable** by default.
- This means you cannot directly use `for...of`, spread operator, or other iteration constructs on them.

Why are Some Objects Not Iterable?
--------------------------------------------------
- Iterables follow a specific iteration protocol defined by the `[Symbol.iterator]` method.
- Regular objects do not implement this method by default, making them non-iterable.
*/


// Example of an Iterable Object (Array)
const numbers = [10, 20, 30];

// Using `for...of` to iterate over an array (which is iterable)
console.log("Using `for...of` on an array:");
for (const num of numbers) {
    console.log(num);  // Output: 10, 20, 30
}

// Using the spread operator to copy an array
const numbersCopy = [...numbers];
console.log("Copy of array using spread operator:", numbersCopy);  // Output: [10, 20, 30]


// Example of a Non-Iterable Object (Plain Object)
const person = { name: "Alice", age: 25 };

// Trying to use `for...of` on a plain object will throw an error
try {
    for (const key of person) {
        console.log(key);
    }
} catch (error) {
    console.log("\nError when using `for...of` on a plain object:", error.message);
    // Output: Error when using `for...of` on a plain object: person is not iterable
}

/*
Explanation:
- `person` is a regular JavaScript object and does not have the `[Symbol.iterator]` method.
- This is why trying to use `for...of` results in a `TypeError`.
*/


// Example of Checking for Iterability
// --------------------------------------------------
// You can check if an object is iterable by verifying if it has the `[Symbol.iterator]` method.

console.log("Is `numbers` iterable?", typeof numbers[Symbol.iterator] === 'function');  // Output: true
console.log("Is `person` iterable?", typeof person[Symbol.iterator] === 'function');    // Output: false

/*
Explanation:
- `numbers` (an array) has the `[Symbol.iterator]` method, so it is iterable.
- `person` (a plain object) does not have the `[Symbol.iterator]` method, so it is not iterable.
*/


// Making a Non-Iterable Object Iterable
// --------------------------------------------------
// You can define a custom `[Symbol.iterator]` method on a plain object to make it iterable.

const iterablePerson = {
    name: "John",
    age: 30,
    city: "New York",

    // Custom iterator method
    [Symbol.iterator]: function () {
        let properties = Object.keys(this);  // Get the keys of the object
        let count = 0;
        return {
            next: () => {
                if (count < properties.length) {
                    return { value: [properties[count], this[properties[count]]], done: false };
                } else {
                    return { done: true };  // No more properties to iterate over
                }
            }
        };
    }
};

console.log("\nUsing `for...of` on custom iterable object:");
for (const [key, value] of iterablePerson) {
    console.log(`${key}: ${value}`);  // Output: name: John, age: 30, city: New York
}

/*
Explanation:
- We added a custom `[Symbol.iterator]` method to `iterablePerson`, making it iterable.
- The `next()` method inside `[Symbol.iterator]` controls how the object is iterated over.
- This way, you can use `for...of` to iterate over a regular object like an array or other iterable.
*/


// How Iterators Work
// --------------------------------------------------
// An **iterator** is an object that adheres to the following interface:
// 1. It has a `next()` method.
// 2. The `next()` method returns an object with two properties:
//    - `value`: The value of the current iteration.
//    - `done`: A boolean indicating whether the iteration is complete.

// Example: Using an iterator to manually iterate over an array
const arrayIterator = numbers[Symbol.iterator]();
console.log("\nManual iteration using an iterator:");
console.log(arrayIterator.next());  // Output: { value: 10, done: false }
console.log(arrayIterator.next());  // Output: { value: 20, done: false }
console.log(arrayIterator.next());  // Output: { value: 30, done: false }
console.log(arrayIterator.next());  // Output: { value: undefined, done: true }

/*
Explanation:
- The `arrayIterator` is an iterator object created by calling `[Symbol.iterator]()` on the array.
- Each call to `next()` returns the next value in the array along with the `done` status.
- When `done` is `true`, it indicates that the iteration is complete.
*/


// Summary:
// --------------------------------------------------
// - **Iterable Objects**: Arrays, strings, Maps, Sets, and more are iterable and have the `[Symbol.iterator]` method.
// - **Non-Iterable Objects**: Plain objects do not have the `[Symbol.iterator]` method by default.
// - Use `for...of`, spread operator, or `Array.from()` on iterable objects, but not on plain objects.
// - You can make any object iterable by defining a custom `[Symbol.iterator]` method.
// - Iterators provide a way to manually control the iteration of an iterable object.
