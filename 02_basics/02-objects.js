//Declared using two methods - 1. Literal, 2. Constructor 3. Object.create

//*********************USING LITERALS********************* */

const mySym = Symbol('Key1')

const obj1 = {              //Literal Declaration
    firstName: 'Muhammad',
    "lastName": 'Toqeer',   // a key-value pair. Main feature of objects.
    age: 23,                // The keys are also passed as strings (to access)
    gender: "M",
    location: 'Dubai',
    isLoggedIn: false,
    // mySym: 'Hola',    This way the symbol isn't added to the object as Symbol
    [mySym]: 'Symbol', //This way the symbol is added to the object
}

console.log(typeof obj1[mySym]) // Will return string if the symbol is not declared using the [] notation in the object. but the type of this pair [mySym]: 'Symbol', should return  [Symbol(Key1)]: 'Key1'

console.log(obj1.name); //Two methods of accessing the keys
console.log(obj1["name"]); //Recommended one

obj1.email = 'xyz@example.com' //Can add a key-value pair using the dot notation
obj1["phone"] = 354124 //Can add a key-value pair using the brackets notation


obj1.email = 'xyz@abc.com' //Can edit a key-value pair using the dot notation
obj1["phone"] = 3541124 //Can edit a key-value pair using the brackets notation

obj1.greeting = function () {       //Can add functions as values to keys
    console.log('Hello Muhammad!')
}

obj1.greetingTwo = function () {       //Can add functions as values to keys
    console.log(`Hello ${this.firstName}`) //Here we are introduced to 'this'
}

// 'this' keyword is used to reference the same object in the functions of the same object. 

obj1.greeting() //There's a difference in these 2. This will execute the function
obj1.greeting //This will not. Will only reference it as a function. 



Object.freeze(obj1) //After this, you won't be able to do any changes to this object



/*********************USING CONSTRUCTORS**********************/

const user = new Object();

console.log(user) //empty object : {}


user.id = 12345
user.name = 'Muhammad'
user.email = 'abc@xyz.def'
user.location = 'Toronto'


console.log(user)   //{
//     id: 12345,
//     name: 'Muhammad',
//     email: 'abc@xyz.def',
//     location: 'Toronto'
// } Working and output all the same


const anotherUser = {
    email: 'abc@gmail.com',
    fullName: {                 //Object within an object
        firstName: 'Muhammad',
        lastName: 'Toqeer'
    },
    isLoggedIn: true
}
console.log(anotherUser["fullName"]["firstName"]) // 'Muhammad'

// Comprehensive Guide to JavaScript Object Methods

// 1. Object.assign() - Copies properties from source objects to a target object into the target object.
const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 2 }
// typically if we have to assign more than 2 or 3 objects, it's good practice to add an empty object in place of target and then add the remaining objects in place of sources. Just a good practice. 
//Or like we used to do in the arrays, we could use a spread operator as follows obj3 = {...obj1, ...obj2, ...obj3} and so on

// 2. Object.create() - Creates a new object with the specified prototype.
const proto = { a: 1 };
const objFromProto = Object.create(proto);
console.log(objFromProto.a); // Output: 1 (inherited from proto)

// 3. Object.defineProperties() - Defines multiple properties on an object.
const objMultipleProps = {};
Object.defineProperties(objMultipleProps, {
    prop1: { value: 1, writable: true },
    prop2: { value: 2, writable: false }
});
console.log(objMultipleProps); // Output: { prop1: 1, prop2: 2 }

// 4. Object.defineProperty() - Defines a new property or modifies an existing property on an object.
const objSingleProp = {};
Object.defineProperty(objSingleProp, 'prop', { value: 42, writable: false });
console.log(objSingleProp.prop); // Output: 42

// 5. Object.entries() - Returns an array of key-value pairs from an object.
const objEntries = { a: 1, b: 2 };
console.log(Object.entries(objEntries)); // Output: [['a', 1], ['b', 2]]

// 6. Object.freeze() - Freezes an object, making it immutable.
const objFreeze = { a: 1 };
Object.freeze(objFreeze);
objFreeze.a = 2; // Fails silently in non-strict mode
console.log(objFreeze.a); // Output: 1

// 7. Object.fromEntries() - Converts key-value pairs into an object.
const entries = [['a', 1], ['b', 2]];
const objFromEntries = Object.fromEntries(entries);
console.log(objFromEntries); // Output: { a: 1, b: 2 }

// 8. Object.getOwnPropertyDescriptor() - Returns the descriptor of a specific property.
const objDescriptor = { a: 1 };
console.log(Object.getOwnPropertyDescriptor(objDescriptor, 'a'));
// Output: { value: 1, writable: true, enumerable: true, configurable: true }

// 9. Object.getOwnPropertyDescriptors() - Returns descriptors of all properties of an object.
console.log(Object.getOwnPropertyDescriptors(objDescriptor));
// Output: { a: { value: 1, writable: true, enumerable: true, configurable: true } }

// 10. Object.getOwnPropertyNames() - Returns an array of all properties (including non-enumerable ones).
console.log(Object.getOwnPropertyNames(objDescriptor)); // Output: ['a']

// 11. Object.getOwnPropertySymbols() - Returns an array of own property symbols.
const symbol = Symbol('sym');
const objSymbols = { [symbol]: 1 };
console.log(Object.getOwnPropertySymbols(objSymbols)); // Output: [Symbol(sym)]

