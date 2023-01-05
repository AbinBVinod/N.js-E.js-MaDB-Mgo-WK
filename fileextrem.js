const express = require('express');
const path = require('path');

const app = express();
const publicpath=path.join(__dirname,'public')

//app.use(express.static(publicpath));

app.get('',(_,res)=>{

 res.sendfile(`${publicpath}/about.html`)

})

app.listen(40000);