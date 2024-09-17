//shallow copies (referece point same in memory) 

const array = [1, 2, 3, 4, 5, 6] //basic declaration
const newArray = new Array(1, 2, 3, 4, 5) //constructor declaration. if you only add 1 number in the constructor then that defines the length of the array 

console.log(array.isArray());




// JavaScript Array Methods - Comprehensive Guide

let arr = [1, 2, 3, 4]; // Sample array for demonstration

// 1. at() - Returns the element at the specified index (supports negative indexing).
console.log(arr.at(2)); // Output: 3 (element at index 2)
console.log(arr.at(-1)); // Output: 4 (last element, negative indexing)

// 2. concat() - Merges two or more arrays; returns a new array without altering the originals.
let newArr = arr.concat([5, 6]);
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]
console.log(arr); // Output: [1, 2, 3, 4] (original array unchanged)
//NOTE: Another way to concat the two array is using a spread operator. (...arr)
// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]

// const arr3 = arr1.concat(arr2); 
// const arr4 = [...arr1,...arr2]


// console.log(arr3); //[1,2,3,4,5,6,7,8,9,10]
// console.log(arr4); //[1,2,3,4,5,6,7,8,9,10]

//Difference between concat and spread operator is that we can concatenate more than 2 array in a single statement in spread operator.


// 3. copyWithin() - Copies part of an array to another location within the same array; modifies the original array.
arr.copyWithin(1, 2); // Copy elements starting at index 2 to index 1
console.log(arr); // Output: [1, 3, 4, 4] (original array altered)

// 4. entries() - Returns a new Array Iterator object containing key/value pairs for each index in the array.
let entries = arr.entries();
for (let entry of entries) {
    console.log(entry); // Output: [0, 1], [1, 3], [2, 4], [3, 4]
}

// 5. every() - Checks if all elements pass the test implemented by the provided function; returns a Boolean.
console.log(arr.every(x => x > 0)); // Output: true (all elements are greater than 0)

// 6. fill() - Changes all elements in an array to a static value; modifies the original array.
arr.fill(0, 1, 3); // Fills with 0 from index 1 to index 3
console.log(arr); // Output: [1, 0, 0, 4] (original array altered)

// 7. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
let filteredArr = arr.filter(x => x > 1);
console.log(filteredArr); // Output: [4] (new array, original is unchanged)

// 8. find() - Returns the first element that satisfies the provided testing function; otherwise, undefined.
console.log(arr.find(x => x > 1)); // Output: 4 (first element greater than 1)

// 9. findIndex() - Returns the index of the first element that satisfies the testing function; otherwise, -1.
console.log(arr.findIndex(x => x > 1)); // Output: 3 (index of first element greater than 1)

// 10. findLast() - Returns the last element that satisfies the provided testing function.
console.log(arr.findLast(x => x > 0)); // Output: 4 (last element greater than 0)

// 11. findLastIndex() - Returns the index of the last element that satisfies the testing function; otherwise, -1.
console.log(arr.findLastIndex(x => x > 0)); // Output: 3 (index of the last element greater than 0)

// 12. flat() - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedArr = [1, [2, [3, [4]]]];
console.log(nestedArr.flat(2)); // Output: [1, 2, 3, [4]] (flattens array up to 2 levels)

// 13. flatMap() - Maps each element using a mapping function, then flattens the result into a new array.
console.log([1, 2, 3].flatMap(x => [x, x * 2])); // Output: [1, 2, 2, 4, 3, 6]

// 14. forEach() - Executes a provided function once for each array element; does not return a new array.
arr.forEach(x => console.log(x * 2)); // Output: 2, 0, 0, 8 (logs each element doubled)

// 15. includes() - Determines whether the array includes a certain value; returns a Boolean.
console.log(arr.includes(4)); // Output: true (4 is in the array)

// 16. indexOf() - Returns the first index at which a given element can be found; otherwise, -1.
console.log(arr.indexOf(0)); // Output: 1 (first occurrence of 0)

// 17. join() - Joins all elements into a string, separated by a specified separator.
console.log(arr.join('-')); // Output: "1-0-0-4" (joins with '-')

// 18. keys() - Returns a new Array Iterator object containing the keys (indexes) for each index in the array.
let keys = arr.keys();
for (let key of keys) {
    console.log(key); // Output: 0, 1, 2, 3
}

// 19. lastIndexOf() - Returns the last index at which a given element can be found; otherwise, -1.
console.log(arr.lastIndexOf(0)); // Output: 2 (last occurrence of 0)

// 20. map() - Creates a new array with the results of calling a provided function on every element.
let mappedArr = arr.map(x => x * 3);
console.log(mappedArr); // Output: [3, 0, 0, 12] (new array, original is unchanged)

// 21. pop() - Removes the last element from an array and returns that element; modifies the original array.
console.log(arr.pop()); // Output: 4 (removes last element)
console.log(arr); // Output: [1, 0, 0] (original array altered)

// 22. push() - Adds one or more elements to the end of an array; returns the new length of the array; modifies the original array.
arr.push(5);
console.log(arr); // Output: [1, 0, 0, 5] (original array altered)

// 23. reduce() - Applies a function against an accumulator and each element; reduces it to a single value.
let sum = arr.reduce((acc, x) => acc + x, 0);
console.log(sum); // Output: 6 (sum of all elements)

// 24. reduceRight() - Applies a function against an accumulator and each element from right to left; reduces it to a single value.
let reversedSum = arr.reduceRight((acc, x) => acc + x, 0);
console.log(reversedSum); // Output: 6 (sum of all elements from right)

// 25. reverse() - Reverses the order of the elements in the array; modifies the original array.
arr.reverse();
console.log(arr); // Output: [5, 0, 0, 1] (original array altered)

