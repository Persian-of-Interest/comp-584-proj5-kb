const http = require('http');
const map = require('through2-map');

// Get port from command-line arguments
const port = Number(process.argv[2]);

// Create HTTP server
const server = http.createServer((req, res) => {
    // Only handle POST requests
    if (req.method === 'POST') {
        // Pipe the request stream through a transform stream
        req
        .pipe(
            map((chunk) => {
            // Convert chunk to string and uppercase it
            return chunk.toString().toUpperCase();
            })
        )
        .pipe(res); // Pipe the transformed data to response
    } else {
        // For other request methods, return 405 Method Not Allowed
        res.statusCode = 405;
        res.end('Method not allowed');
    }
});

// Start server on the given port
server.listen(port);
