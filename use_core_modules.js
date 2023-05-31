const http = require('http');

const server = http.createServer((req,res)=>{
   res.writeHead(200,{'Content-Type': 'text/javascript','demo':'test'});
   res.end('Hello from my server again');
});

server.listen('3001',()=>{
   console.log("The app is running on port 3001");
});