
for (let index = 0; index < array.length; index++) { //Block scope introduced
    const element = array[index];

}


/*

for (indexInitialized; condition; incrementIndex to move forward){
    //Block level scope;

}

*/

// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);

}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + ' = ' + i*j );
    }

}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);

}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);

// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`)
}


//+++++++++++++++++++++++ NOTES +++++++++++++++++++++++++++

// JavaScript `for` Loop - Comprehensive Guide

/* 
The `for` loop is a control flow statement that allows you to repeat a block of code a specific number of times. 
It consists of three parts: initialization, condition, and increment/decrement.
Syntax:
    for (initialization; condition; increment/decrement) {
        // code to be executed
    }
*/

// Example of a simple `for` loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // Output: 0, 1, 2, 3, 4
}
// Explanation:
// - Initialization (`let i = 0`): This is executed once at the beginning of the loop.
// - Condition (`i < 5`): The loop runs as long as this condition is true.
// - Increment (`i++`): After each iteration, `i` is incremented by 1.

// Notes on Scope:
// --------------------------------------------------
// Variables declared with `let` or `const` inside the loop are block-scoped, meaning they exist only within the loop block.
// Variables declared with `var` are function-scoped or globally-scoped, so they can persist outside the loop.

for (let i = 0; i < 3; i++) {
    let loopScoped = "I exist only inside the loop";
    console.log(loopScoped); // Output: I exist only inside the loop
}
// console.log(loopScoped); // Error: loopScoped is not defined (it only exists inside the loop)

// Example with `var` (function-scoped):
for (var j = 0; j < 3; j++) {
    var functionScoped = "I am available outside the loop too";
}
console.log(functionScoped); // Output: I am available outside the loop too


// Increment and Decrement:
// --------------------------------------------------
// The third part of the `for` loop controls how the loop counter changes. 
// You can increment or decrement the counter based on the loop's needs.

for (let i = 10; i > 5; i--) { // Decrementing the counter
    console.log(i);  // Output: 10, 9, 8, 7, 6
}

// You can use custom increments as well.
for (let i = 0; i <= 10; i += 2) {  // Increment by 2
    console.log(i);  // Output: 0, 2, 4, 6, 8, 10
}


// The `break` Statement:
// --------------------------------------------------
// The `break` statement is used to exit the loop prematurely when a certain condition is met.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i); // Output: 0, 1, 2, 3, 4 (loop stops when i is 5)
}


// The `continue` Statement:
// --------------------------------------------------
// The `continue` statement skips the current iteration and moves to the next one without breaking the loop.

for (let i = 0; i < 7; i++) {
    if (i === 4) {
        continue; // Skip the iteration when i is 4
    }
    console.log(i);  // Output: 0, 1, 2, 3, 5, 6 (4 is skipped)
}


// Nested `for` Loops:
// --------------------------------------------------
// You can nest `for` loops inside each other to perform more complex iterations, such as when working with multi-dimensional arrays.

for (let i = 0; i < 3; i++) {
    console.log(`Outer loop iteration ${i}`);

    for (let j = 0; j < 2; j++) {
        console.log(`   Inner loop iteration ${j}`);
    }
}
// Output:
// Outer loop iteration 0
//    Inner loop iteration 0
//    Inner loop iteration 1
// Outer loop iteration 1
//    Inner loop iteration 0
//    Inner loop iteration 1
// Outer loop iteration 2
//    Inner loop iteration 0
//    Inner loop iteration 1

// Explanation:
// - The outer loop controls the overall number of iterations.
// - For each iteration of the outer loop, the inner loop runs completely.


/*
Important Things to Know about `for` Loops:
--------------------------------------------------

// 1. Loop Condition:
- The condition is checked before each iteration. If the condition is false, the loop ends.
- Be careful with infinite loops where the condition never becomes false, such as:
    for (let i = 0; i >= 0; i++) {
        // This loop will run forever because i will always be >= 0
    }

// 2. Off-by-One Errors:
- Off-by-one errors occur when the loop runs one too many or one too few times, typically caused by incorrect condition or increment.
- Example:
    for (let i = 0; i <= 5; i++) {  // This loop runs 6 times (i = 0, 1, 2, 3, 4, 5)
    }
    for (let i = 0; i < 5; i++) {  // This loop runs 5 times (i = 0, 1, 2, 3, 4)
    }

// 3. Infinite Loops:
- Infinite loops happen when the condition never becomes false.
- Always ensure your loop has a condition that will eventually stop it.
    for (let i = 0; ; i++) { // This loop will run forever because there is no condition
        console.log(i);
    }

// 4. `for...of` and `for...in` Loops:
- Modern JavaScript offers `for...of` and `for...in` loops, which are useful for iterating over objects and arrays.
- Example of `for...of` to loop through arrays:
    const array = [1, 2, 3];
    for (let value of array) {
        console.log(value); // Output: 1, 2, 3
    }

- Example of `for...in` to loop through object properties:
    const obj = { name: "John", age: 30 };
    for (let key in obj) {
        console.log(key + ": " + obj[key]); // Output: name: John, age: 30
    }

*/

// Summary:
// --------------------------------------------------
// - The `for` loop has three parts: initialization, condition, and increment/decrement.
// - Variables declared with `let` inside a `for` loop are block-scoped, whereas `var` variables are function-scoped or globally scoped.
// - Use `break` to exit a loop prematurely and `continue` to skip to the next iteration.
// - Nested `for` loops can be used to iterate through multi-dimensional data like arrays within arrays.

