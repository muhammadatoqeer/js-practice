// JavaScript fetch() Method - Exhaustive Guide

// 1. Basic Usage
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log('Basic fetch:', data))
  .catch(error => console.error('Error:', error));

// 2. Fetch with async/await
async function fetchPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const data = await response.json();
    console.log('Async/await fetch:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchPost();

// 3. Sending POST Request
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
})
  .then(response => response.json())
  .then(data => console.log('POST response:', data));

// 4. Custom Headers
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  headers: {
    'Authorization': 'Bearer your-token',
    'Accept': 'application/json',
  },
})
  .then(response => response.json())
  .then(data => console.log('Custom headers:', data));

// 5. Handling HTTP Errors
fetch('https://jsonplaceholder.typicode.com/404')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error! status: ' + response.status);
    }
    return response.json();
  })
  .then(data => console.log('Error handling:', data))
  .catch(error => console.error('Caught error:', error));

// 6. Fetching and Parsing Text
fetch('https://www.example.com')
  .then(response => response.text())
  .then(text => console.log('Text response:', text));

// 7. Fetching and Parsing Blob (e.g., images)
fetch('https://via.placeholder.com/150')
  .then(response => response.blob())
  .then(blob => {
    const imgURL = URL.createObjectURL(blob);
    console.log('Blob image URL:', imgURL);
    // You can set this URL as the src of an <img> element
  });

// 8. Fetching and Parsing FormData
const formData = new FormData();
formData.append('username', 'testuser');
fetch('https://httpbin.org/post', {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then(data => console.log('FormData POST:', data));

// 9. Setting Request Timeout (with AbortController)
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 seconds
fetch('https://jsonplaceholder.typicode.com/posts/1', { signal: controller.signal })
  .then(response => response.json())
  .then(data => console.log('With timeout:', data))
  .catch(error => {
    if (error.name === 'AbortError') {
      console.error('Fetch aborted due to timeout');
    } else {
      console.error('Other fetch error:', error);
    }
  })
  .finally(() => clearTimeout(timeoutId));

// 10. Fetching Multiple Resources in Parallel
Promise.all([
  fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()),
  fetch('https://jsonplaceholder.typicode.com/posts/2').then(res => res.json()),
]).then(([data1, data2]) => {
  console.log('Parallel fetch results:', data1, data2);
});

// 11. Downloading Files
fetch('https://via.placeholder.com/150')
  .then(response => response.blob())
  .then(blob => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'image.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

// 12. Uploading Files
// <input type="file" id="fileInput" />
document.getElementById('fileInput')?.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append('file', file);
  fetch('https://httpbin.org/post', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(data => console.log('File upload:', data));
});

// 13. Credentials (Cookies, HTTP Auth)
fetch('https://example.com/api', {
  credentials: 'include', // 'omit', 'same-origin', or 'include'
})
  .then(response => response.json())
  .then(data => console.log('With credentials:', data));

// 14. CORS (Cross-Origin Resource Sharing)
// If the server does not allow CORS, fetch will fail with a CORS error.
fetch('https://anotherdomain.com/api')
  .then(response => response.json())
  .then(data => console.log('CORS example:', data))
  .catch(error => console.error('CORS error:', error));

// 15. Streaming Response (ReadableStream)
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    const reader = response.body.getReader();
    return reader.read();
  })
  .then(({ done, value }) => {
    console.log('Streaming response chunk:', value);
  });

// 16. Handling Different Response Types
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Status:', response.status);
    console.log('Headers:', [...response.headers]);
    return response.json();
  })
  .then(data => console.log('Response data:', data));

// 17. Retrying Failed Requests
async function fetchWithRetry(url, options = {}, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error('HTTP error');
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
    }
  }
}
fetchWithRetry('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log('Retry fetch:', data))
  .catch(error => console.error('Retry failed:', error));

// 18. Notes and Best Practices
// - fetch() returns a Promise.
// - By default, fetch does NOT reject on HTTP error status (like 404 or 500); you must check response.ok.
// - Use response.json(), response.text(), response.blob(), etc., to parse the response body.
// - Use AbortController to cancel requests.
// - For older browsers, use a polyfill or fallback to XMLHttpRequest.
// - Always handle errors with .catch() or try/catch in async functions.
// - CORS errors are not catchable by JavaScript; they are enforced by the browser.
// - fetch() is supported in all modern browsers and Node.js (with node-fetch or native fetch in recent versions).