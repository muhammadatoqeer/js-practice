// Optional Chaining in JavaScript
// ===============================

// The optional chaining operator (?.) allows you to safely access deeply nested properties or methods
// without having to check if each reference in the chain is valid (not null or undefined).

// Where it works:
// - Accessing nested object properties: obj?.prop?.subProp
// - Calling methods: obj?.method?.()
// - Accessing array elements: arr?.[index]
// - Chaining with function calls: obj.method?.().prop

// Where it does NOT work:
// - On the left side of an assignment (e.g., obj?.prop = value) — this is not allowed.
// - With variables that are not declared at all (ReferenceError if the variable itself doesn't exist).
// - It only short-circuits on null or undefined, not on other falsy values (like 0, '', false).

// How it is useful:
// - Prevents runtime errors when accessing properties of null or undefined objects.
// - Makes code cleaner and reduces the need for multiple checks (if (obj && obj.prop && obj.prop.subProp)).
// - Useful when working with data from APIs or optional configuration objects.

// Examples:
const user = {
    name: "Alice",
    address: {
        city: "Wonderland"
    }
};

console.log(user.address?.city); // "Wonderland"
console.log(user.contact?.phone); // undefined (no error thrown)

const users = null;
console.log(users?.[0]); // undefined

const person = {
    getName() { return "Bob"; }
};
console.log(person.getName?.()); // "Bob"
console.log(person.getAge?.()); // undefined

// Not allowed:
// user?.name = "Charlie"; // SyntaxError
// console.log(notDeclaredVar?.prop); // ReferenceError: notDeclaredVar is not defined

// Only short-circuits on null/undefined:
const obj = { value: 0 };
console.log(obj.value?.toString()); // "0" (works, 0 is not null/undefined)
