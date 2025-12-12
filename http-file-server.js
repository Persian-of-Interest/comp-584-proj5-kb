const http = require('http');
const fs = require('fs');

// Get port and file path from command-line
const port = Number(process.argv[2]);
const filePath = process.argv[3];

// Create HTTP server
const server = http.createServer((req, res) => {
    // Create read stream for file
    const stream = fs.createReadStream(filePath);

    // Pipe file stream directly to HTTP response
    stream.pipe(res);

    // Error handling
    stream.on('error', (err) => {
        res.statusCode = 500;
        res.end('Server Error');
        console.error(err);
    });
});

// Start listening on given port
server.listen(port);
