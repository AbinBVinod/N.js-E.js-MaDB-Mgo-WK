const express = require(express);
const app =express();

const reqfilter=(req,res,next)=>{
    // console.log('reqfiltrer');
    if(req.query.age)
    {
        res.send('agge')
    } 
    else{
        next();
    }
     
}
app.use(reqfilter)

app.get('/',(req,res)=>{

res.send('welcome')


})
app.get('/users',(req,res)=>{

    res.send('welcome to users page')
    
    
    })


app.listen(4500);