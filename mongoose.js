const { default: mongoose } = require("mongoose");

//const mongoose =require(mongoose);

const main = async()=>{
    await mongoose.connect("mongodb://localhost:27017/MongoDb-test")
    const DbSch = new mongoose.Schema({
         name :String
    });
    const Dbmodel= mongoose.model('Db',DbSch);
    let data = new Dbmodel({name:'69'});
    let result = await data.save();
    console.log(result)

}
main()