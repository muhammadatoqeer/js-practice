//Immediately Invoked Function Expression (lecture notes)

function xyz() {
    console.log('Hello');
} //This is a normal function declaration

xyz(); //This is a normal function call 

//Immediately invoked means calling the function right after it's declaration

//Step 1: Wrap the function into parentheses
(function xyz() {
    console.log('Hello');
})() //Step 2: Add () at the end of declaration to let it know that this function needs to be executed immediately

    //Step 3: Add a semi-colon ; at the of teh () call to add a stop to execution otherwise two back to back added IIFEs will cause problems.

    //Same for Arrow functions as well



    // ++++++++++++++++++++ Full Notes +++++++++++++++++++

    // Immediately Invoked Function Expressions (IIFE)

    // What is an IIFE?
    // --------------------------------------------------
    // An IIFE is a function that is defined and executed immediately after it is created.
    // It runs as soon as the browser or JavaScript engine encounters it.

    (function () {
        console.log("This function is executed immediately!");
    })();
// Output: This function is executed immediately!

// The function is defined and then immediately invoked with the `()` syntax after the function declaration.

// Why do we need IIFEs?
// --------------------------------------------------
// 1. **Avoid polluting the global scope**: IIFEs create a private scope, so variables defined inside the IIFE won't interfere with other code in the global scope.
// 2. **Data privacy**: Variables and functions inside the IIFE can't be accessed from outside, providing a simple way to protect variables from being altered.
// 3. **Encapsulate code**: IIFEs are often used to organize code, especially in situations where you need to run some initialization logic.


// Example 1: Preventing Global Variable Pollution
//-------------------------------------------------
let globalVar = "I'm global";

(function () {
    let localVar = "I'm local to the IIFE";
    console.log(localVar); // Output: I'm local to the IIFE
})();

// console.log(localVar); // Error: localVar is not defined
// `localVar` is only accessible within the IIFE, and does not pollute the global namespace.


// Example 2: Creating a Private Scope
// --------------------------------------------------
// IIFEs are great for encapsulating code and preventing accidental modifications to variables.

const counter = (function () {
    let count = 0; // This variable is private to the IIFE and can't be accessed from outside

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        }
    };
})();

counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1
// The `count` variable is protected and cannot be accessed directly from outside the IIFE. This creates a simple form of data privacy.


// Example 3: Self-contained logic
// --------------------------------------------------
// IIFEs are also commonly used to run some initialization logic or code that should execute immediately.

(function () {
    console.log("Initializing the app...");
    // Some initialization logic here...
})();
// Output: Initializing the app...


// Why use parentheses around the function?
// --------------------------------------------------
// The parentheses `()` are used to ensure that the JavaScript engine treats the function as an expression rather than a declaration.
// A function declaration by itself needs a name, but an IIFE doesn't need a name because it is invoked immediately.

(function () {
    console.log("This is an IIFE with parentheses");
})();
// Output: This is an IIFE with parentheses

// Alternative syntax: You can also use the second set of parentheses inside the outer parentheses.
(function () {
    console.log("Alternative IIFE syntax");
}());
// Output: Alternative IIFE syntax


// Modern Use of IIFEs
// --------------------------------------------------
// With modern JavaScript (ES6+), modules and block-scoped variables (`let`, `const`) have reduced the need for IIFEs.
// However, they are still useful in certain situations where you want to create an isolated scope, or for quick initialization code.


// Summary:
// --------------------------------------------------
// - An IIFE is a function that is defined and executed immediately after creation.
// - It helps avoid polluting the global scope, creates private variables, and encapsulates logic.
// - IIFEs are useful for data privacy, initializing logic, and organizing code.
