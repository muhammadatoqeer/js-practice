/*

==================== What is an API ===================

An API (Application Programming Interface) is like a messenger that helps two different apps or systems talk to each other.

Imagine you’re at a restaurant:

You (the user) look at the menu (the options available).
The waiter (the API) takes your order to the kitchen (the system) and brings your food back to you.
In the same way, an API takes your request, gets the information from another system, and gives it back to you.

For example:

When you use a weather app, the app asks the weather service’s API for the latest weather.
The API sends back the data, and the app shows it to you.
It’s just a way for programs to share data and talk to each other!

==================== Why do we need an API? ===================

We need APIs because they make it easy for different apps, websites, or systems to work together without knowing all the details about how each one works. Think of it like a translator between systems.

Why APIs are useful:
Share Information: APIs let one app get data or services from another. For example:

        A weather app gets weather info from a weather service’s API.
        A payment app talks to a bank’s API to transfer money.


Save Time: APIs let developers reuse existing features instead of building everything from scratch. For example:

Google Maps API lets you add a map to your website without making your own map app.
Secure Communication: APIs only share the data you ask for, not everything about the system. This keeps things secure and controlled.

Without APIs, apps would be like people speaking different languages with no translator!

==================== How is data communicated between apps? ===================

The data between apps is communicated using requests and responses, usually over the internet. Here's how it works:

Step-by-Step Communication:
The Request:

One app (the client) asks the API for information or to do something.
This is like you ordering food at a restaurant: "I want a pizza!"
Example:

The weather app sends a request to a weather API: "Give me the weather in Lahore."
The Response:

The API gets the request, processes it, and sends back a response.
This is like the kitchen (the system) preparing your pizza and the waiter bringing it back to you.
Example:

The weather API responds with: "The temperature in Lahore is 25°C and sunny."
How the Data Looks:
The request and response usually happen in a format both apps understand, like JSON (easy for computers and humans to read).
Example JSON response from a weather API:



{
    "city": "Lahore",
        "temperature": 25,
            "condition": "Sunny"
};


Communication Methods:
HTTP/HTTPS:

Just like websites, APIs use the internet to send data.
Common methods:
GET: "Give me data."
POST: "Send new data or do something."
PUT: "Update existing data."
DELETE: "Remove data."
Endpoints:

APIs have specific URLs (endpoints) for different tasks.
Example:
https://api.weather.com/getWeather?city=Lahore
In simple terms, apps talk to each other by sending requests and getting responses over the internet, just like ordering food and receiving it at a restaurant! 😊


=========================== how to get data from an api in javascript? ===================
Step-by-Step: Getting Data with fetch
Make a Request:

Use fetch to send a request to the API’s URL (called an endpoint).

e.g. fetch('https://api.example.com/data')

Handle the Response:

APIs often respond with JSON (data format). Use .json() to parse the response.
Use the Data:

Once you have the data, use it in your app (e.g., display it in the UI).


EXAMPLE 

// 1. API endpoint
const apiUrl = 'https://api.example.com/data';

// 2. Fetch data
fetch(apiUrl)
  .then(response => response.json()) // Parse the JSON data
  .then(data => {
    console.log(data); // 3. Use the data (e.g., log it or display it)
  })
  .catch(error => {
    console.error('Error fetching data:', error); // Handle errors
  });

  What Happens Here:
fetch(apiUrl): Sends a request to the API endpoint.
.then(response => response.json()):
Waits for the API’s response.
Converts the response into a JavaScript object (JSON).
.then(data => { ... }):
Processes the data you got from the API.
.catch(error => { ... }):
Handles any errors (e.g., if the API is down or you have the wrong URL).
Example with a Public API (Random Dog Image):

const apiUrl = 'https://dog.ceo/api/breeds/image/random';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data.message); // Logs the URL of a random dog image
  })
  .catch(error => console.error('Error fetching dog image:', error));



Display the Data in the UI:
Here’s how you might use the fetched data to update your webpage:

const apiUrl = 'https://dog.ceo/api/breeds/image/random';
const imgElement = document.getElementById('dogImage');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    imgElement.src = data.message; // Set the image source to the dog image URL
  })
  .catch(error => console.error('Error fetching dog image:', error));

HTML: <img id="dogImage" alt="Random Dog">

===========================  HTTP and HTTPS, the request response thing and how it is linked to APIs ======================
*/

