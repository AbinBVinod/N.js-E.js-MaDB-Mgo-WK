const dbConnect = require('./mongodb');


const updatedata=async ()=>{
       let data = await  dbConnect();
       let result = await data.updateOne({
          $set: {name:'abinwithd'}
       });
       console.log(result)


}
updatedata();