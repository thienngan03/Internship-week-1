// Linear search
var searchArr =function(arr,n){
    for(let i=0; i<arr.length;i++){
        if (arr[i]==n){
            return i;
        }
    }
    return -1
}
// Binary search
var searchArr =function(arr,n){
    let end = arr.length-1;
    let start=0   
    while(start <= end){
        let mid = Math.floor((end+start)/2)
        if(arr[mid]==n){
            return mid;
        }
        if(arr[mid]>n){
            end = mid-1;
        } else {
            start = mid+1;
        }
    }
    return -1;

}
var searchArr2 =function(arr,n){
    return search(arr,n,0,arr.length-1)
}
var search = function(arr,n,left, right){

    if(left > right){
        return -1;
    } else{
        let mid = Math.floor((left + right) / 2);
        if(arr[mid]===n){
            return mid;
        }
        if(arr[mid]>n){
        return search(arr,n,left,mid-1);
        } else {
            return search(arr,n,mid+1,right);
        }
    }
}