// 12. Object.getPrototypeOf() - Returns the prototype of the object.
const objProtoExample = Object.create(proto);
console.log(Object.getPrototypeOf(objProtoExample)); // Output: { a: 1 }

// 13. Object.hasOwn() - Checks if an object has a property as its own property.
const objHasOwn = { a: 1 };
console.log(Object.hasOwn(objHasOwn, 'a')); // Output: true

// 14. Object.is() - Compares if two values are the same.
console.log(Object.is(0, -0)); // Output: false
console.log(Object.is(NaN, NaN)); // Output: true

// 15. Object.isExtensible() - Checks if an object is extensible.
const objExtensible = {};
console.log(Object.isExtensible(objExtensible)); // Output: true
Object.preventExtensions(objExtensible);
console.log(Object.isExtensible(objExtensible)); // Output: false

// 16. Object.isFrozen() - Checks if an object is frozen.
const objFrozenCheck = Object.freeze({});
console.log(Object.isFrozen(objFrozenCheck)); // Output: true

// 17. Object.isSealed() - Checks if an object is sealed.
const objSealed = Object.seal({});
console.log(Object.isSealed(objSealed)); // Output: true

// 18. Object.keys() - Returns an array of the object's own enumerable property names.
const objKeys = { a: 1, b: 2 };
console.log(Object.keys(objKeys)); // Output: ['a', 'b']

// 19. Object.preventExtensions() - Prevents new properties from being added to an object.
const objPreventExtensions = {};
Object.preventExtensions(objPreventExtensions);
objPreventExtensions.a = 1; // Fails silently
console.log(objPreventExtensions); // Output: {}

// 20. Object.seal() - Seals an object, preventing new properties from being added and existing ones from being removed.
const objSeal = { a: 1 };
Object.seal(objSeal);
objSeal.a = 2; // Works because the property is writable
delete objSeal.a; // Fails silently
console.log(objSeal); // Output: { a: 2 }

// 21. Object.setPrototypeOf() - Sets the prototype of a specified object.
const objSetProto = {};
Object.setPrototypeOf(objSetProto, proto);
console.log(objSetProto.a); // Output: 1

// 22. Object.values() - Returns an array of the object's own enumerable property values.
const objValues = { a: 1, b: 2 };
console.log(Object.values(objValues)); // Output: [1, 2]

// Interview Tips
// ==============
// - Prototype Manipulation: Understand `Object.create()`, `Object.setPrototypeOf()`, and `Object.getPrototypeOf()` for inheritance and prototype chain questions.
// - Immutability: Know when to use `Object.freeze()`, `Object.seal()`, and `Object.preventExtensions()` for creating immutable or restricted objects.
// - Property Descriptors: `Object.defineProperty()` and `Object.defineProperties()` are essential for setting up custom property behavior.
// - Equality Checks: `Object.is()` is crucial for accurate comparison, especially for special cases like `NaN` and distinguishing `+0` and `-0`.

// These methods cover a broad range of object manipulation capabilities in JavaScript, making them essential tools for understanding and working with JavaScript objects efficiently.


// Additional Object Prototype Methods

// 1. Object.prototype.constructor
const objConstructor = {};
console.log(objConstructor.constructor); // Output: ƒ Object() { [native code] }

// 2. Object.prototype.hasOwnProperty()
const objHasOwnProp = { a: 1 };
console.log(objHasOwnProp.hasOwnProperty('a')); // Output: true
console.log(objHasOwnProp.hasOwnProperty('b')); // Output: false

// 3. Object.prototype.isPrototypeOf()
const protoExample = { a: 1 };
const objProto = Object.create(protoExample);
console.log(protoExample.isPrototypeOf(objProto)); // Output: true

// 4. Object.prototype.propertyIsEnumerable()
const objEnum = { a: 1 };
console.log(objEnum.propertyIsEnumerable('a')); // Output: true
console.log(objEnum.propertyIsEnumerable('toString')); // Output: false

// 5. Object.prototype.toLocaleString()
const date = new Date();
console.log(date.toLocaleString()); // Output: Locale-specific date and time string

// 6. Object.prototype.toString()
const objToString = {};
console.log(objToString.toString()); // Output: [object Object]
console.log(Object.prototype.toString.call([])); // Output: [object Array]

// 7. Object.prototype.valueOf()
const objValueOf = { a: 1 };
console.log(objValueOf.valueOf()); // Output: { a: 1 }
const num = new Number(123);
console.log(num.valueOf()); // Output: 123

// Summary and Tips
// ================
// - Understanding these methods is crucial for differentiating between own and inherited properties (`hasOwnProperty`, `isPrototypeOf`).
// - `toString()` is a versatile method for type checking, particularly with `Object.prototype.toString.call()` pattern.
// - `valueOf()` is useful for getting primitive representations of objects, commonly seen with Number, String, and Date objects.

// These methods enhance the functionality of JavaScript objects and are important for managing object properties and inheritance in a more controlled manner.



/* ---------------------DESTRUCTURING AN OBJECT----------------- */

// Destructuring in programming refers to a convenient syntax that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise and readable manner. 

const person = { name: "John", age: 30 };
const { name: n, age: a } /*{ objectKey : alternative name for that key}]*/ = person; //name of the object

console.log(n); // Output: John
console.log(a);  // Output: 30
