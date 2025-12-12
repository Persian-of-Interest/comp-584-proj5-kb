const http = require('http');
const bl = require('bl');

// Get the three URLs from command-line arguments
const urls = process.argv.slice(2);

// Array to store results in order
const results = [];
// Counter to track how many requests have finished
let count = 0;

// Function to make HTTP GET request for a given URL at a specific index
function httpGet(index) {
  http.get(urls[index], (res) => {
    // Collect all data from this response
    res.pipe(bl((err, data) => {
      if (err) return console.error(err);

      // Store the complete response string in the correct index
      results[index] = data.toString();

      // Increment the finished counter
      count++;

      // If all requests are done, print them in order
      if (count === urls.length) {
        results.forEach((item) => console.log(item));
      }
    }));
  }).on('error', (err) => {
    console.error(err);
  });
}

// Launch HTTP GET request for each URL
for (let i = 0; i < urls.length; i++) {
  httpGet(i);
}
