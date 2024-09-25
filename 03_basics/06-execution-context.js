/*

++++++++++++++++ JavaScript Execution Context +++++++++++++++++++++

An execution context is the environment in which JavaScript code is evaluated and executed. It's like the stage on which JavaScript code runs, and it governs how variables, functions, and objects are managed during execution.

JavaScript executes code in two primary phases:

1. Memory Creation Phase (Creation Phase)
2. Execution Phase (Code Execution)

Types of Execution Contexts:

1. Global Execution Context (GEC):
    - Created when the JavaScript file starts running.
    - It's the default context in which all code is executed if it’s not inside a function.
    - Associated with the global object, and in browsers, the global object is window. In Node.js, it’s global.
    - The this keyword in the global execution context refers to the global object (i.e., window in browsers).

2. Function Execution Context (FEC):
    - Created every time a function is called.
    - Each function invocation gets its own execution context, which  has its own memory and execution phases.
    - Functions can have multiple calls, and each call creates a new function execution context.

3.Eval Execution Context:
    - Created when the eval() function is executed (not commonly used). This is part of the global execution context but usually avoided in modern JavaScript.


Phases of Execution Context

1. Memory Creation Phase (Creation Phase):
    - JavaScript allocates memory for variables and functions in this phase.
    - Variables are initialized with undefined at this stage.
    - Functions are hoisted, meaning their definitions (not just their declarations) are stored in memory, making them available even before they are encountered in the code.

*/


//EXAMPLE
// let val1 = 10; Memory is allocated for val1 and initialized with undefined
//let val2 = 20; Memory is allocated for val2 and initialized with undefined

function addNum(num1, num2) {  // Function is hoisted
    return num1 + num2;
}

//let result1 = addNum(val1, val2); // Memory is allocated for result1, initialized as undefined
/* 

1. Creation phase:
    - val1, val2, result1, and result2 are stored in memory but initialized with undefined.
    - The function addNum is fully stored in memory and can be invoked before it's encountered in code.

    2. Execution Phase:
    - JavaScript starts executing code line by line.
    - Variables are assigned their actual values (e.g., val1 becomes 10, val2 becomes 20).
    - Function calls are made, and the execution moves into the Function Execution Context for each function call.
*/

let val1 = 10; // val1 gets the value 10
let val2 = 20; // val2 gets the value 20

let result1 = addNum(val1, val2); // Execution enters the function addNum and gets its result
let result2 = addNum(10, 25);     // Another function call with new arguments, another execution context

