const express = require('express');
const app = express();

app.get('',(req,res)=>{
    console.log("data send by me", req.query.name)
    res.send('welcome,'+ req.query.name);
  });


app.get('/home',(req,res)=>{
  res.send('get rick rolled');
});


app.listen(4500);
  