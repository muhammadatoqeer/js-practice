// async function fetchPost() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
// fetchPost();

const pendingPromise = new Promise(() => {});
console.log("Pending:", pendingPromise); // State: pending

const fulfilledPromise = Promise.resolve("Task completed!");
fulfilledPromise.then(result => console.log("Fulfilled:", result));
console.log("Fulfilled (immediate):", fulfilledPromise); // State: fulfilled (may show as pending if not settled yet)