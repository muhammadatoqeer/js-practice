/* 

An API (Application Programming Interface) is like a messenger that allows two software applications to talk to each other.

Imagine you’re at a restaurant:

-You (the user) order food from a menu.
-The waiter (API) takes your request to the kitchen (the system).
-The kitchen prepares the food and gives it to the waiter.
-The waiter then brings the food (the response) back to you.
-Similarly, an API lets one software (like your app or website) request information or services from another system (like a database, a server, or another app), and the API delivers the response back.


What is JSON?
JSON (JavaScript Object Notation) is a lightweight format used for storing and exchanging data. It is easy for humans to read and write, and easy for machines to parse and generate. JSON is often used to send data between a server and a web application, and it represents data as key-value pairs.

Example of JSON:

{
    "name": "John",
    "age": 30,
    "isStudent": false,
    "courses": ["Math", "Science"]
}

The keys are always strings, and the values can be strings, numbers, arrays, booleans, or other objects.

It’s language-independent, meaning it can be used in any programming language.


How JSON is Related to APIs:
When APIs are used to communicate between systems (like a client and a server), JSON is often the format used to exchange data.

In a typical API request, your application (client) sends a request to a server.
The server processes the request and responds with data in the form of JSON.

Example API Request and JSON Response
Client Request:
You ask for the weather in a specific city through an API.
Server Response (in JSON)
{
    "city": "New York",
    "temperature": 25,
    "description": "Clear sky"
  }

*/
