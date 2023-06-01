console.log('start');
const promise = new Promise((resolve,reject)=>{
   setTimeout(function(){
    resolve(20);
    console.log('middle');
   },1000);
   
});

console.log('before');
promise.then((data)=>{
   console.log(data);
});
console.log('after');