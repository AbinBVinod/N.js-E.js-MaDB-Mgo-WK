const {MongoClinet} = require('mongodb');

const url = 'mongodb://localhost:27017';
const databaseName= 'MongoDb-test'
const mongo = new MongoClinet(url);

async function getData(){
    let result =  await mongo.connet();
         db = result.db('database')
      collection = db.collection('Db');
   let data = await (collection.find({})).toArray();
   console.log(data)
}
getData()

