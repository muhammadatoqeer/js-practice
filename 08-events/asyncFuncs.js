// JavaScript Async Functions: setTimeout, clearTimeout, setInterval, clearInterval
// ================================================================================

/*
1. **setTimeout**
--------------------------------------------------
- Executes a callback function after a specified delay.
- Useful for scheduling tasks or delaying execution.

Syntax:
    let timeoutID = setTimeout(callback, delay, param1, param2, ...);

Parameters:
- `callback`: The function to execute after the delay.
- `delay`: Time in milliseconds to wait before execution (default is `0`).
- `param1, param2, ...`: Arguments passed to the callback when executed.

Returns:
- A unique `timeoutID` to reference the timeout, which can be cleared using `clearTimeout`.

Example:
*/
function greet(name) {
    console.log(`Hello, ${name}!`);
}
let timeoutID = setTimeout(greet, 2000, "Alice"); // Executes after 2 seconds

/*
2. **clearTimeout**
--------------------------------------------------
- Cancels a timeout created by `setTimeout`.
- Prevents the callback function from being executed.

Syntax:
    clearTimeout(timeoutID);

Parameters:
- `timeoutID`: The identifier returned by `setTimeout`.

Example:
*/
let cancelTimeoutID = setTimeout(() => console.log("This won't run"), 3000);
clearTimeout(cancelTimeoutID); // Cancels the timeout before it executes

/*
3. **setInterval**
--------------------------------------------------
- Executes a callback function repeatedly at specified intervals.
- Useful for tasks like updating UI elements or polling servers.

Syntax:
    let intervalID = setInterval(callback, interval, param1, param2, ...);

Parameters:
- `callback`: The function to execute at each interval.
- `interval`: Time in milliseconds between executions.
- `param1, param2, ...`: Arguments passed to the callback.

Returns:
- A unique `intervalID` to reference the interval, which can be cleared using `clearInterval`.

Example:
*/
function showTime() {
    console.log(new Date().toLocaleTimeString());
}
let intervalID = setInterval(showTime, 1000); // Executes every second

/*
4. **clearInterval**
--------------------------------------------------
- Stops an interval created by `setInterval`.
- Prevents further execution of the callback.

Syntax:
    clearInterval(intervalID);

Parameters:
- `intervalID`: The identifier returned by `setInterval`.

Example:
*/
setTimeout(() => clearInterval(intervalID), 5000); // Stops the interval after 5 seconds

/*
5. **Practical Examples**
--------------------------------------------------
A. Countdown Using setTimeout:
*/
let counter = 5;

function countdown() {
    if (counter > 0) {
        console.log(counter);
        counter--;
        setTimeout(countdown, 1000); // Calls itself with a 1-second delay
    } else {
        console.log("Time's up!");
    }
}
countdown();

/*
B. Real-Time Clock Using setInterval:
*/
function showClock() {
    console.log(new Date().toLocaleTimeString());
}
let clockID = setInterval(showClock, 1000); // Updates every second
setTimeout(() => clearInterval(clockID), 10000); // Stops after 10 seconds

/*
C. Stopping a Timeout:
*/
let messageID = setTimeout(() => console.log("This message will not appear"), 3000);
clearTimeout(messageID); // Cancels the timeout

/*
D. Stopping an Interval:
*/
let counterInterval = 0;
let intervalIDCounter = setInterval(() => {
    console.log(`Count: ${++counterInterval}`);
    if (counterInterval === 5) clearInterval(intervalIDCounter); // Stops after 5 iterations
}, 1000);

/*
6. **Relationship with Callbacks and Handlers**
--------------------------------------------------
- The `callback` in both `setTimeout` and `setInterval` is the function executed after the delay or at each interval.
- These functions can also serve as event handlers for tasks like updating UI, logging data, or triggering actions.

Example with Callback:
*/
setTimeout(() => console.log("Timeout Callback"), 2000); // Executes after 2 seconds
setInterval(() => console.log("Interval Callback"), 3000); // Executes every 3 seconds

/*
7. **Comparison Table: setTimeout vs. setInterval**
--------------------------------------------------
| Feature             | setTimeout                         | setInterval                           |
|---------------------|-------------------------------------|---------------------------------------|
| **Purpose**         | Executes a callback once.          | Executes a callback repeatedly.       |
| **Return Value**    | A unique `timeoutID`.              | A unique `intervalID`.                |
| **Stopping Method** | clearTimeout(timeoutID).           | clearInterval(intervalID).            |
| **Example**         | setTimeout(() => {...}, 1000);     | setInterval(() => {...}, 1000);       |
*/

