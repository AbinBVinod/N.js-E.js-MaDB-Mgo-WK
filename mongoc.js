const { MongoClinet } = require('mongodb');

const url = 'mongodb://localhost:27017';
const databaseName = 'MongoDb-test'
const mongo = new MongoClinet(url);

async function dbConnect() {
    let result = await mongo.connet();
    db = result.db(databaseName);
    return = db.collection('Db');
    //let data = await (collection.find({})).toArray();
    //  console.log(data)
}


//dbConnect().then((res) => {
  //  res.find({ name: 'abin' }).toArray().then((data) => {
    //    console.log(data);
    //})
//})

const  main = async()=>{
    let data = await db.dbConnect();
    data = data.find();
    console.warn(data);
}

main();