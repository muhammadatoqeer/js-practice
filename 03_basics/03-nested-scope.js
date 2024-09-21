//Case 1: Same named variables in the function

function one() {                //one() has outerscope
    const username = 'Sam';

    function two() {            //two() has inner scope
        const username = 'Muhammad';

        console.log(username) //'Muhammad' will take preference over 'Sam' because that is closer initiation of the 'username' variable in the local scope.
    }

    two();

}

one() //Output: 'Muhammad'

//Case 2: Scope of the individual variables

function one() {                //one() has outerscope
    const username = 'Sam';

    function two() {            //two() has inner scope
        const website = 'Youtube';

        console.log(username) //Output: 'Muhammad'(Inner functions can access the values of the outer function)
    }

    console.log(website); //Output: ReferenceError: website is not defined. This means that outer function cannot access the variables of the inner function. (Ice Cream example).

    two();

}

one(); //Output: 'Sam'

//This is the concept of closures in general. Inner block can access outer block's variables but the outer block cannot access the inner block's variables. (Basic Concept)






//+++++++++++++++++++++++++++ INTERESTING EXAMPLE (Hoisting) +++++++++++++++++++++++++++++++


//Case 1 => Calling a function after it's declaration

function addOne(number) { //this is a function declaration.
    return number + 1;
}

console.log(addOne(5)) // => we know that this function will get executed and return 6

//Case 2 => Calling a function before it's declaration

console.log(addthree(7)) // => This will also get executed and return 10 even though function is called prior to it's declaration

function addthree(number) {
    return number + 3;
}

//Case 3 => Calling a function expression after it's declaration
const addTwo = function (number) {  //this is a function expression (storing into a variable)
    return number + 2;
}

console.log(addTwo(3)) // Output will be 5


//Case 4 => Calling a function expression before it's declaration

console.log(addFour(3)) // ReferenceError: Cannot access 'addFour' before initialization

const addFour = function (number) {  //this is a function expression (storing into a variable)
    return number + 2;
}

//


