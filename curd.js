const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'curd');

const filepath = `${dirpath}/asda.txt`;

//fs.writeFileSync(filepath,'this is test');

//create
//fs.readFile(filepath,'utf8',(err,item)=>{
//console.log(item)
//})

//add
//fs.appendFile(filepath, ' and file is testing stage',(err)=>{
    //if(!err) console.log("file updated")
//})

//rename
//fs.rename(filepath,`${dirpath}/shheesh.txt`,(err)=>{
  //if(!err) console.log("file name updated")
//})

//delete

fs.unlinkSync(`${dirpath}/shheesh.txt`)