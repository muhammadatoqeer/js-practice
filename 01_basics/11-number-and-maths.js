const num = 400; //standard way of declaring numbers

const balance = new Number(5000); //Will fix the datatype of 'balance' to be number


// Demonstrating Number Methods in JavaScript

// Number() - The Number constructor converts various values to a number type.
let num1 = Number("123"); // Converts a string to a number
let num2 = Number(true);  // Converts boolean true to 1
let num3 = Number(false); // Converts boolean false to 0

console.log(num1); // Output: 123
console.log(num2); // Output: 1
console.log(num3); // Output: 0

// toExponential() - Converts a number to a string in exponential (scientific) notation.
let num4 = 12345.6789;
console.log(num4.toExponential(2)); // Output: "1.23e+4" (2 digits after the decimal point)

// toFixed() - Converts a number to a string, keeping a specified number of decimals.
let num5 = 123.456;
console.log(num5.toFixed(2)); // Output: "123.46" (rounds to 2 decimal places)

// toLocaleString() - Converts a number to a string, using locale-specific formatting.
let num6 = 1234567.89;
console.log(num6.toLocaleString('en-US')); // Output: "1,234,567.89" (formatted for US locale)
console.log(num6.toLocaleString('de-DE')); // Output: "1.234.567,89" (formatted for German locale)

// toPrecision() - Formats a number to a specified length.
let num7 = 123.456;
console.log(num7.toPrecision(4)); // Output: "123.5" (4 significant digits)

// toString() - Converts a number to a string.
let num8 = 255;
console.log(num8.toString());   // Output: "255" (default is base 10)
console.log(num8.toString(16)); // Output: "ff" (base 16 hexadecimal representation)

// valueOf() - Returns the primitive value of a Number object.
let num9 = new Number(123);
console.log(num9.valueOf()); // Output: 123 (primitive number value)


// ****************************** MATH ******************************//

// Commonly Used Math Methods in JavaScript

// Math.abs() - Returns the absolute value of a number.
console.log(Math.abs(-10)); // Output: 10 (absolute value of -10)

// Math.acos() - Returns the arccosine (inverse cosine) of a number in radians.
console.log(Math.acos(1)); // Output: 0 (arccosine of 1 is 0 radians)

// Math.acosh() - Returns the inverse hyperbolic cosine of a number.
console.log(Math.acosh(2)); // Output: 1.3169578969248166 (inverse hyperbolic cosine of 2)

// Math.asin() - Returns the arcsine (inverse sine) of a number in radians.
console.log(Math.asin(0)); // Output: 0 (arcsine of 0 is 0 radians)

// Math.asinh() - Returns the inverse hyperbolic sine of a number.
console.log(Math.asinh(1)); // Output: 0.881373587019543 (inverse hyperbolic sine of 1)

// Math.atan() - Returns the arctangent (inverse tangent) of a number in radians.
console.log(Math.atan(1)); // Output: 0.7853981633974483 (arctangent of 1 is π/4 radians)

// Math.atan2() - Returns the arctangent of the quotient of its arguments, considering the signs to determine the correct quadrant.
console.log(Math.atan2(1, 1)); // Output: 0.7853981633974483 (arctangent of 1/1 is π/4 radians)

// Math.atanh() - Returns the inverse hyperbolic tangent of a number.
console.log(Math.atanh(0.5)); // Output: 0.5493061443340548 (inverse hyperbolic tangent of 0.5)

// Math.cbrt() - Returns the cube root of a number.
console.log(Math.cbrt(27)); // Output: 3 (cube root of 27)

// Math.ceil() - Rounds a number up to the next largest integer.
console.log(Math.ceil(4.3)); // Output: 5 (rounds up to 5)

// Math.clz32() - Returns the number of leading zero bits in the 32-bit binary representation of a number.
console.log(Math.clz32(1)); // Output: 31 (leading zeros in binary representation of 1)

// Math.cos() - Returns the cosine of a number (in radians).
console.log(Math.cos(Math.PI)); // Output: -1 (cosine of π radians)

// Math.cosh() - Returns the hyperbolic cosine of a number.
console.log(Math.cosh(0)); // Output: 1 (hyperbolic cosine of 0)

