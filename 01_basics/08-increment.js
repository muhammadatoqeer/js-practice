// ++ operator converts the datatype to number and then test that datatpye further to confirm whether the operation can be performed or not

let x = 1001;

console.log(x++); //should return x:1001 for now
console.log(x++); //should return x:1002 for now 
console.log(x); //should return x:1003 now

//Hence if the operand is a post-fix, then it first RETURNS(prints) the original value and then increments the value of the variable

let y = 1001;

console.log(++y); //should return x:1002 for now
console.log(++y); //should return x:1003 for now 
console.log(y); //should return x:1003 now

//Hence if the operand is a pre-fix, then it RETURNS(prints) the incremented value of the variable. 

