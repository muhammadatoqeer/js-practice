// XMLHttpRequest (XHR) Notes and Examples
// ========================================

/*
1. **What is XMLHttpRequest (XHR)?**
--------------------------------------------------
- `XMLHttpRequest` is a JavaScript object used to send HTTP requests to a server.
- It allows for fetching or sending data asynchronously without reloading the page.
- It's the foundation of AJAX (Asynchronous JavaScript and XML).

Syntax:
    const xhr = new XMLHttpRequest();

Key Methods:
- `open(method, url, async)`: Initializes the request.
- `send(body)`: Sends the request.
- `setRequestHeader(header, value)`: Sets HTTP headers for the request.
- `abort()`: Cancels the current request.

Key Properties:
- `responseText`: Contains the response data as a string.
- `status`: HTTP status code of the response (e.g., 200 for success).
- `statusText`: HTTP status message (e.g., "OK" for success).
- `readyState`: Represents the state of the request:
    0: UNSENT       - Request not initialized
    1: OPENED       - Connection established
    2: HEADERS_RECEIVED - Request received
    3: LOADING      - Processing request
    4: DONE         - Request finished and response is ready
*/

console.log("Starting XHR Examples...");

/*
2. **Example: GET Request**
--------------------------------------------------
- Fetches data from a server using the HTTP GET method.
*/
const xhrGET = new XMLHttpRequest();
xhrGET.open("GET", "https://jsonplaceholder.typicode.com/posts", true); // Open connection
xhrGET.onload = function () {
    if (xhrGET.status === 200) {
        console.log("GET Response:", JSON.parse(xhrGET.responseText)); // Parse JSON response
    } else {
        console.error("GET Error:", xhrGET.status, xhrGET.statusText);
    }
};
xhrGET.send(); // Send the request

/*
3. **Example: POST Request**
--------------------------------------------------
- Sends data to a server using the HTTP POST method.
- `setRequestHeader` is used to specify the content type.
*/
const xhrPOST = new XMLHttpRequest();
xhrPOST.open("POST", "https://jsonplaceholder.typicode.com/posts", true); // Open connection
xhrPOST.setRequestHeader("Content-Type", "application/json"); // Set content type
xhrPOST.onload = function () {
    if (xhrPOST.status === 201) {
        console.log("POST Response:", JSON.parse(xhrPOST.responseText));
    } else {
        console.error("POST Error:", xhrPOST.status, xhrPOST.statusText);
    }
};
xhrPOST.send(JSON.stringify({ title: "My Post", body: "This is a post.", userId: 1 })); // Send JSON data

/*
4. **Handling Errors**
--------------------------------------------------
- Use the `onerror` event to handle network errors.
- Check the `status` property for HTTP errors.
*/
const xhrError = new XMLHttpRequest();
xhrError.open("GET", "https://invalid.url", true); // Invalid URL to simulate error
xhrError.onload = function () {
    if (xhrError.status !== 200) {
        console.error("HTTP Error:", xhrError.status, xhrError.statusText);
    }
};
xhrError.onerror = function () {
    console.error("Network Error occurred.");
};
xhrError.send();

/*
5. **Aborting a Request**
--------------------------------------------------
- Use `abort()` to cancel a request if it's no longer needed.
*/
const xhrAbort = new XMLHttpRequest();
xhrAbort.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhrAbort.onload = function () {
    console.log("This will not log because the request is aborted.");
};
xhrAbort.send();
xhrAbort.abort(); // Abort the request
console.log("Request aborted.");

/*
6. **Using readyState**
--------------------------------------------------
- The `readystatechange` event fires every time the `readyState` changes.
*/
const xhrReadyState = new XMLHttpRequest();
xhrReadyState.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhrReadyState.onreadystatechange = function () {
    console.log("readyState:", xhrReadyState.readyState); // Logs each readyState change
    if (xhrReadyState.readyState === 4 && xhrReadyState.status === 200) {
        console.log("Response from readyState:", JSON.parse(xhrReadyState.responseText));
    }
};
xhrReadyState.send();

/*
7. **Comparison: XHR vs. Fetch**
--------------------------------------------------
- `XMLHttpRequest` requires more code and manual handling of Promises.
- `fetch()` provides a cleaner, Promise-based API.

Example with fetch (Equivalent to XHR GET Example):
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log("Fetch Response:", data))
    .catch(error => console.error("Fetch Error:", error));
*/

/*
8. **Key Points to Remember**
--------------------------------------------------
- XHR is asynchronous by default but can work synchronously by setting `async` to `false` in `open()`. (Not recommended as it blocks the UI.)
- Always handle errors and check `status` for success or failure.
- XHR is still widely used in legacy systems but is being replaced by the modern Fetch API.

*/
console.log("XHR Examples Completed!");
