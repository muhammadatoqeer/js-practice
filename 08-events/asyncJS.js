// Understanding Synchronous and Asynchronous JavaScript
// ===============================================================

/*
1. **What is Synchronous JavaScript?**
--------------------------------------------------
- JavaScript executes code **line by line** in the order it is written.
- Each operation **waits for the previous one to complete** before moving to the next. also known as 'blocking execution'

Example:
*/
console.log("Start");  // Executes first
console.log("Middle"); // Executes second
console.log("End");    // Executes third

/*
Output:
Start
Middle
End
*/

/*
**Explanation**:
- This is synchronous behavior: each statement is executed one after the other.
- If one line takes a long time to execute, the entire program waits (blocks) until it completes.
*/


/*
2. **What is Asynchronous JavaScript?**
--------------------------------------------------
- Asynchronous code allows **non-blocking** execution.
- It means JavaScript can start an operation and move to the next task without waiting for it to finish.
- Asynchronous operations (like fetching data) run in the background and notify the main thread when they are complete.

Example:
*/
console.log("Start");  // Executes first

setTimeout(() => {
    console.log("Async Task Complete");  // Executes after a delay
}, 2000);  // 2 seconds delay

console.log("End");  // Executes second, even though the async task is still running

/*
Output:
Start
End
Async Task Complete
*/

/*
**Explanation**:
- The `setTimeout` function runs asynchronously, allowing "End" to print before "Async Task Complete."
- The asynchronous operation does not block the execution of the next statement.
*/


/*
3. **Why Asynchronous Code is Important?**
--------------------------------------------------
- Asynchronous programming is essential for tasks that take time to complete, like:
    - Fetching data from a server (API calls)
    - Reading files
    - Animations
    - Timers
- It ensures the UI remains responsive while waiting for these tasks to finish.
*/


/*
4. **Common Asynchronous Functions in JavaScript**
--------------------------------------------------
- **setTimeout()**: Executes a function after a specified delay.
- **setInterval()**: Repeats a function at specified intervals.
- **Promises**: Represents a value that may be available in the future.
- **async/await**: Simplifies working with Promises.
- **Fetch API**: Used to make HTTP requests.

Example with Fetch API:
*/
console.log("Fetching data...");
fetch("https://api.example.com/data")
    .then((response) => response.json())  // Handles the resolved Promise
    .then((data) => console.log(data))    // Logs the fetched data
    .catch((error) => console.error(error));  // Handles errors

console.log("Waiting for data...");

/*
Output:
Fetching data...
Waiting for data...
<The fetched data or an error>
*/


/*
5. **The Event Loop**
--------------------------------------------------
- The Event Loop is what makes JavaScript asynchronous.
- It ensures non-blocking execution by managing tasks in the following order:
    - Synchronous code is executed first (Main Thread).
    - Asynchronous tasks (like timers, fetch calls) are moved to the task queue.
    - When the main thread is free, the Event Loop picks tasks from the queue and executes them.

Visualizing the Event Loop:
1. JavaScript starts executing synchronous code.
2. When it encounters asynchronous tasks (e.g., setTimeout), they are sent to the task queue.
3. Once the main thread completes its current tasks, it processes tasks from the queue.
*/


/*
6. **Understanding Promises**
--------------------------------------------------
- A Promise represents a value that will be available in the future.
- A Promise can have one of three states:
    - **Pending**: The initial state (waiting for the result).
    - **Fulfilled**: The operation completed successfully.
    - **Rejected**: The operation failed.

Syntax:
    const promise = new Promise((resolve, reject) => {
        // Asynchronous task
        if (success) {
            resolve("Task completed!");
        } else {
            reject("Task failed!");
        }
    });

- Use `.then()` to handle success and `.catch()` for errors.

Example:
*/
const promise = new Promise((resolve, reject) => {
    const success = true;  // Simulating success
    setTimeout(() => {
        if (success) resolve("Promise resolved!");
        else reject("Promise rejected!");
    }, 2000);
});

promise
    .then((result) => console.log(result))  // Output after 2 seconds: "Promise resolved!"
    .catch((error) => console.error(error));  // Handles rejection

/*
7. **Simplifying Promises with async/await**
--------------------------------------------------
- `async` functions make asynchronous code look synchronous.
- Use `await` to pause the execution until the Promise resolves or rejects.

Example:
*/
async function fetchData() {
    try {
        console.log("Fetching data...");
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);  // Logs the fetched data
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();

/*
Output:
Fetching data...
<Data fetched from the server or error>
*/


/*
8. **Callback Functions in Asynchronous JavaScript**
--------------------------------------------------
- A **callback function** is a function passed as an argument to another function, to be executed later.

Example with setTimeout:
*/
console.log("Start");
setTimeout(() => {
    console.log("Callback executed!");
}, 1000);
console.log("End");

/*
Output:
Start
End
Callback executed!
*/


/*
9. **Key Differences Between Synchronous and Asynchronous JavaScript**
--------------------------------------------------
Synchronous:
- Executes one task at a time in order.
- Blocks further execution until the current task is complete.
- Suitable for quick operations (e.g., calculations).

Asynchronous:
- Allows non-blocking execution.
- Runs time-consuming tasks (e.g., API calls) in the background.
- Suitable for tasks requiring external data or delays.
*/


/*
10. **Key Concepts for Beginners**
--------------------------------------------------
- JavaScript is **single-threaded**: It can only execute one task at a time.
- Asynchronous code is managed using the Event Loop, ensuring the browser remains responsive.
- Promises and async/await simplify working with asynchronous tasks.
*/

