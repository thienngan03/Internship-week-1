// Example 1
// var myDisplayer = function(some) {
//     console.log(some);
// }
// var calculate = function(num1, num2, myCallback) {
//     var sum = num1 + num2;
//     return sum;
// }
// let result = calculate(5, 10);
// myDisplayer(result); 
// Example 2
// var myDisplayer = function(some) {
//     console.log(some);
// }
// var calculate = function(num1, num2, myCallback) {
//     var sum = num1 + num2;
//     myCallback(sum);
// }
// let result = calculate(5, 10, myDisplayer);

// Example 3
// const arr = [1, 2, 3, 4, 5,-2,-3,-4,-5];
// var removeNegative = function(arr, callback) {
//     let rs=[];
//     for(const i of arr){
//         if(callback(i)){
//             rs.push(i);
//         }
//     }
//     return rs;
// }
// const isPositive = removeNegative(arr, (num) => num>0);
// console.log(isPositive); // [1, 2, 3, 4, 5]
