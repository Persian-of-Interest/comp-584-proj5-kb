const http = require('http');

// URL comes from the first command-line argument
const url = process.argv[2];

// Perform HTTP GET request
http.get(url, (response) => {

  // Ensures we get strings
  response.setEncoding('utf8');

  // Logs data every time a chunk of data arrives
  response.on('data', (data) => {
    console.log(data);
  });

  // Handle any errors from the response stream
  response.on('error', (err) => {
    console.error('Response error:', err);
  });

}).on('error', (err) => {
  // Handle errors from get request
  console.error('Request error:', err);
});
