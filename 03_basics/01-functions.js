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

printMyName(); //Function call with (). without () only function declaration