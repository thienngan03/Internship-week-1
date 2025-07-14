// Cartesian product of two arrays
var Cartesian =function(arr1,arr2){
    let rs =[];
    for(let i =0;i<arr1.length;i++){
        for(let j = 0;j<arr2.length;j++){
            let product = [];
            product.push(arr1[i]);
            product.push(arr2[j]);
            rs.push(product);
        }
    }
    return rs;
}
console.log(Cartesian([1,2,3],[4,5,6]));
// Climbing Stairs Problem
// Tower of Hanoi Problem
