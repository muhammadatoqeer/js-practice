//concatenation of strings. refer to 04-datatypeConversions.js to understand the concatenation process better

const name = 'muhammad'
const repoCount = 5;

console.log(name + repoCount);
//muhammad5

//template strings using backticks `` (also known as string interpolation)
console.log(`Hi, My name is ${name} and I have ${repoCount} GitHub repositories`);

//Declaring Strings using the object method (constructor);

const myName = new String('Muhammad');
//typeof myName = object

//Even though you're using the String constructor to create a string object, the behavior of immutability still applies because of how JavaScript handles strings, regardless of whether they are primitive strings or string objects. String objects are wrappers around primitive strings: They provide additional functionality but do not alter the immutability of the string content.


//Important concept linked to stack and heap memory.
let originalString = "hello"; // Stored in the stack as a primitive
let upperCaseString = originalString.toUpperCase(); // Creates a new string in the stack

console.log(originalString); // Output: "hello" (original string remains unchanged)
console.log(upperCaseString); // Output: "HELLO" (new string is returned)

// Escape characters in string \n => newline



// String Methods in JavaScript

let str = "Hello, World!";
let str2 = "JavaScript";


//+++++++++++++++++++++++++++++++++ INDEX PRINTING METHODS ++++++++++++++++++++++++++++++++

// at() - RETURNS the character at the specified index (can be negative). These string indexes begin from 0 (like arrays)
console.log(str.at(7)); // Output: W (character at index 7)

// charAt() - RETURNS the character at a specified index. Same output as at() only difference is negative indices 
console.log(str.charAt(1)); // Output: e (character at index 1)

// indexOf() - Returns the first index of a specified substring/letter.
console.log(str.indexOf("o")); // Output: 4 (first occurrence of 'o')

// lastIndexOf() - Returns the last index of a specified substring.
console.log(str.lastIndexOf("o")); // Output: 8 (last occurrence of 'o')

// search() - Searches for a match between a string and a regular expression.
console.log(str.search("World")); // Output: 7 (index of 'World')

//+++++++++++++++++++++++++++++++++ BOOLEAN STRING METHODS ++++++++++++++++++++++++++++++++

// endsWith() - Checks if a string (calling string) ends with a specified substring.
console.log(str.endsWith("!")); // Output: true (string ends with '!')

// includes() - Checks if a string contains a specified substring.
console.log(str.includes("World")); // Output: true (string contains 'World').

// startsWith() - Checks if a string starts with a specified substring.
console.log(str.startsWith("Hello")); // Output: true (string starts with 'Hello')

//+++++++++++++++++++++++++++++++++ CHARACTERCODE METHODS ++++++++++++++++++++++++++++++++

// charCodeAt() - RETURNS the Unicode of the character at a specified index. Has code points from 0 to 65535 (Basic Multilingual Plane. Emojis and stuff not supported
console.log(str.charCodeAt(1)); // Output: 101 (Unicode of 'e')

// codePointAt() - The codePointAt() method of String values RETURNS a non-negative integer that is the Unicode code point value of the character starting at the given index. Supercharged version of charCodeAt() which can handle emojis and stuff.
console.log(str.codePointAt(1)); // Output: 101 (code point of 'e')

// concat() - Joins two or more strings into a calling string.
console.log(str.concat(" ", str2)); // Output: Hello, World! JavaScript (concatenates strings). str here is the 'calling string'. And concat() concatenates to the calling string. Can concatenate multiple strings in one call.







// isWellFormed() - Checks if a string is well-formed (part of ECMAScript proposals).
// console.log(str.isWellFormed()); // Commented out because it's not standard yet

// length - Returns the length of the string.
console.log(str.length); // Output: 13 (length of the string)

// localeCompare() - Compares two strings in the current locale.
console.log(str.localeCompare("hello")); // Output: 1 (compares strings based on locale)

// match() - Matches a string against a regular expression.
console.log(str.match(/world/i)); // Output: ["World"] (matches 'World' ignoring case)

// matchAll() - Returns an iterator with all matches of a string against a regular expression.
console.log([...str.matchAll(/o/g)]); // Output: [ 'o', 'o' ] (all occurrences of 'o')

// normalize() - Returns the Unicode normalization of a string.
console.log(str.normalize()); // Output: Hello, World! (returns normalized form)

// padEnd() - Pads the end of the string with specified characters until it reaches a specified length.
console.log(str.padEnd(15, "!")); // Output: Hello, World!!! (pads with '!' to length 15)

// padStart() - Pads the start of the string with specified characters until it reaches a specified length.
console.log(str.padStart(15, "!")); // Output: !!Hello, World! (pads with '!' to length 15)

// repeat() - Repeats the string a specified number of times.
console.log(str.repeat(2)); // Output: Hello, World!Hello, World! (repeats string twice)

// replace() - Replaces a specified value with another value in a string.
console.log(str.replace("World", "JS")); // Output: Hello, JS! (replaces 'World' with 'JS')

// replaceAll() - Replaces all occurrences of a specified value with another value.
console.log(str.replaceAll("o", "O")); // Output: HellO, WOrld! (replaces all 'o' with 'O')


// slice() - Extracts a section of a string and returns it as a new string.
console.log(str.slice(7, 12)); // Output: World (extracts from index 7 to 12)

