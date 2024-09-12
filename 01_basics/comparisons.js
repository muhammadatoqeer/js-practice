// Comparison Operators in JavaScript
// These operators compare two values and return a Boolean (true or false).

// 1. Comparing Numbers
let num1 = 10;
let num2 = 20;

console.log(num1 == num2); // Output: false (10 is not equal to 20)
console.log(num1 != num2); // Output: true (10 is not equal to 20)
console.log(num1 < num2);  // Output: true (10 is less than 20)
console.log(num1 > num2);  // Output: false (10 is not greater than 20)

// 2. Comparing Strings
let str1 = "hello";
let str2 = "world";

console.log(str1 == str2); // Output: false ("hello" is not equal to "world")
console.log(str1 < str2);  // Output: true (lexical comparison: "hello" comes before "world")

// 3. Comparing Booleans
let bool1 = true;
let bool2 = false;

console.log(bool1 == bool2); // Output: false (true is not equal to false)
console.log(bool1 > bool2);  // Output: true (true is considered greater than false)

// 4. Comparing Different Data Types (Type Coercion)
console.log("10" == 10);   // Output: true (loose equality with type coercion, "10" becomes 10)
console.log("10" === 10);  // Output: false (strict equality without type coercion, different types)

// 5. Comparing Null and Undefined
console.log(null == undefined);  // Output: true (both represent 'no value' loosely)
console.log(null === undefined); // Output: false (strict comparison, different types)

// 6. Comparing Null and Zero
console.log(null == 0);  // Output: false (null is not coerced to 0 in loose equality)
console.log(null === 0); // Output: false (strict comparison, different types)

// 7. Comparing Undefined and Zero
console.log(undefined == 0);  // Output: false (undefined is not coerced to 0)
console.log(undefined === 0); // Output: false (strict comparison, different types)

// 8. Comparing NaN (Not a Number)
let value = NaN;

console.log(value == NaN);  // Output: false (NaN is not equal to anything, including itself)
console.log(value === NaN); // Output: false (strict equality also fails with NaN)
console.log(isNaN(value));  // Output: true (use isNaN function to check if a value is NaN)

// Special Note: NaN is the only value in JavaScript that is not equal to itself.

// 9. Comparing Objects (Reference Types)
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };

console.log(obj1 == obj2);  // Output: false (different references in memory)
console.log(obj1 === obj2); // Output: false (strict comparison, different references)

let obj3 = obj1; // obj3 points to the same reference as obj1
console.log(obj1 == obj3);  // Output: true (same reference in memory)
console.log(obj1 === obj3); // Output: true (strict comparison, same reference)

// 10. Special Comparisons with True and False
console.log(true == 1);  // Output: true (true is loosely equal to 1)
console.log(false == 0); // Output: true (false is loosely equal to 0)
console.log(true === 1); // Output: false (strict comparison, different types)
console.log(false === 0);// Output: false (strict comparison, different types)

// Summary of Key Points:
// - == (loose equality) checks for equality with type coercion.
// - === (strict equality) checks for equality without type coercion.
// - null and undefined are loosely equal but not strictly equal.
// - NaN is never equal to anything, not even itself.
// - Objects are compared by reference, not by value.
// - Type coercion can lead to unexpected results in loose comparisons.
