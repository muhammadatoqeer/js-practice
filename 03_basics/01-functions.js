// Functions are basically packaged form of code that can be used over and over again

//e.g. If I want to print my name, I'll have to use 8 console.log(); statements

console.log('M');
console.log('U');
console.log('H');
console.log('A');
console.log('M');
console.log('M');
console.log('A');
console.log('D');

//alternatively, I could package these statements into a single function call 

function /* => the keyword*/ printMyName /* => funcion name. if there's no name then the function is anonymous */() /* => the parameter braces */ { //code block braces
    console.log('M');
    console.log('U');       //The code block for execution
    console.log('H');
    console.log('A');
    console.log('M');
    console.log('M');
    console.log('A');
    console.log('D');
}

printMyName(); //Function call with (). without () only function reference.
console.log(printMyName) //[Function: printMyName]

function addTwoNumbers(a, b /* a, b are PARAMETERS i.e. variable added during the declaration of the function*/) {
    console.log(a + b);
}

addTwoNumbers(3, 4) //3 and 4 here are ARGUMENTS (The actual values passed).

//We can save this function's value in a variable as well. E.g.

const result = addTwoNums(3, 5); //logically result should be equal to 8 but it's gonna return undefined. Here we understand the concept of RETURN keyword

function addTwoNumbers(a, b /* a, b are PARAMETERS i.e. variable added during the declaration of the function*/) {
    return a + b; //returning a value from function is one thing and
    //printing a value using console.log() is another thing and the function always exits after the return statement

    console.log('After return statement!') //this will not print because return statement has already forced the function to quit
}

//console.log() just prints to the console; it doesn’t return anything.
//return sends the value back to the calling code so it can be stored or used later.



function greeting(userName = 'Sam' /* We can also initialise the parameters in the declaration. That way if no arguments are passed then this initialised value is considered to be the input */) {
    return `${userName} just logged in!`
}

greeting('Muhammad') //This is going to EXECUTE the function but won't return anything because 1. We didn't print this function in itself. OR 2. We didn't store this into a variable and then printed that variable.

console.log(greeting()) //Output: Sam just logged in!
console.log(greeting('Muhammad')) // Output:Muhammad just logged in!




//Rest operator/spread operation '...' (3 dots). Used when we're not sure how many number of arguments are going to be passed. Then we use the REST '...' operator (Which is known as the spread operator otherwise). This operator takes in all the parameters and stores them in an array named after the three dots. e.g. '...args' will store the parameters in a 'args' named array etc. 

function calculateCartPrice(...params) {
    return params
}

console.log(calculateCartPrice(50, 40, 1, 2, 12)); //Output: [50,40,1,2,12];


//Objects and arrays in function

const obj1 = {
    firstName: 'Muhammad',
    "lastName": 'Toqeer',
    age: 23,
    gender: "M",
    location: 'Dubai',
    isLoggedIn: false,
}

function objectsInFunctions(object) {
    return `Fullname: ${object.firstName} + ${object.lastName} \n Age: ${object.age}` // \n is the 'new line' character.
}

console.log(objectsInFunctions(obj1)); //Output: Fullname: Muhammad + Toqeer 
//         Age: 23 years old.

let array = [1, 10, 13, 2, 78];

function printSecondElement(arr) {
    return arr[1];
}

console.log(printSecondElement(array)); //Output: 10


//+++++++++++++++++++++++   NOTES  ++++++++++++++++++++++++++++++


// JavaScript Function Declarations and Their Differences

/* 
1. Function Declaration
- The most common way to define a function.
- Function declarations are hoisted, meaning you can use them before they are defined in the code.
*/

function greet() {
    return "Hello, World!";
}

console.log(greet()); // Output: Hello, World!

/* 
Key Feature:
- **Hoisting**: Function declarations are hoisted, meaning they are available before they are defined in the code.
*/

console.log(hoistedFunction()); // Output: I am hoisted!
function hoistedFunction() {
    return "I am hoisted!";
}

/* 
2. Function Expression
- A function can be assigned to a variable.
- Function expressions are not hoisted, meaning they can only be called after they are defined.
*/

const sayHi = function () {
    return "Hi!";
};

console.log(sayHi()); // Output: Hi!

/* 
Key Feature:
- **Not Hoisted**: You cannot call a function expression before it is defined.
*/

