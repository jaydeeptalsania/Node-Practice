const express = require('express');
const app = express();
const port = 3002;

app.get('/',(req,res)=>{
    res.send('Basic express routing');
});

app.listen(port,()=>{
    console.log(`Running on port :- ${port}`);
});

