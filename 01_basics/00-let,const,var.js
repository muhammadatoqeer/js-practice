// Notes on var, let, and const in JavaScript:
//
// 1. var:
//    - Function-scoped.
//    - Can be re-declared and updated.
//    - Hoisted to the top of its scope and initialized with 'undefined'.
//    - Not recommended for modern code due to potential bugs.
//
// 2. let:
//    - Block-scoped.
//    - Can be updated but not re-declared in the same scope.
//    - Hoisted but NOT initialized (temporal dead zone until declaration).
//    - Safer than var for most use cases.
//
// 3. const:
//    - Block-scoped.
//    - Must be initialized at declaration and cannot be re-assigned.
//    - Hoisted but NOT initialized (temporal dead zone until declaration).
//    - For objects/arrays, the reference cannot change, but contents can be mutated.
//
// Hoisting:
//    - JavaScript's behavior of moving declarations to the top of their scope before code execution.
//    - var declarations are hoisted and initialized with 'undefined'.
//    - let and const are hoisted but not initialized, leading to a temporal dead zone (TDZ) until the line where they are declared.
//    - Function declarations are fully hoisted (can be called before their definition).
//    - Function expressions and arrow functions assigned to variables behave like their variable's hoisting rules.
//
// Example:
   console.log(a); // undefined (var is hoisted)
   var a = 10;

   console.log(b); // ReferenceError (let is hoisted but not initialized)
   let b = 20;

   foo(); // works (function declaration is hoisted)
   function foo() { console.log('Hello'); }

   bar(); // TypeError (bar is undefined)
   var bar = function() { console.log('Hi'); }