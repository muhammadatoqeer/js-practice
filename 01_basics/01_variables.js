
//declaring a variable reserves (allocates) a space in memory. 

const accountID = 569; //const is used to declare a constant variable that cannot be changed later.
let accountEmail = 'xyz@abc.com' 
var accountPassword = 'xyz987' //'Var' keyword does not respect the block and functional scope. NOT RECOMMENDED to be used !
accountCity = 'Dubai' //Even without using any of the variable keywords, we can still declare and re-assign this variable. It's possible but again NOT RECOMMENDED!
let accountState; //All the above variables were initialized (i.e. assigned a value). This one is not so it will be assigned the value of 'undefined' by Javscript itself.



// accountID = 10; TypeError: Assignment to constant variable. Beacuse re-assignment is not possible to a const variable.

console.log(accountID); 

accountEmail = 'abc@xyz.com' //re-assignment is possible.

console.log(accountEmail);

accountPassword = 'abc982'  //re-assignment is possible.

console.log(accountPassword);

accountCity = 'Toronto';

console.log(accountCity);

// Alternatively, to display all of these variables in one go, we can use console.table which prints out in an array manner

console.table([accountEmail,accountID, accountPassword, accountCity, accountState])

// earlier versions of JavaScript had little to no understanding of the scope (two curly braces {}).