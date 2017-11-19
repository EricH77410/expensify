import { setTimeout } from "timers";

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            name:'Rico',
            age: 47
        })
        //reject('this my error');
    },1500)
    
});

console.log('Calling promise')
promise.then((data)=>{
    console.log('1',data);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('This is my second promise')
        },1500)
        
    });
}).then((d)=>{
    console.log('does this run', d)
}).catch((err)=>{
    console.log("error : ", err)
})

console.log('finish calling')