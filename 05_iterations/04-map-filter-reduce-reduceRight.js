// JavaScript Array Methods: `map`, `filter`, `reduce`, `reduceRight`
// ===============================================================

/*
1. The `map` Method:
--------------------------------------------------
- The `map()` method creates a **new array** by applying a given function to every element in the original array.
- It **does not modify** the original array.
- The function passed to `map()` returns the value that should be included in the new array.

Syntax:
    array.map((element, index, array) => {
        // return the modified value
    });

Return Type:
- A new array with the transformed values.

Popular Use Cases:
- Transforming data (e.g., converting an array of numbers into their squares).
- Mapping properties from objects to create a new array of specific values.

Example:
*/
const numbers = [1, 2, 3, 4, 5];

// Create a new array with each element squared
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers);  // Output: [1, 4, 9, 16, 25]

/*
Explanation:
- `map` iterates over `numbers` and applies the function `num * num` to each element.
- The original `numbers` array remains unchanged.
*/

// Difference Between `map` and `forEach`:
// --------------------------------------------------
// - `map` returns a new array with transformed elements, whereas `forEach` does not return a new array (returns `undefined`).
// - Use `map` when you need to create a new array, and `forEach` when performing side effects (e.g., logging values, updating DOM).

const doubledNumbers = numbers.map(num => num * 2); // `map` returns a new array
console.log("Doubled Numbers:", doubledNumbers);    // Output: [2, 4, 6, 8, 10]

const result = numbers.forEach(num => console.log(num));  // `forEach` returns undefined
console.log("Result of forEach:", result);                // Output: undefined


/*
2. The `filter` Method:
--------------------------------------------------
- The `filter()` method creates a **new array** with all elements that pass a test implemented by a provided function.
- It **does not modify** the original array.
- The callback function should return `true` to include an element in the new array, or `false` to exclude it.

Syntax:
    array.filter((element, index, array) => {
        // return true or false
    });

Return Type:
- A new array with elements that pass the test.

Popular Use Cases:
- Filtering elements based on a condition (e.g., removing falsy values, filtering users by age).

Example:
*/
const ages = [12, 16, 21, 30, 17, 18, 19];

// Create a new array with only ages 18 and above
const adults = ages.filter(age => age >= 18);
console.log("Adults:", adults);  // Output: [21, 30, 18, 19]

/*
Explanation:
- The `filter` method iterates over `ages` and includes only elements that satisfy the condition `age >= 18`.
- The original `ages` array remains unchanged.
*/

// Example: Filtering out falsy values from an array
const mixedArray = [0, "hello", null, 42, undefined, "", NaN];
const truthyValues = mixedArray.filter(Boolean);
console.log("Truthy Values:", truthyValues);  // Output: ["hello", 42]

/*
Explanation:
- `Boolean` is used as a callback function, which returns `true` for truthy values and `false` for falsy values.
- This filters out falsy values like `0`, `null`, `undefined`, `NaN`, and `""`.
*/


/*
3. The `reduce` Method:
--------------------------------------------------
- The `reduce()` method executes a reducer function (callback) on each element of the array, resulting in a **single output value**.
- It reduces an array to a single value by accumulating the results of the callback function.
- The reducer function takes four arguments: `accumulator`, `currentValue`, `index`, and `array`.

Syntax:
    array.reduce((accumulator, currentValue, index, array) => {
        // return the updated accumulator
    }, initialValue);

Return Type:
- A single value (number, object, string, etc.) based on the logic provided in the reducer function.

Popular Use Cases:
- Summing all elements in an array.
- Flattening an array.
- Counting occurrences of elements in an array.

Example:
*/
const prices = [29.99, 9.99, 4.99, 19.99];

// Calculate the total price of all items
const totalPrice = prices.reduce((acc, price) => acc + price, 0);
console.log("Total Price:", totalPrice);  // Output: 64.96

/*
Explanation:
- `acc` (accumulator) starts at 0.
- For each element, `price` is added to `acc`, resulting in the total price of 64.96.
*/

// Example: Counting occurrences of elements in an array
const fruits = ["apple", "banana", "orange", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;  // Increment count for each fruit
    return acc;
}, {});

console.log("Fruit Count:", fruitCount);  // Output: { apple: 3, banana: 2, orange: 2 }

/*
Explanation:
- The `reduce` function creates an object that tracks the count of each fruit.
- The accumulator `acc` is initialized as an empty object `{}`.
- For each fruit, the count is updated accordingly.
*/


/*
4. The `reduceRight` Method:
--------------------------------------------------
- The `reduceRight()` method works like `reduce()` but starts **from the last element** of the array and iterates backwards.
- Useful when order matters and you need to process elements in reverse.

Syntax:
    array.reduceRight((accumulator, currentValue, index, array) => {
        // return the updated accumulator
    }, initialValue);

Return Type:
- A single value, similar to `reduce`.

Popular Use Cases:
- Processing elements from right to left.
- Creating a nested object structure from an array.

Example:
*/
const sentence = ["Hello", "world", "this", "is", "JavaScript"];

// Create a sentence in reverse order
const reversedSentence = sentence.reduceRight((acc, word) => acc + " " + word);
console.log("Reversed Sentence:", reversedSentence);  // Output: JavaScript is this world Hello

/*
Explanation:
- `reduceRight` iterates from the last element of the array (`"JavaScript"`) to the first element (`"Hello"`).
- Each word is appended in reverse order to create the sentence.
*/

// Summary and Key Differences:
// --------------------------------------------------
// - **`map`**: Transforms each element and returns a new array. Use when you want to create a new array with modified values.
// - **`filter`**: Returns a new array with elements that pass a specified condition. Use when you want to include/exclude elements based on criteria.
// - **`reduce`**: Reduces an array to a single value (sum, object, string, etc.). Use for accumulating results or reducing data.
// - **`reduceRight`**: Similar to `reduce` but processes elements from right to left. Use when the order of operations matters.

