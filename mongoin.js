const dbConnect = require('./mongodb');

const insert =async ()=>{
    const db= await dbConnect();
    const  result = db.insert(
        [{name:'abin',no: '69' }
    ]
    ) 

    if(result.acknowledged)
    {
        console.log('data inserted')
    }
}
 
insert();