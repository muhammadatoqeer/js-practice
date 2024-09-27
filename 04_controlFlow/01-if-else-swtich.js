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

//Switch statement is needed when we have to check multiple cases of a value. (Compact version of if...else if)

switch (key) { //key is the 
    case value:

        break;

    default:
        break;
}

const month = 3;

switch (month) {
    case 1:
        console.log('Month is January') //Shift + Alt + Down arrow to copy
        break;
    case 2:
        console.log('Month is February')
        break;
    case 3:
        console.log('Month is March')
        break;

    default: //like an 'else'. Executes when nothing else if left.
        console.log('Month is March')
        break;
}

//Break keyword exits the execution of the code after the case has matched. if no break keyword then the program keeps on executing despite the case matching (except Default). Interview question.