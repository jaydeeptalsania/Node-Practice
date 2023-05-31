const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
   res.writeHead(200,{'Content-Type': 'text/javascript','demo':'test'});
   res.end('Hello from my server again');
});

server.listen('3001',()=>{
   console.log("The app is running on port 3001");
});

/*const data = "Hello this is a demo file";
fs.writeFileSync('demo.txt',data);*/

const fileData = fs.readFileSync('demo.txt','utf-8');
console.log(fileData);