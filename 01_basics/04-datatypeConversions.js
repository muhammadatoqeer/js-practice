// We're investigating the conversion of the datatypes

let age = 3; //we know it's a number here. but sometimes we don't know the value that we're retrieving (from the front-end to the backend) using a form etc. so it's likely that this value might've been passed on as a string

console.log(typeof age) //should return number


let ID = '657'; //now this is a string

console.log(typeof ID) //should return a string

let converter = Number(ID) //This will convert that string into a Number (integer)

console.log(typeof converter) // should return Number

let testVar = '657abc'; //Let's test the case where the string is alphanumeric and then convert it into a number

let testVar2 = Number(testVar); 

console.log(typeof testVar2)//should return Number

console.log(testVar2) //should return NaN. Which means that NaN in itself is of the datatype Number

console.log(Number(null)) //should return 0

console.log(Number(undefined)) //should return NaN

console.log(Number(true)) //should return 1

console.log(Number(false)) //should return 0

Number();
Boolean(); //special cases include empty string '' or "" which returns false, rest of the values are true. 0 number is false, rest of the values are true 
String();


console.log(1 + 1 + +'1') //'21'

console.log(1 + '1') //11
console.log('1' + 1 + 1) // 111

//If string first then whole expression becomes string (line 40), if first integer then perform integer calculation and then concatenated that to the string (line 37)






