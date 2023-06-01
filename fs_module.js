const fs = require('fs');
//console.log(`${__dirname}`); // to display current directory path


//=======================================  read file in ASYNC mode ================================
console.log('start reding file1...');
fs.readFile('demo.txt','utf-8',(err,data)=>{
   if(err) 'File not found';
   //console.log(data);
});
console.log('end reading file1...');

// ======================================== read file in SYNC mode ==================================
 console.log('start reading file2...');
 const fileData = fs.readFileSync('demo.txt','utf-8');
 console.log(fileData);
 console.log('end reading file2...');

