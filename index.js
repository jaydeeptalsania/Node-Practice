const http = require('http');

const server = http.createServer((req,res)=>{
   res.end("Hello from new server 456");
});

server.listen(3001);
