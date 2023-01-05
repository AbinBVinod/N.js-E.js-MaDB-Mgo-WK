const fs = require('fs');
const path = require('path');

const dirpath =path.join(__dirname,'files');


//for(i=0; i < 5; i++){
 //   fs.writeFileSync(dirpath+"test"+i+"txt","text file");
    
//}

fs.readdir(dirpath,(err,files)=>){
    files.forEach((iteam)=>{
           console.lot(item)
    })
}
