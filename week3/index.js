const http = require('http');
let state = 10;

//create a server

http.createServer(function (req, res) {

    if (req.url === '/') {
        res.write(state, 'My first http server!');
    } if (req.url === '/add') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(state++);
    }
    if (req.url === '/revome') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(state--);
    }
    if (req.url === '/reset') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        state = 10;
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("Error 404 : Not found.");
    }
    res.end();

}).listen(8080, function () {
    console.log('Our server is working on port 8080 !!!');
});