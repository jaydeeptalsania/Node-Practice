const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/html_files/index.html`);
});

app.get('/contact',(req,res)=>{
   res.sendFile(`${__dirname}/html_files/contact.html`);
});

app.listen('3003');