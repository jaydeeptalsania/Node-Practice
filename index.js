const express = require('express');
const app = express();
const PORT = 3001;

app.get('/',(req,res)=>{
  res.status(200).send("Hello from express");
});

app.listen(PORT,()=>{
   console.log(`Express is running on port:-${PORT}`);
});