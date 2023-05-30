const http = require('http');

const server = http.createServer((req,res)=>{
   res.end("Hello from new server");
});

server.listen(3001);