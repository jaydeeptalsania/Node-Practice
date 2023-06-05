const express = require('express');
const app = express();
const port = 3002;

app.get('/',(req,res)=>{
    res.send('Basic express routing');
});

app.get('/user',(req,res)=>{
    console.log(req.query.name , req.query.city); // send query parameters with url , for ex:- localhost::3002?name=jay&city=gandhinagar
    res.send({
       name:req.query.name,
       city:req.query.city
    });
});

app.get('/help',(req,res)=>{     // send HTML as response
   res.send(
    `<h1>Hello , How can I help you?</h1>
     <p>you can visit our FAQs page</p>
    `
   )
});

app.listen(port,()=>{
    console.log(`Running on port :- ${port}`);
});