// console.log(sayBye()); // Error: Cannot access 'sayBye' before initialization
const sayBye = function () {
    return "Goodbye!";
};

/* 
3. Arrow Function (ES6)
- A concise way to write functions using `=>` syntax.
- They do not have their own `this`, `arguments`, or `super`, and are best suited for non-method functions.
*/

const add = (a, b) => a + b;  // Implicit return for single expression
console.log(add(2, 3));       // Output: 5

const multiply = (a, b) => {
    return a * b;  // Explicit return with curly braces
};
console.log(multiply(2, 3)); // Output: 6

/* 
Key Differences:
- **No `this` Binding**: Arrow functions inherit `this` from the surrounding scope.
- **Cannot be used as constructors**: You cannot use arrow functions with the `new` keyword.
- **More concise syntax**: Particularly useful for simple functions.
*/

// Example of arrow function using `this`
const arrowExample = {
    name: "Arrow Function",
    regularFunc: function () {
        return `This is a regular function: ${this.name}`;
    },
    arrowFunc: () => {
        return `This is an arrow function: ${this.name}`; // `this` does not refer to the object here
    }
};
console.log(arrowExample.regularFunc()); // Output: This is a regular function: Arrow Function
console.log(arrowExample.arrowFunc());   // Output: This is an arrow function: undefined


/* 
4. Named Function Expression
- A variation of function expressions, where the function has a name, but it is not available outside the expression itself.
*/

const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1); // fact is only accessible within this function
};

console.log(factorial(5)); // Output: 120
// console.log(fact(5)); // Error: fact is not defined (not accessible outside the function)

/* 
Key Feature:
- **Named function expressions** are useful for recursion, but the name is not available outside the function's scope.
*/

/* 
5. Immediately Invoked Function Expression (IIFE)
- Functions that are executed as soon as they are defined.
- Commonly used to create a new scope and avoid polluting the global scope.
*/

(function () {
    console.log("IIFE is executed immediately!"); // Output: IIFE is executed immediately!
})();

/* 
Key Feature:
- **Self-executing function**: The function is executed immediately after being defined, useful for creating isolated scopes.
*/

/* 
6. Function Constructor
- You can create functions dynamically using the `Function` constructor.
- Not commonly used, but it exists as a valid way to create functions.
*/

const sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 3)); // Output: 5

/* 
Key Feature:
- **Less commonly used**: The Function constructor allows for creating functions dynamically, but it is less efficient and harder to debug compared to regular function declarations.
- **Avoid this for regular function definitions**.
*/

/* 
7. Methods in Objects
- Functions can be defined as properties of objects (methods).
- They behave like regular functions but are invoked in the context of the object.
*/

const obj = {
    name: "Object Method",
    greet: function () {
        return `Hello from ${this.name}`;
    }
};

console.log(obj.greet()); // Output: Hello from Object Method

/* 
Key Feature:
- **Method context (`this`)**: When functions are declared as methods inside an object, `this` refers to the object itself.
*/

/* 
8. Class Methods (ES6)
- In classes, functions are defined as methods.
*/

class Person {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        return `My name is ${this.name}`;
    }
}

const john = new Person('John');
console.log(john.sayName()); // Output: My name is John

/*
Key Feature:
- **Class methods**: These are functions defined within ES6 classes and are a more formal way to define object-oriented code in JavaScript.
*/

// Summary of Differences
/*
1. **Function Declaration**:
   - Hoisted, meaning you can call it before it is defined.
   - Function name is mandatory.
   
2. **Function Expression**:
   - Not hoisted, meaning you must define it before using it.
   - Can be anonymous or named.
   
3. **Arrow Function**:
   - More concise, no own `this` or `arguments`.
   - Cannot be used as constructors.
   
4. **Named Function Expression**:
   - Similar to function expressions but includes a name for recursion.
   - The name is only available inside the function scope.
   
5. **IIFE (Immediately Invoked Function Expression)**:
   - Executed immediately after being defined.
   - Commonly used to create private scopes.

6. **Function Constructor**:
   - Rarely used, creates a function dynamically.
   - Less efficient and harder to debug.

7. **Object Methods**:
   - Functions defined within an object.
   - `this` refers to the object itself.

8. **Class Methods**:
   - Functions defined within a class using the ES6 `class` syntax.
*/

