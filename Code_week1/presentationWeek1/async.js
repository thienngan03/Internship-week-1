
//  Promises without async/await
 function myFunction() {
  return Promise.resolve("Hello world!!");
}
myFunction().then(function(result) {
  console.log(result);
});
// Async
async function myFunction2() {
  return "Hello world!!";
}
console.log("Async function result: " + myFunction2()); 
myFunction2().then(function(result) {
  console.log(result);
});

// Async/Await
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    resolve("Hello world!!");
  });
    let result = await myPromise; // Wait until the promise resolves
    console.log(result); 
}

myDisplay();