// split() - Splits a string into an array of substrings.
console.log(str.split(", ")); // Output: [ 'Hello', 'World!' ] (splits by ', ')


// substr() - Returns a part of the string from a start index with a specified length.
console.log(str.substr(7, 5)); // Output: World (extracts 5 characters from index 7)

// substring() - Returns a part of the string between two indices.
console.log(str.substring(7, 12)); // Output: World (extracts from index 7 to 12)

// toLocaleLowerCase() - Converts the string to lowercase according to the host's current locale.
console.log(str.toLocaleLowerCase()); // Output: hello, world! (locale-aware lowercase conversion)

// toLocaleUpperCase() - Converts the string to uppercase according to the host's current locale.
console.log(str.toLocaleUpperCase()); // Output: HELLO, WORLD! (locale-aware uppercase conversion)

// toLowerCase() - Converts the string to lowercase.
console.log(str.toLowerCase()); // Output: hello, world! (converts to lowercase)

// toString() - Returns the string representation of the object.
console.log(str.toString()); // Output: Hello, World! (returns string itself)

// toUpperCase() - Converts the string to uppercase.
console.log(str.toUpperCase()); // Output: HELLO, WORLD! (converts to uppercase)

// trim() - Removes whitespace from both ends of a string.
console.log("  Hello, World!  ".trim()); // Output: Hello, World! (trims whitespace)

// trimEnd() - Removes whitespace from the end of a string.
console.log("  Hello, World!  ".trimEnd()); // Output: "  Hello, World!" (trims end whitespace)

// trimStart() - Removes whitespace from the start of a string.
console.log("  Hello, World!  ".trimStart()); // Output: "Hello, World!  " (trims start whitespace)

// valueOf() - Returns the primitive value of a String object.
console.log(str.valueOf()); // Output: Hello, World! (returns primitive string value)

// 1. Using locale with `toLocaleString()` for number formatting
const number = 1234567.89;
console.log(number.toLocaleString("en-US")); // Output: "1,234,567.89" (US English format)
console.log(number.toLocaleString("de-DE")); // Output: "1.234.567,89" (German format)

// 2. Using `toLocaleUpperCase()` and `toLocaleLowerCase()` for regional character case
const city = "istanbul";
console.log(city.toLocaleUpperCase("en-US")); // Output: "ISTANBUL" (Standard uppercase)
console.log(city.toLocaleUpperCase("tr-TR")); // Output: "İSTANBUL" (Turkish locale changes the dot)

// 3. Using `localeCompare()` for sorting strings based on locale
const names = ["Álvaro", "Alberto", "Andrea"];
names.sort((a, b) => a.localeCompare(b, "es-ES")); // Spanish sorting rules
console.log(names); // Output: ["Alberto", "Álvaro", "Andrea"] (Accented Á is sorted differently)


// [Symbol.iterator] - Returns an iterator for the characters of the string.
for (let char of str) {
    console.log(char); // Iterates and prints each character of the string
}



/* *********************DEPRECATED******************** */


// anchor() - Creates an HTML anchor (<a>) element with a specified name.
console.log(str.anchor("example")); // Output: <a name="example">Hello, World!</a> (wraps string in <a> tag). name attribute acts as key for the data

// big() - Creates a <big> HTML element. Deprecated/Not Supported in HTML5
console.log(str.big()); // Output: <big>Hello, World!</big> (wraps string in <big> tag)

// blink() - Creates a <blink> HTML element (deprecated, not commonly used).
console.log(str.blink()); // Output: <blink>Hello, World!</blink> (wraps string in <blink> tag)

// bold() - Creates a <b> HTML element to make the text bold.
console.log(str.bold()); // Output: <b>Hello, World!</b> (wraps string in <b> tag)


// fixed() - Creates a <tt> HTML element (teletype text).
console.log(str.fixed()); // Output: <tt>Hello, World!</tt> (wraps string in <tt> tag)

// fontcolor() - Creates a <font> HTML element with a specified color.
console.log(str.fontcolor("red")); // Output: <font color="red">Hello, World!</font> (wraps string in <font> tag)

// fontsize() - Creates a <font> HTML element with a specified size.
console.log(str.fontsize(4)); // Output: <font size="4">Hello, World!</font> (wraps string in <font> tag)

// italics() - Creates an <i> HTML element (italic text).
console.log(str.italics()); // Output: <i>Hello, World!</i> (wraps string in <i> tag)

// link() - Creates an <a> HTML element with a specified URL.
console.log(str.link("http://example.com")); // Output: <a href="http://example.com">Hello, World!</a> (wraps string in <a> tag).

// sup() - Creates a <sup> HTML element (superscript text).
console.log(str.sup()); // Output: <sup>Hello, World!</sup> (wraps string in <sup> tag)

// small() - Creates a <small> HTML element.
console.log(str.small()); // Output: <small>Hello, World!</small> (wraps string in <small> tag)

// strike() - Creates a <strike> HTML element (strikethrough text).
console.log(str.strike()); // Output: <strike>Hello, World!</strike> (wraps string in <strike> tag)

// sub() - Creates a <sub> HTML element (subscript text).
console.log(str.sub()); // Output: <sub>Hello, World!</sub> (wraps string in <sub> tag)