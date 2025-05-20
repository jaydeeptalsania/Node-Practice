const http = require('http');

const server = http.createServer((req,res)=>{
   res.end("Hello from new server 123");
});

server.listen(3001);
