/**/

// Control Flow/Logic Flow:

// Introduction of conditions 

// Simple if statement

if /*(Keyword)*/ (condition_introduced) {  // block scope opened
    // This block of the if condition will execute ONLY if the condition_introduced is TRUE/Truthy value
}

// Implicit scope (for single statements)

if (condition) console.log('It still works!');

//REVISE Operators from 01_basics\06-comparisons.js 

// if...else statement. As mentioned earlier, the code block of the if statement only executes if the condition_introduced is TRUE/Truthy value but what if the condition is false? For that purpose we need another code block in the form of else

if (condition_introduced) {   //At least 1 code block is always going to be executed from this if...else statement. 

} else {

}

//if...else if
if (condition) {

} else if (anotherCondition) {

} else if (anotherCondition) {

} else {

}

//AND Gate
if (condition1 && condition2) { //&& denotes AND. Both conditions MUST be true 

}

// OR GATE
if (condition1 || condition2) { //|| denotes OR. At least one of the  conditions MUST be true 

}

//24:30 =>26