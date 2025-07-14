//   Fibonacci sequence

var fibonacci = function(n) {
    if(n <=1){
        return n;
    } 
    rs =[0,1];
    for(let i=2;i<n;i++){
        rs.push(rs[i-1]+rs[i-2]);
    }
    return rs;
}
var fibonacci2 = function(n) {
    if(n<2){
        return n;
    }
    return fibonacci2(n-1) + fibonacci2(n-2);
}

//   Factorial
var factorial = function(n){
    if(n==0 || n==1){
        return 1;
    }
    let rs=1;
    for(let i=2; i<=n;i++){
        rs *=i;
    }
    return rs;
}
var factorial2 = function(n){
    if(n===0){
        return 1;
    }
    return n*factorial2(n-1);
}

//  Prime number
var primeNumber = function(n){
    for(let i =2; i<Math.sqrt(n);i++){
        if(n%i===0){
            return false
        }
    }
    return true;
}

// Power of two
var powerOfTwo = function(n){

    while(n>1){
        n=n/2;
    }
    if(n==1){
        return true;
    }
    return false;
}
var powerOfTwo2 = function(n){
    return (n > 0) && (n & (n - 1)) === 0; //use bitwise operation
}