// 26. shift() - Removes the first element from an array and returns that element; modifies the original array.
console.log(arr.shift()); // Output: 5 (removes first element)
console.log(arr); // Output: [0, 0, 1] (original array altered)

// 27. slice() - Returns a shallow copy of a portion of the array into a new array object; does not modify the original.
let slicedArr = arr.slice(1, 3);
console.log(slicedArr); // Output: [0, 1] (new array from indices 1 to 3)
console.log(arr); // Output: [0, 0, 1] (original array unchanged)

// 28. some() - Checks if at least one element passes the test implemented by the provided function; returns a Boolean.
console.log(arr.some(x => x > 0)); // Output: true (at least one element is greater than 0)

// 29. sort() - Sorts the elements of an array in place and returns the sorted array; modifies the original array.
arr.sort((a, b) => a - b);
console.log(arr); // Output: [0, 0, 1] (sorted array)

// 30. splice() - Adds or removes elements from an array; modifies the original array and returns the removed elements.
let splicedArr = arr.splice(1, 1, 9, 8); // Removes 1 element at index 1, adds 9, 8
console.log(splicedArr); // Output: [0] (removed elements)
console.log(arr); // Output: [0, 9, 8, 1] (original array altered)

// 31. toLocaleString() - Returns a string representing the elements, formatted according to the locale.
console.log(arr.toLocaleString()); // Output: "0,9,8,1" (locale-specific format)

// 32. toReversed() - Returns a new array with the elements in reverse order (new method).
console.log(arr.toReversed()); // Output: [1, 8, 9, 0] (returns a new reversed array)

// 33. toSorted() - Returns a new array with the elements sorted (new method).
console.log(arr.toSorted()); // Output: [0, 1, 8, 9] (returns a new sorted array)

// 34. toSpliced() - Returns a new array with elements added or removed (new method).
console.log(arr.toSpliced(1, 1, 5)); // Output: [0, 5, 8, 1] (new array with modified elements)

// 35. toString() - Returns a string representing the elements of the array.
console.log(arr.toString()); // Output: "0,9,8,1" (converts array to string)

// 36. unshift() - Adds one or more elements to the beginning of the array; returns the new length; modifies the original array.
arr.unshift(7);
console.log(arr); // Output: [7, 0, 9, 8, 1] (original array altered)

// 37. values() - Returns a new Array Iterator object containing the values for each index in the array.
let values = arr.values();
for (let value of values) {
    console.log(value); // Output: 7, 0, 9, 8, 1 (each value of the array)
}

// 38. with() - Returns a new array with the element at the specified index replaced (new method).
console.log(arr.with(1, 6)); // Output: [7, 6, 9, 8, 1] (new array with element replaced at index 1)

// 39. Symbol.iterator - Allows the array to be iterable using a for-of loop.
for (let value of arr) {
    console.log(value); // Output: 7, 0, 9, 8, 1 (iterates over each value)
}

// JavaScript Array Object Methods - Comprehensive Guide

// 1. Array.isArray() - Checks if the given value is an array; returns true or false.
console.log(Array.isArray([1, 2, 3])); // Output: true (it's an array)
console.log(Array.isArray('Hello'));   // Output: false (not an array)
console.log(Array.isArray({}));        // Output: false (not an array)

// 2. Array.from() - Creates a new array from an array-like or iterable object.
console.log(Array.from('Hello')); // Output: ['H', 'e', 'l', 'l', 'o'] (creates an array from a string)
console.log(Array.from(new Set([1, 2, 3]))); // Output: [1, 2, 3] (creates an array from a Set)

// Using Array.from() with a mapping function
console.log(Array.from([1, 2, 3], x => x * 2)); // Output: [2, 4, 6] (creates a new array with elements doubled)

// 3. Array.of() - Creates a new array with the given arguments as elements.
console.log(Array.of(1, 2, 3));   // Output: [1, 2, 3] (creates an array from arguments)
console.log(Array.of('a', 'b'));  // Output: ['a', 'b'] (creates an array with strings)

// 4. Array.prototype.fill() - Fills all elements of an array from a start index to an end index with a static value.
// Example already covered in the previous section, showing fill modifies the original array.
let arrFill = [1, 2, 3, 4];
arrFill.fill(0, 1, 3);
console.log(arrFill); // Output: [1, 0, 0, 4] (fills from index 1 to 3 with 0)

// 5. Array.prototype.copyWithin() - Copies part of an array to another location in the same array, modifying it.
// Example already covered: copies part of the array and alters the original.
let arrCopy = [1, 2, 3, 4, 5];
arrCopy.copyWithin(0, 3, 5);
console.log(arrCopy); // Output: [4, 5, 3, 4, 5] (copies elements within array)

// 6. Array.prototype.includes() - Determines whether an array includes a certain value, returning true or false.
// Example already covered: checks if an element exists in the array.
console.log(arrCopy.includes(3)); // Output: true (3 is in the array)
console.log(arrCopy.includes(6)); // Output: false (6 is not in the array)

// 7. Array.prototype.keys() - Returns a new Array Iterator object that contains the keys (indexes) for each index in the array.
let keys1 = Array.from(arrCopy.keys());
console.log(keys1); // Output: [0, 1, 2, 3, 4] (array of indexes)

// 8. Array.prototype.values() - Returns a new Array Iterator object that contains the values for each index in the array.
let values1 = Array.from(arrCopy.values());
console.log(values1); // Output: [4, 5, 3, 4, 5] (array of values)

// 9. Array.prototype.entries() - Returns a new Array Iterator object that contains key/value pairs for each index in the array.
// Example already covered: iterates over key/value pairs.
let entries1 = Array.from(arrCopy.entries());
console.log(entries1); // Output: [[0, 4], [1, 5], [2, 3], [3, 4], [4, 5]]
