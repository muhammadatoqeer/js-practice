// Basic Arithmetic Operations
let a = 10;
let b = 5;

// Addition
let sum = a + b; // 10 + 5
console.log(`Sum: ${sum}`); // Output: Sum: 15

// Subtraction
let difference = a - b; // 10 - 5
console.log(`Difference: ${difference}`); // Output: Difference: 5

// Multiplication
let product = a * b; // 10 * 5
console.log(`Product: ${product}`); // Output: Product: 50

// Division
let quotient = a / b; // 10 / 5
console.log(`Quotient: ${quotient}`); // Output: Quotient: 2

// Modulus (Remainder)
let remainder = a % b; // 10 % 5
console.log(`Remainder: ${remainder}`); // Output: Remainder: 0

// Exponentiation (Power)
let power = a ** b; // 10^5
console.log(`Power: ${power}`); // Output: Power: 100000

// Increment and Decrement Operations
let x = 10;

// Increment
x++; // x = x + 1
console.log(`Increment: ${x}`); // Output: Increment: 11

// Decrement
x--; // x = x - 1
console.log(`Decrement: ${x}`); // Output: Decrement: 10

// Assignment Operators
let c = 20;

// Addition Assignment
c += 10; // c = c + 10
console.log(`Addition Assignment: ${c}`); // Output: 30

// Subtraction Assignment
c -= 5; // c = c - 5
console.log(`Subtraction Assignment: ${c}`); // Output: 25

// Multiplication Assignment
c *= 2; // c = c * 2
console.log(`Multiplication Assignment: ${c}`); // Output: 50

// Division Assignment
c /= 5; // c = c / 5
console.log(`Division Assignment: ${c}`); // Output: 10

// Modulus Assignment
c %= 3; // c = c % 3
console.log(`Modulus Assignment: ${c}`); // Output: 1

// Exponentiation Assignment
c **= 2; // c = c ** 2
console.log(`Exponentiation Assignment: ${c}`); // Output: 1

// Comparison Operators
let d = 10;
let e = 20;

// Equal to
console.log(d == e); // Output: false

// Not equal to
console.log(d != e); // Output: true

// Strict equal to (checks value and type)
console.log(d === e); // Output: false

// Strict not equal to (checks value and type)
console.log(d !== e); // Output: true

// Greater than
console.log(d > e); // Output: false

// Less than
console.log(d < e); // Output: true

// Greater than or equal to
console.log(d >= e); // Output: false

// Less than or equal to
console.log(d <= e); // Output: true

// Using Math Object for Advanced Operations
let number = -4.7;

// Absolute value
console.log(`Absolute: ${Math.abs(number)}`); // Output: 4.7

// Rounding
console.log(`Rounded: ${Math.round(number)}`); // Output: -5

// Ceiling (rounds up)
console.log(`Ceiling: ${Math.ceil(number)}`); // Output: -4

// Floor (rounds down)
console.log(`Floor: ${Math.floor(number)}`); // Output: -5

// Square Root
console.log(`Square Root: ${Math.sqrt(25)}`); // Output: 5

// Power
console.log(`Power: ${Math.pow(3, 3)}`); // Output: 27

// Random Number between 0 (inclusive) and 1 (exclusive)
console.log(`Random: ${Math.random()}`); // Output: Random number between 0 and 1

// Max and Min
console.log(`Max: ${Math.max(10, 20, 30)}`); // Output: 30
console.log(`Min: ${Math.min(10, 20, 30)}`); // Output: 10

// Trigonometric Functions
console.log(`Sine: ${Math.sin(Math.PI / 2)}`); // Output: 1 (sine of 90 degrees)
console.log(`Cosine: ${Math.cos(0)}`); // Output: 1 (cosine of 0 degrees)
console.log(`Tangent: ${Math.tan(Math.PI / 4)}`); // Output: 1 (tangent of 45 degrees)
