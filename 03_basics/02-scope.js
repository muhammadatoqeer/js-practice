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
