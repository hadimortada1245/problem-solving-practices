function binarySearchRec(arr,n,start,end){
    if (start>end)return -1;
    let mid = parseInt((start + end) / 2);
    if(arr[mid]==n)return mid;
    if(arr[mid]<n)return mid + binarySearch(arr,n,mid+1,end);
    else if(arr[mid]>n)return mid+ binarySearch(arr,n,start,mid-1);
}
function binarySearch(arr,n){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let mid = parseInt((start + end) / 2);
        if(arr[mid]==n)return mid;
        else if(arr[mid]<n){
            start=mid+1;
        }else end=mid-1;
    }return -1;
    
}
console.log(binarySearch([1,2,34,55,66],2));