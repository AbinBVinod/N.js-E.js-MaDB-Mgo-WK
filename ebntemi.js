const express = require(express);
const EventEmitter = require('events');

const app = express();


const event =EventEmitter();
let count = 0

event.on('count api',()=>{
    count++;
    console.log('evnt done',count)
})


app.get("/",(req,res)=>{
  res.send("api called")
  event.emit('count api')
});
app.get("/help",(req,res)=>{
    res.send("yo help me")
  });
  app.get("/about",(req,res)=>{
    res.send("see my about")
  });

app.listen(4000);