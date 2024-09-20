//Console Scope is different than the Node Scope (Interview Question);

let a = 10;
const b = 20;
var c = 30;

console.log(a); //Output: 10 
console.log(b); // Output:20
console.log(c); //Output: 30

//These should execute flawlessly. 

//However the trouble starts when you dive into the block level scope which is the list of statements contained between the two curly braces {} (Local/Block Scope). Any variable outside the local scope are intitated with the global scope


//Global Scope

let d = 10;
const e = 20;
var f = 30;

if (true) {             //If statement defines a block here
    let d = 100;        //These 3 variables x,y and z are defined in this local/block scope
    const e = 200;
    var f = 300;
}

console.log(d); //Output: 10 (Global variable declared at the top in line 3)
console.log(e); // Output:20 (Global variable declared at the top in line 4)
console.log(f); //Output:300 (Since var does not respect the scope level, it just re-assigns the 300 to the decalaration in line 5)

//These should execute flawlessly. However the trouble starts when you dive into the block level scope which is the list of statements contained between the two curly braces {} (Local/Block Scope). Any variable outside the local scope are intitated with the global scope

//Local Scope Example

if (true) { //If statement defines a scope here
    let x = 10;     //These 3 variables x,y and z are defined in this scope
    const y = 20;
    var z = 30;
}

console.log(x); //Output: Error since x is printed outside the scope it is declared in. "ReferenceError: x is not defined"
console.log(y); //Output: Error since x is printed outside the scope it is declared in "ReferenceError: y is not defined"
console.log(z); //Output: 30;

// The output of z is the problem with var, it does not respect the limitation by scope concept which can cause lots of errors in the code.


// JavaScript Scope and Lexical Scope

/* 
Scope refers to the current context of execution in which values and expressions are visible or can be referenced. 
In JavaScript, we have three types of scope:
1. Global Scope
2. Function (Local) Scope
3. Block Scope (ES6 and later)
*/

// 1. Global Scope
// Variables declared outside any function or block are in the global scope.
// They can be accessed from anywhere in the code.

let globalVar = "I am global"; // Global scope

function globalScopeExample() {
    console.log(globalVar); // Can access globalVar here
}
globalScopeExample(); // Output: I am global

// Global variables can be accessed inside functions, but modifying them inside functions will affect them globally.
function modifyGlobal() {
    globalVar = "I am modified globally";
}
modifyGlobal();
console.log(globalVar); // Output: I am modified globally


// 2. Function (Local) Scope
// Variables declared inside a function are local to that function and cannot be accessed from outside.

function localScopeExample() {
    let localVar = "I am local";
    console.log(localVar); // Output: I am local
}

localScopeExample();
// console.log(localVar); // Error: localVar is not defined (it is scoped to the function)


// 3. Block Scope (let and const, ES6)
// Block scope applies to variables declared with `let` and `const` inside a block, such as loops or conditionals.

if (true) {
    let blockScopedVar = "I am block scoped";
    console.log(blockScopedVar); // Output: I am block scoped
}
// console.log(blockScopedVar); // Error: blockScopedVar is not defined (outside the block)

// Variables declared with `var` do not have block scope. They are hoisted to the function or global scope.
if (true) {
    var notBlockScopedVar = "I am NOT block scoped";
}
console.log(notBlockScopedVar); // Output: I am NOT block scoped


// 4. Lexical Scope
// Lexical scope means that the scope of a variable is determined by its location within the source code.
// Inner functions can access variables declared in outer functions (closures), but not the other way around.

function outerFunction() {
    let outerVar = "I am outer";

    function innerFunction() {
        console.log(outerVar); // Inner function can access variables from the outer function (lexical scope)
    }

    innerFunction();
}

outerFunction(); // Output: I am outer
// console.log(outerVar); // Error: outerVar is not defined (outside outerFunction)

// Lexical scope is important for closures in JavaScript.


// 5. Closures
// A closure is created when an inner function has access to the outer function's variables, even after the outer function has returned.

function closureExample() {
    let outerVar = "I am still accessible";

    return function inner() {
        console.log(outerVar); // This variable is remembered even after outer function is done
    };
}

const innerFunc = closureExample();
innerFunc(); // Output: I am still accessible

// Closures are commonly used in JavaScript for data privacy and creating factory functions.


// 6. Scope Chain
// When trying to access a variable, JavaScript looks at the innermost scope first and works its way outwards (scope chain).
// If the variable is not found in the current scope, it moves up to the parent scope, and so on, until it reaches the global scope.

function scopeChainExample() {
    let outerVar = "I am from outer scope";

    function inner() {
        let innerVar = "I am from inner scope";
        console.log(outerVar); // Looks for outerVar in the inner scope, doesn't find it, goes to outer scope
        console.log(innerVar); // Found in inner scope
    }

    inner();
}

scopeChainExample();
// Output:
// I am from outer scope
// I am from inner scope


// 7. Hoisting
// Variable declarations (using `var`) are hoisted to the top of their scope, but initialization happens where they are declared.

console.log(hoistedVar); // Output: undefined (hoisted, but not initialized)
var hoistedVar = "I am hoisted";

// With `let` and `const`, variables are not hoisted in the same way. They are in a "temporal dead zone" until declared.
// console.log(notHoisted); // Error: Cannot access 'notHoisted' before initialization
let notHoisted = "I am not hoisted";

/* Summary of Scope and Lexical Scope:
1. **Global Scope:** Variables accessible throughout the entire script.
2. **Local (Function) Scope:** Variables declared within a function are accessible only within that function.
3. **Block Scope:** Variables declared with `let` and `const` are limited to the block (e.g., within `{}`).
4. **Lexical Scope:** The scope is determined by where variables and functions are written in the source code. Inner functions can access outer scope variables.
5. **Closures:** When a function remembers and can access variables from its outer scope, even after the outer function has returned.
6. **Scope Chain:** When looking up a variable, JavaScript searches from the innermost scope to the outermost scope.
7. **Hoisting:** `var` variables are hoisted to the top of their scope, but `let` and `const` have temporal dead zones.
*/

