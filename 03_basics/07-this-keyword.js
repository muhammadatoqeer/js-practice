// Notes on the 'this' keyword in JavaScript:
//
// 1. Global Context:
//    - In the global scope (non-strict mode), 'this' refers to the global object (window in browsers).
//    - In strict mode, 'this' is undefined in the global scope.
//
// 2. Inside Objects (Methods):
//    - When a function is called as a method of an object, 'this' refers to the object the method is called on.
//    - Example:
       const obj = { name: 'A', getName() { return this.name; } };
       obj.getName(); // 'A'
//
// 3. Function Declarations & Expressions:
//    - In a regular function (not a method), 'this' refers to the global object (non-strict mode) or undefined (strict mode).
//    - When called as a standalone function, not as a method, 'this' is not bound to the object.
//    - Example:
        function foo() { console.log(this); }
        foo(); // window (or undefined in strict mode)/

// 4. Arrow Functions:
//    - Arrow functions do NOT have their own 'this'.
//    - 'this' is lexically inherited from the surrounding (enclosing) scope.
//    - Useful for callbacks where you want to preserve the outer 'this'.
//    - Example:
       const objOne = {
         value: 42,
         method: function() {
           const arrow = () => this.value;
           return arrow();
         }
       };
       objOne.method(); // 42
//
// 5. Constructor Functions:
//    - When using 'new', 'this' refers to the newly created object.
//    - Example:
       function Person(name) { this.name = name; }
       const p = new Person('Bob');
       p.name; // 'Bob'
//
// 6. Event Handlers (DOM):
//    - In HTML event handlers, 'this' refers to the element that received the event.
        // HTML:
        // <button id="myBtn">Click me</button>

        // JavaScript:
        document.getElementById('myBtn').addEventListener('click', function() {
        console.log(this); // 'this' refers to the button element
        this.textContent = 'Clicked!'; // Changes the button text
        });
//
// 7. Explicit Binding:
//    - You can set 'this' explicitly using call(), apply(), or bind().
//    - Example:
       function greet() { console.log(this.name); }
       const user = { name: 'Sam' };
       greet.call(user); // 'Sam'
//
// Summary Table:
// | Context                | 'this' value                             |
// |------------------------|------------------------------------------|
// | Global (non-strict)    | global object (window)                   |
// | Global (strict)        | undefined                                |
// | Object method          | the object                               |
// | Standalone function    | global (non-strict) / undefined (strict) |
// | Arrow function         | inherited from outer scope               |
// | Constructor (new)      | new instance                             |
// | Event handler (DOM)    | element receiving event                  |
// | call/apply/bind        | explicitly set                           |