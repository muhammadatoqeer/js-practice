const user = {
    fullname: "Muhammad",
    age: 23,
    greeting: function () {
        console.log(`Welcome ${this.fullname}!`) //'this' keyword tells the program to stay within the current context of the object/function.
        console.log(this) //This will print the whole 'user' object hence confirming our context
    }
}


user.greeting //won't print anything
user.greeting() //Output: Welcome Muhammad!
user.fullname = 'Sam'
user.greeting() //Output: Welcome Sam! The output changes because 'this' acts as a placeholder for whatever value is in the object

//Outside of the object, if I print:

console.log(this); //will return an empty object in the node environment but 'Window' object in the browser window. 

function testFunc() {
    console.log(this);//gives us tons of values for the object (in Node)
}

testFunc();

function testFunc() {
    let naam = 'Muhammad'
    console.log(this.naam);//Output: undefined ; does not understand the context  
}

testFunc();

// Arrow Functions

const arrow = () => {   //arrow declaration

}

const arrow1 = function () { //function expression
    let var1 = 'Arrow';
    console.log(this.var1); //Output: undefined
}

const addTwo = (n1, n2) => { //basic syntax of an arrow function
    return n1 + n2;
}

//implicit return (single line statement so no need for return keyword). If parameter is also 1 then can skip parentheses too

const add3 = n => n + 3
const add2nums = (n, m) => n + m

const add2num = (n, m) => (n + m) //Can wrap in parentheses without return keyword in the statement
const add2nu = (n, m) => { n + m } //But us using curly braces then HAVE to add the return keyword. Output: undefined