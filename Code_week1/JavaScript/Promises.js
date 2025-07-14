// Example 1
// let p = new Promise((resolve, reject) => {
//     reject("Error occurred");
//     resolve("Success!");
// });

// p.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Promise completed");
// });
// example 2:


let p = new Promise((res,rej)=>{
    let x = Math.random(); // Random number between 0 and 1
    if(x>0){
        res("Success!"+x);
    } else {
        rej("Error occurred");
    }
});
p.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Promise completed");
});