// Math.exp() - Returns e^x, where x is the argument, and e is Euler's number.
console.log(Math.exp(1)); // Output: 2.718281828459045 (e^1)

// Math.expm1() - Returns e^x - 1, where x is the argument, useful for small x values.
console.log(Math.expm1(1)); // Output: 1.718281828459045 (e^1 - 1)

// Math.floor() - Rounds a number down to the next smallest integer.
console.log(Math.floor(4.7)); // Output: 4 (rounds down to 4)

// Math.fround() - Returns the nearest 32-bit single precision float representation of a number.
console.log(Math.fround(1.337)); // Output: 1.3370000123977661 (32-bit float precision)

// Math.hypot() - Returns the square root of the sum of squares of its arguments.
console.log(Math.hypot(3, 4)); // Output: 5 (hypotenuse length of a right triangle with sides 3 and 4)

// Math.imul() - Performs 32-bit integer multiplication of two numbers.
console.log(Math.imul(2, 4)); // Output: 8 (2 multiplied by 4)

// Math.log() - Returns the natural logarithm (base e) of a number.
console.log(Math.log(Math.E)); // Output: 1 (natural log of e)

// Math.log1p() - Returns the natural logarithm of 1 + a number (useful for small values).
console.log(Math.log1p(1)); // Output: 0.6931471805599453 (ln(1 + 1))

// Math.log2() - Returns the base 2 logarithm of a number.
console.log(Math.log2(8)); // Output: 3 (log base 2 of 8)

// Math.log10() - Returns the base 10 logarithm of a number.
console.log(Math.log10(100)); // Output: 2 (log base 10 of 100)

// Math.max() - Returns the largest of the given numbers.
console.log(Math.max(1, 2, 3)); // Output: 3 (largest value)

// Math.min() - Returns the smallest of the given numbers.
console.log(Math.min(1, 2, 3)); // Output: 1 (smallest value)

// Math.pow() - Returns the base raised to the exponent (base^exponent).
console.log(Math.pow(2, 3)); // Output: 8 (2^3)

// Math.random() - Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()); // Output: A random number between 0 and 1

// Math.round() - Rounds a number to the nearest integer.
console.log(Math.round(4.5)); // Output: 5 (rounds to nearest integer)

// Math.sign() - Returns the sign of a number: 1 (positive), -1 (negative), 0, -0, or NaN.
console.log(Math.sign(-5)); // Output: -1 (negative)

// Math.sin() - Returns the sine of a number (in radians).
console.log(Math.sin(Math.PI / 2)); // Output: 1 (sine of π/2 radians)

// Math.sinh() - Returns the hyperbolic sine of a number.
console.log(Math.sinh(0)); // Output: 0 (hyperbolic sine of 0)

// Math.sqrt() - Returns the square root of a number.
console.log(Math.sqrt(16)); // Output: 4 (square root of 16)

// Math.tan() - Returns the tangent of a number (in radians).
console.log(Math.tan(Math.PI / 4)); // Output: 1 (tangent of π/4 radians)

// Math.tanh() - Returns the hyperbolic tangent of a number.
console.log(Math.tanh(0)); // Output: 0 (hyperbolic tangent of 0)

// Math.trunc() - Returns the integer part of a number by removing any fractional digits.
console.log(Math.trunc(4.9)); // Output: 4 (removes decimal part)


//random number generation between a specified number range (both inclusive)
let min = 10;
let max = 15;


console.log(Math.floor(Math.random() * (max - min + 1) + min))

parseInt('String') //NaN. Converts a string into a number

//Important Number Object properties

// The following Number properties are defined in ES6
Number.parseInt() // Same as the global parseInt() function
Number.parseFloat() // Same as the global parseFloat() function
Number.isNaN(x) // Is x the NaN value?
Number.isFinite(x) // Is x a number and finite?
Number.isInteger(x) // Is x an integer?
Number.isSafeInteger(x) // Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER // => -(2**53 - 1)
Number.MAX_SAFE_INTEGER // => 2**53 - 1
Number.EPSILON // => 2**-52: smallest difference between numbers

