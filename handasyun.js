
let a = 10;
let b= 0;

//console.log("start")


let waitingData =  new Promise((resolve,reject)=>{
                setTimeout(()=>{
    resolve(30)
 },2000)
})
waitingData.then((b)=>{
    console.log(a+b)
})
