
// ts : import http from 'http';
const http = require('http'); // http package in node.js
const url = require('url'); // url package in node.js
const host = 'localhost'; // localhost=127.0.0.1, loopback=virtual ethernet name, loopback value=00:00:00:00:00:00
const port = 3000;

// create web server
// return {...}
const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;

    if (path == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Home Page<h1/>');
    } else if (path == '/post') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Post Page<h1/>');
    } else if (path == '/profile') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Profile Page<h1/>');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Page Not Found<h1/>');
    }
});

// Socket listening -> localhost(127.0.0.1)로 들어오는 3000 port 오픈 
server.listen(port, host, () => { 
    console.log('Sever running on http://localhost:3000');
}); 