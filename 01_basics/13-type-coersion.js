// JavaScript Type Coercion: Beginner-Friendly Notes
// ================================================

/*
1. **What is Type Coercion?**
--------------------------------------------------
- Type coercion is the process by which JavaScript automatically converts values from one data type to another when required.
- It usually happens when you use operators or compare values of different types.

**Types of Coercion:**
- **Implicit Coercion:** JavaScript automatically converts the type.
- **Explicit Coercion:** You manually convert the type using functions or methods.


2. **Implicit Type Coercion**
--------------------------------------------------
- Happens behind the scenes when you use operators like `+`, `-`, `==`, etc.

**Examples:**
- String + Number:
    ```js
    console.log('5' + 2); // '52' (number 2 is coerced to string)
    ```
- String - Number:
    ```js
    console.log('5' - 2); // 3 ('5' is coerced to number)
    ```
- Boolean to Number:
    ```js
    console.log(true + 1); // 2 (true is coerced to 1)
    ```
- null and undefined:
    ```js
    console.log(null + 1); // 1 (null is coerced to 0)
    console.log(undefined + 1); // NaN (undefined becomes NaN)
    ```


3. **Explicit Type Coercion**
--------------------------------------------------
- You convert the type yourself using functions like `Number()`, `String()`, `Boolean()`.

**Examples:**
```js
console.log(Number('123')); // 123
console.log(String(123)); // '123'
console.log(Boolean(0)); // false
```


4. **Comparison Operators and Coercion**
--------------------------------------------------
- `==` (loose equality) allows coercion:
    ```js
    console.log('5' == 5); // true
    console.log(false == 0); // true
    ```
- `===` (strict equality) does NOT allow coercion:
    ```js
    console.log('5' === 5); // false
    console.log(false === 0); // false
    ```


5. **Common Pitfalls**
--------------------------------------------------
- Adding arrays or objects to numbers/strings can produce unexpected results:
    ```js
    console.log([] + 1); // '1' (empty array coerced to '')
    console.log([1,2] + 3); // '1,23'
    console.log({} + 1); // '[object Object]1'
    ```
- `null` and `undefined` behave differently:
    ```js
    console.log(null == undefined); // true
    console.log(null === undefined); // false
    ```


6. **Best Practices**
--------------------------------------------------
- Prefer `===` and `!==` to avoid unexpected coercion.
- Use explicit coercion for clarity.
- Be careful with operations involving different types.

*/
