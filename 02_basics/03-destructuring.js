// Destructuring in JavaScript
//
// 1. Array Destructuring:
//    - Allows you to unpack values from arrays into separate variables.
//    - Example:
       const arr = [1, 2, 3];
       const [a, b, c] = arr; // a=1, b=2, c=3
//    - You can skip elements:
       const [x, , z] = arr; // x=1, z=3
//    - Default values:
       const [p, q, r = 10] = [5, 6]; // p=5, q=6, r=10
//    - Swapping variables:
       let m = 1, n = 2;
       [m, n] = [n, m]; // m=2, n=1
//
// 2. Object Destructuring:
//    - Allows you to unpack properties from objects into variables.
//    - Example:
       const obj = { name: 'Ali', age: 25 };
       const { name, age } = obj; // name='Ali', age=25
//    - Assign to new variable names:
       const { name: fullName } = obj; // fullName='Ali'
//    - Default values:
       const { city = 'Lahore' } = obj; // city='Lahore'
//    - Nested destructuring:
       const user = { info: { id: 1, email: 'a@b.com' } };
       const { info: { email } } = user; // email='a@b.com'
//
// 3. Function Parameters:
//    - You can destructure arrays/objects directly in function parameters.
//    - Example:
       function printUser({ name, age }) {
         console.log(name, age);
       }
       printUser({ name: 'Ali', age: 25 });
//
// Note:
// For array destructuring, variable names can be anything, but their POSITION matters.
// For object destructuring, the variable name must match the property name in the object,
// unless you use the colon (:) syntax to assign a new variable name.
// Example:
  const objOne = { name: 'Ali', age: 25 };
  const { name: fulName } = objOne; // 'name' is the property, 'fullName' is the variable
  fulName = 'Ali'
//
//   // For arrays:
  const arrOne = [10, 20];
  const [first, second] = arrOne; // 'first' = 10, 'second' = 20 (names are arbitrary)
//
// Summary:
//   - Array destructuring: position matters, name does not.
//   - Object destructuring: name matters, unless you rename using colon syntax.
//
// Destructuring makes code concise and readable, especially when working with complex data structures.