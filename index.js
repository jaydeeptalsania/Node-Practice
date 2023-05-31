const http = require('http');  // starter file 

const server = http.createServer((req,res)=>{
   res.end("Hello from new server");
});

server.listen(3001);