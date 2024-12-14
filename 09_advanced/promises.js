// JavaScript Promises: Beginner-Friendly Notes
// =============================================

/*
1. **What is a Promise?**
--------------------------------------------------
- A Promise is a special object in JavaScript used for handling **asynchronous operations**.
- It represents a **value** that may be available now, in the future, or never.

**Think of a Promise as a "commitment":**
- You (the code) promise to do something.
- The result will either be:
    1. Fulfilled (Success)
    2. Rejected (Failure)
    3. Pending (Still waiting)

**Why Use Promises?**
- To handle tasks that take time, like fetching data from an API, without blocking the rest of the program.

Example:
- Waiting for a pizza delivery:
    - Pending: The pizza is being prepared.
    - Fulfilled: Pizza delivered successfully.
    - Rejected: Delivery failed.
*/


/*
2. **States of a Promise**
--------------------------------------------------
A Promise can be in one of these three states:
1. **Pending**: The operation is still in progress.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

Example:
*/
const myPromise = new Promise((resolve, reject) => {
    let pizzaReady = true; // Change this to false to test rejection
    if (pizzaReady) {
        resolve("Pizza is delivered!"); // Fulfilled
    } else {
        reject("Pizza delivery failed!"); // Rejected
    }
});

console.log(myPromise); // Logs the Promise object


/*
3. **How to Use Promises**
--------------------------------------------------
- Use `.then()` to handle success (fulfilled state).
- Use `.catch()` to handle failure (rejected state).
- Use `.finally()` to run code after the Promise is settled (fulfilled or rejected).

Example:
*/
myPromise
    .then((message) => {
        console.log("Success:", message); // Runs if the Promise is fulfilled
    })
    .catch((error) => {
        console.error("Error:", error); // Runs if the Promise is rejected
    })
    .finally(() => {
        console.log("Promise operation complete."); // Always runs
    });


/*
4. **Creating a Promise**
--------------------------------------------------
Use the `Promise` constructor to create a new Promise.

Syntax:
    const promise = new Promise((resolve, reject) => {
        // Asynchronous task
        if (successCondition) resolve("Success message");
        else reject("Error message");
    });

Example:
*/
const fetchData = new Promise((resolve, reject) => {
    let dataReceived = true; // Simulate success or failure
    setTimeout(() => {
        if (dataReceived) {
            resolve("Data fetched successfully!"); // Fulfilled
        } else {
            reject("Failed to fetch data!"); // Rejected
        }
    }, 2000); // Simulates a delay of 2 seconds
});

fetchData
    .then((data) => console.log(data)) // Logs "Data fetched successfully!"
    .catch((error) => console.error(error)); // Logs "Failed to fetch data!" if rejected


/*
5. **Chaining Promises**
--------------------------------------------------
You can chain multiple `.then()` blocks for sequential asynchronous tasks.

Example:
*/
const getUser = new Promise((resolve, reject) => {
    setTimeout(() => resolve("User fetched!"), 1000);
});

getUser
    .then((message) => {
        console.log(message);
        return "Fetching user's posts..."; // Pass to the next `.then()`
    })
    .then((message) => {
        console.log(message);
        return "Fetching user's comments...";
    })
    .then((message) => {
        console.log(message); // Logs the final message
    })
    .catch((error) => console.error(error)); // Handles any errors in the chain


/*
6. **Async/Await: A Simpler Way to Handle Promises**
--------------------------------------------------
- `async` and `await` make it easier to work with Promises.
- `await` pauses the execution until the Promise resolves or rejects.

Example:
*/
async function fetchPizza() {
    try {
        const pizza = await myPromise; // Waits for the Promise to resolve
        console.log(pizza);
    } catch (error) {
        console.error(error); // Catches rejection
    } finally {
        console.log("Pizza request completed.");
    }
}

fetchPizza(); // Runs the function


/*
7. **Key Terms to Remember**
--------------------------------------------------
- **Promise**: Represents a value that will be available in the future.
- **resolve**: Function used to mark the Promise as fulfilled.
- **reject**: Function used to mark the Promise as rejected.
- **then()**: Runs when the Promise is fulfilled.
- **catch()**: Runs when the Promise is rejected.
- **finally()**: Runs regardless of whether the Promise is fulfilled or rejected.

*/


/*
8. **Advantages of Promises**
--------------------------------------------------
1. **Improves Readability**:
   - Promises make asynchronous code easier to read and maintain compared to nested callbacks.

2. **Avoids Callback Hell**:
   - Chaining `.then()` prevents deeply nested code, making it cleaner.

Example of Callback Hell:
*/
function getData(callback) {
    setTimeout(() => {
        callback("Data received!");
    }, 1000);
}

getData((response) => {
    console.log(response); // Callback within a callback can become hard to manage
});

/*
Replaced by Promises:
*/
fetchData.then((data) => console.log(data));


/*
9. **Practical Use Cases**
--------------------------------------------------
- Fetching data from an API
- Reading files asynchronously
- Delaying actions or animations
*/

