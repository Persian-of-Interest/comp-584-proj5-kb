const http = require('http');
const { URL } = require('url');

// Get port from command-line arguments
const port = Number(process.argv[2]);

// Create HTTP server
const server = http.createServer((req, res) => {
    // Parse the request URL
    const reqUrl = new URL(req.url, `http://${req.headers.host}`);

    // ISO timestamp from query string
    const isoTime = reqUrl.searchParams.get('iso');
    if (!isoTime) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Missing iso query parameter' }));
    }

    const date = new Date(isoTime);
    let result;

    // Route based on pathname
    if (reqUrl.pathname === '/api/parsetime') {
        // Return hour, minute, second
        result = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
        };
    } else if (reqUrl.pathname === '/api/unixtime') {
        // Return unix time in milliseconds
        result = { unixtime: date.getTime() };
    } else {
        // Unknown path error
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Not found' }));
    }

    // Send JSON response
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
});

// Listen on provided port
server.listen(port);
