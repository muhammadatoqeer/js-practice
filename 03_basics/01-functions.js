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