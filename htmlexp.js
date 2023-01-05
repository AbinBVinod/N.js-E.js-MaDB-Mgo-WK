const express = require('express');
const app = express();

app.get('',(req,res)=>{
    console.log("data send by me", req.query.name)
    res.send('<h1>welcome</h>,'+ req.query.name);
  });


app.get('/home',(req,res)=>{
  res.send(`<input type ="text" placeholder ="user name" />
  `);
  
});



app.get('/help',(req,res)=>{
    
    res.send({
        name:'abin',
        email:'abintest.com'
    });

  });


app.listen(4500);