// bubble sort O(n^2) time complexity, O(1) space complexity
// swap two near elements if they are in the wrong order
// repeat until no swaps are needed
var bubbleSort = function(arr){
    let swap = true;
    while(swap){
        var check = false;
        for(let i =0;i<arr.length-1;i++){

            if(arr[i]>arr[i+1]){
                let cur = arr[i];
                arr[i]= arr[i+1];
                arr[i+1]= cur;
                check = true;

            }
        }
        swap = check;
    }
    return arr;
}

// insertion sort O(n^2) time complexity, O(1) space complexity
// take one element at a time and insert it into the correct position 
// in the sorted part of

var insertionSort = function(arr){
    for(let i = 1;i<arr.length;i++){
        let num = arr[i];
        let j=i-1;
        while(j>=0 && num<arr[j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = num;
    }
    return arr;
}

// quick sort O(n log n) time complexity, O(log n) space complexity
// choose a pivot and partition the array into two parts:
// elements less than the pivot and elements greater than the pivot
// recursively sort the two parts
var quickSort = function(arr){
    let pivot = arr[arr.length-1];
    let left=[];
    let right =[];
    if(arr.length<2){
        return arr;

    }else {
        for(let i = 0; i<arr.length-1;i++){
            if(arr[i]>pivot){
                right.push(arr[i]);
            } else{
                left.push(arr[i]);
            }
        }
        return [...quickSort(left),pivot,...quickSort(right)]
    }

}
console.log(quickSort([3,6,8,10,1,2,1]));

// merge sort O(n log n) time complexity, O(n) space complexity
// divide the array into two halves, recursively sort each half,
// and then merge the two sorted halves
var mergeSort = function(arr){
    if(arr.length<2){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);
} 
var merge = function(left, right){
    let result = [];
    let i = 0;
    let j = 0;
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return [...result,...left.slice(i),...right.slice(j)];
}
console.log(mergeSort([3,6,8,10,1,2,1]));
