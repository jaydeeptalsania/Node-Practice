const http = require('http');

const server = http.createServer((req,res)=>{
   res.end("Hello from new server 3310");
});

server.listen(3001);
