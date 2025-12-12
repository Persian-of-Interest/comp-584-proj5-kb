const http = require('http');
const bl = require('bl');

http.get(process.argv[2], (res) => {
    // Collect all chunks into a single buffer
    res.pipe(bl((err, data) => {
        if (err) return console.error(err);

        const text = data.toString(); // convert to string
        console.log(text.length);
        console.log(text);
    }));
}).on('error', (err) => {
    console.error(err);
});
