const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send('welcome to abin  ');
  });


app.get('/home',(req,res)=>{
  res.send('get rick rolled');
});


app.listen(4500);