/* When addNum is called, a new execution context is created for that function. It has its own memory and execution phases, just like the global context.

let val1 = 10;
let val2 = 20;

function addNum(num1, num2) {
    return num1 + num2;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 25);

Step 1: Memory Creation Phase (Global Execution Context)

val1 is initialized as undefined.
val2 is initialized as undefined.
addNum function is hoisted, and the entire function definition is stored.
result1 and result2 are initialized as undefined.
Step 2: Execution Phase (Global Execution Context)

val1 is assigned 10.
val2 is assigned 20.
addNum(val1, val2) is executed:
A new Function Execution Context is created.
Inside this function context:
num1 is assigned val1 (10).
num2 is assigned val2 (20).
The function returns num1 + num2 = 30.
result1 is assigned 30.
addNum(10, 25) is executed similarly, creating a new function execution context, and result2 is assigned 35.

Call Stack
The Call Stack is the mechanism that keeps track of the execution contexts in JavaScript. Every time a function is called, a new execution context is created and pushed onto the call stack. Once the function completes, its execution context is popped off the call stack.

Call Stack Flow:

Global Execution Context (GEC) is pushed onto the call stack.
When addNum is called, its Function Execution Context (FEC) is pushed onto the call stack.
Once the function finishes, its execution context is removed from the stack, and the control returns to the global context.
This process repeats for every function call.




The topic you're referring to is JavaScript Execution Context and Call Stack, which explains how JavaScript executes code in a structured way. Let me provide a simplified explanation and notes to help you understand this important concept better.

JavaScript Execution Context
An execution context is the environment in which JavaScript code is evaluated and executed. It's like the stage on which JavaScript code runs, and it governs how variables, functions, and objects are managed during execution.

JavaScript executes code in two primary phases:

Memory Creation Phase (Creation Phase)
Execution Phase (Code Execution)
Types of Execution Contexts:
Global Execution Context (GEC):

Created when the JavaScript file starts running.
It's the default context in which all code is executed if it’s not inside a function.
Associated with the global object, and in browsers, the global object is window. In Node.js, it’s global.
The this keyword in the global execution context refers to the global object (i.e., window in browsers).
Function Execution Context (FEC):

Created every time a function is called.
Each function invocation gets its own execution context, which has its own memory and execution phases.
Functions can have multiple calls, and each call creates a new function execution context.
Eval Execution Context:

Created when the eval() function is executed (not commonly used). This is part of the global execution context but usually avoided in modern JavaScript.
Phases of Execution Context
1. Memory Creation Phase (Creation Phase):
JavaScript allocates memory for variables and functions in this phase.
Variables are initialized with undefined at this stage.
Functions are hoisted, meaning their definitions (not just their declarations) are stored in memory, making them available even before they are encountered in the code.
Example:

javascript
Copy code
let val1 = 10; // Memory is allocated for val1 and initialized with undefined
let val2 = 20; // Memory is allocated for val2 and initialized with undefined

function addNum(num1, num2) {  // Function is hoisted
    return num1 + num2;
}

let result1 = addNum(val1, val2); // Memory is allocated for result1, initialized as undefined
During the creation phase:
val1, val2, result1, and result2 are stored in memory but initialized with undefined.
The function addNum is fully stored in memory and can be invoked before it's encountered in code.
2. Execution Phase:
JavaScript starts executing code line by line.
Variables are assigned their actual values (e.g., val1 becomes 10, val2 becomes 20).
Function calls are made, and the execution moves into the Function Execution Context for each function call.
Example:

javascript
Copy code
let val1 = 10; // val1 gets the value 10
let val2 = 20; // val2 gets the value 20

let result1 = addNum(val1, val2); // Execution enters the function addNum and gets its result
let result2 = addNum(10, 25);     // Another function call with new arguments, another execution context
When addNum is called, a new execution context is created for that function. It has its own memory and execution phases, just like the global context.

Example Walkthrough:
javascript
Copy code
let val1 = 10;
let val2 = 20;

function addNum(num1, num2) {
    return num1 + num2;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 25);
Step 1: Memory Creation Phase (Global Execution Context)

val1 is initialized as undefined.
val2 is initialized as undefined.
addNum function is hoisted, and the entire function definition is stored.
result1 and result2 are initialized as undefined.
Step 2: Execution Phase (Global Execution Context)

val1 is assigned 10.
val2 is assigned 20.
addNum(val1, val2) is executed:
A new Function Execution Context is created.
Inside this function context:
num1 is assigned val1 (10).
num2 is assigned val2 (20).
The function returns num1 + num2 = 30.
result1 is assigned 30.
addNum(10, 25) is executed similarly, creating a new function execution context, and result2 is assigned 35.
Call Stack
The Call Stack is the mechanism that keeps track of the execution contexts in JavaScript. Every time a function is called, a new execution context is created and pushed onto the call stack. Once the function completes, its execution context is popped off the call stack.

Call Stack Flow:
Global Execution Context (GEC) is pushed onto the call stack.
When addNum is called, its Function Execution Context (FEC) is pushed onto the call stack.
Once the function finishes, its execution context is removed from the stack, and the control returns to the global context.
This process repeats for every function call.


Key Concepts to Remember:
- Global Execution Context (GEC): Created when the JavaScript code starts running. It manages global variables and functions.
- Function Execution Context (FEC): Created each time a function is called. Each function call gets its own context, which manages the function's arguments and local variables.
- Memory Creation Phase: Variables are initialized with undefined, and functions are hoisted in memory.
- Execution Phase: The actual execution of the code happens here, and variables get assigned their real values.
- Call Stack: Keeps track of execution contexts and ensures that functions are executed in the correct order.

Visualization:
// Call Stack (LIFO)
addNum(10, 25)      <-- Popped off after execution
addNum(val1, val2)  <-- Popped off after execution
Global Execution Context (GEC) <-- Always stays at the bottom

Each function call adds a new execution context to the stack, and when the function finishes, it is removed.

*/
