
const fs = require('fs');

fs.readFile(__filename, function(err, data) {
    console.log('File read successfully');

});

const stream = fs.createReadStream(__filename);
stream.close();

stream.on("close",()=>{
    console.log("Stream closed");
});

setTimeout(function(){
    console.log('This is the first setTimeout callback');
})
setImmediate(function() {
    console.log('This is the first setImmediate callback');
});
new Promise(function(resolve, reject) {
    console.log('Promise executor function executed');
    resolve('Promise resolved');
}).then (function(result) {
    console.log(result);
});

console.log(4);

function test(){
    console.log('nextTick callback executed');
}

process.nextTick(test);

    

