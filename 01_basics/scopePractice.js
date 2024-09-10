//Let's investigate the difference in the scope of 'Var' and 'Let'

// Just remember the following two sentences for now******

// var allows for re-declaration within the same scope, which can lead to unexpected behaviors.
// let does not allow re-declaration in the same scope, preventing some common errors.

let var1 = 20;

var var2 = 10;

function testScope(){
    let var1 = 30;
    var var2 = 100
    console.log(var1);
    console.log(var2);
}

testScope();

console.log(var1);
console.log(var2); //should print 100


// *****************************************************DONT LOOK AT IT FOR NOW**************************************************











// 'let' and 'var' have different scope and hoisting behaviors.
// 'let' has block scope, while 'var' has function scope.
// Let's explore these differences in detail with some examples.

// let var1 = 20; // Declared using 'let', has block scope.
// var var2 = 10; // Declared using 'var', has function (or global) scope.

// function testScope() {
//     // Inside this function, 'var1' and 'var2' are re-declared.
//     let var1 = 30;  // This 'var1' is only accessible within this block (function scope here).
//     var var2 = 100; // This 'var2' is function scoped and will shadow the global 'var2'.
    
//     console.log(var1); // Output: 30 (local 'var1' declared with 'let')
//     console.log(var2); // Output: 100 (local 'var2' declared with 'var')
// }

// testScope();

// console.log(var1); // Output: 20 (global 'var1' declared with 'let')
// console.log(var2); // Output: 100 (global 'var2' is shadowed by local 'var2' in function)


// // Let's illustrate further differences with block scope:

// function testBlockScope() {
//     if (true) {
//         let blockLet = "I am block scoped"; // 'let' is limited to this block (inside if statement)
//         var blockVar = "I am function scoped"; // 'var' is accessible anywhere within the function
        
//         console.log(blockLet); // Output: "I am block scoped"
//         console.log(blockVar); // Output: "I am function scoped"
//     }
    
//     // console.log(blockLet); // Error: blockLet is not defined (since it's block scoped)
//     console.log(blockVar); // Output: "I am function scoped" (accessible outside the block)
// }

// testBlockScope();


// // Another illustration with loops:

// for (let i = 0; i < 3; i++) {
//     // 'i' declared with 'let' is block scoped and exists only within this loop block.
//     console.log(i); // Output: 0, 1, 2
// }

// // console.log(i); // Error: i is not defined (i is block scoped)

// // Using 'var' in a loop:
// for (var j = 0; j < 3; j++) {
//     // 'j' declared with 'var' has function scope, so it's accessible outside the loop as well.
//     console.log(j); // Output: 0, 1, 2
// }

// console.log(j); // Output: 3 (var declared 'j' is accessible outside the loop)


// // Hoisting behavior:

// console.log(hoistedVar); // Output: undefined (var declarations are hoisted but not initialized)
// var hoistedVar = 5;

// // console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
// let hoistedLet = 10;

// // With 'var', the declaration is hoisted to the top of the scope, but the assignment stays in place.
// // With 'let', the declaration is also hoisted, but it remains uninitialized in the "temporal dead zone" until it is encountered.
