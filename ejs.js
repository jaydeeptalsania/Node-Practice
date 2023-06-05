const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
   const person = {
     name:'Jaydeep',
     age:33,
     city:'Gandhinagar',
     hobbies:['sports','reading','music']
   }
   res.render('index',{person});
});

app.listen('3000');