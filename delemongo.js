const dbConnect = require('./mongodb');

const deletedata = async()=>{
    let data = await dbConnect();
    let result = data.deleteOne({
        name: "abinwithd";
    })
    console.log(result);
    if(result.aknowledged){
        console.log("red dele")
    }
}
deletedata();
