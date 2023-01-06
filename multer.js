const express = require ('express');
const multer = require('multer')
const app = express();


const upload = multar({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.filename+"-"+Date.now()+ ".png")
        }
    })
}).single("user_file")

app.post("/upload",(req,res)=>{
            
    res.send('file uplaod')

 
});
app.listen(400);