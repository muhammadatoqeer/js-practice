// JavaScript `while` and `do...while` Loops

/* 
1. The `while` Loop:
--------------------------------------------------
- The `while` loop repeatedly executes a block of code **as long as** a specified condition is true.
- Syntax:
    while (condition) {
        // code to execute repeatedly
    }
- The condition is checked **before** the code block is executed. If the condition is false initially, the loop body will not execute at all.
*/

let counter = 0; // Initialization

while (counter < 5) {  // Condition: Run as long as counter is less than 5
    console.log(`Counter: ${counter}`);  // Output: 0, 1, 2, 3, 4
    counter++;  // Increment the counter
}

// Explanation:
// - Initialization: `let counter = 0` sets up the starting value.
// - Condition: `counter < 5` is checked before each iteration. As long as it's true, the loop continues.
// - Increment: `counter++` increases the value of `counter` by 1 after each iteration, to avoid an infinite loop.


/* 
Important Notes on `while` Loops:
--------------------------------------------------
- If the condition is **false** initially, the `while` loop **will not execute at all**.
- It’s easy to create an **infinite loop** if the condition never becomes false. Make sure to update the condition inside the loop.

Example of an Infinite Loop (Be cautious!):
--------------------------------------------------
while (true) {
    console.log("This will run forever!"); // This line will keep printing because the condition is always true.
}
To stop the above loop, you can include a `break` statement:
*/

let i = 0;
while (true) {
    console.log(`Iteration: ${i}`);
    i++;
    if (i === 3) break; // Stops the loop after 3 iterations
}
// Output: Iteration: 0, Iteration: 1, Iteration: 2


/* 
2. The `do...while` Loop:
--------------------------------------------------
- The `do...while` loop is similar to the `while` loop, but it **guarantees that the code block runs at least once**, even if the condition is false initially.
- Syntax:
    do {
        // code to execute at least once
    } while (condition);
*/

let count = 0;

do {
    console.log(`Count: ${count}`);  // Output: 0, 1, 2, 3, 4
    count++;  // Increment count by 1
} while (count < 5);  // Condition: Continue as long as count is less than 5

// Explanation:
// - The code inside the `do` block is executed once before the condition `count < 5` is checked.
// - The condition is checked **after** the first execution, making sure the code inside the `do` block runs at least once.

// Example with an initially false condition:
let number = 10;

do {
    console.log(`Number: ${number}`); // Output: 10
} while (number < 5); // Condition is false initially, but code still executes once

// This is different from a regular `while` loop:
while (number < 5) {
    console.log(`This will not be printed because the condition is false initially`);
}
// Output: (Nothing will be printed)

// Key Differences Between `while` and `do...while` Loops:
// --------------------------------------------------
// - `while` Loop: The condition is checked before executing the loop body. If the condition is false initially, the loop body is not executed.
// - `do...while` Loop: The code block runs **at least once** before the condition is checked, making it useful when you need to ensure that code runs at least once.

// Example of using `break` and `continue` in `while` and `do...while` loops
// --------------------------------------------------

// Using `break` in a `while` loop
let value = 0;
while (value < 10) {
    if (value === 5) {
        break;  // Exit the loop when value is 5
    }
    console.log(`Value is ${value}`);
    value++;
}
// Output: Value is 0, Value is 1, Value is 2, Value is 3, Value is 4 (loop stops at 5)

// Using `continue` in a `while` loop
let num = 0;
while (num < 5) {
    num++;
    if (num === 3) {
        continue;  // Skip the rest of the code when num is 3
    }
    console.log(`Number is ${num}`);
}
// Output: Number is 1, Number is 2, Number is 4, Number is 5 (skips 3)

// Using `break` in a `do...while` loop
let x = 0;
do {
    if (x === 2) {
        break;  // Exit the loop when x is 2
    }
    console.log(`x is ${x}`);
    x++;
} while (x < 5);
// Output: x is 0, x is 1 (loop stops at 2)

// Using `continue` in a `do...while` loop
let y = 0;
do {
    y++;
    if (y === 3) {
        continue;  // Skip the rest of the code when y is 3
    }
    console.log(`y is ${y}`);
} while (y < 5);
// Output: y is 1, y is 2, y is 4, y is 5 (skips 3)

// Nested `while` and `do...while` Loops
// --------------------------------------------------
// You can nest `while` and `do...while` loops inside each other just like `for` loops.

let outer = 0;

while (outer < 2) {
    let inner = 0;
    console.log(`Outer loop: ${outer}`);

    while (inner < 3) {
        console.log(`   Inner loop: ${inner}`);
        inner++;
    }
    outer++;
}
// Output:
// Outer loop: 0
//    Inner loop: 0
//    Inner loop: 1
//    Inner loop: 2
// Outer loop: 1
//    Inner loop: 0
//    Inner loop: 1
//    Inner loop: 2

// Summary:
// --------------------------------------------------
// - The `while` loop checks the condition before executing the code block, making it possible that the loop body might not run at all.
// - The `do...while` loop executes the code block at least once before checking the condition, ensuring the loop body is run at least once.
// - `break` can be used to exit the loop early, and `continue` can be used to skip the rest of the current iteration.
// - Be cautious with infinite loops (make sure the condition eventually becomes false).
// - Nesting `while` and `do...while` loops is possible and works similarly to nested `for` loops.
