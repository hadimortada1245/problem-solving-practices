function thirdLargest(arr){
    arr.sort((a,b)=>b.length-a.length);
    return arr[2];
}
console.log(thirdLargest(["abc","defg","z","hijk"]))