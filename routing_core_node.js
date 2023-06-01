const http = require('http');

const server = http.createServer((req, res) => {
    const path = req.url;
    if (path == '/') {

        res.statusCode = '200';
        res.setHeader("Content-type", "application/json");
        res.end('This is home page');

    } else if (path == '/about') {

        res.writeHead(200, { 'Test': 'demo' });
        res.end('This is about page');

    } else if (path == '/contact') {

        res.writeHead(302, { 'abc': 'xyz' });
        res.end(JSON.stringify({ pagename: 'contact us' }));

    } else {

        res.statusCode = '404';
        res.setHeader("demo2", "test2");
        res.end('Page not found');

    }
});

server.listen('3001', () => {
    console.log('App is running on port 3001');
});