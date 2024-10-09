function findMissingNumber( arr){
    let n=arr.length+1;
    let sum=n*(n+1)/2;
    for(let v of arr)sum-=v;
    return sum;
}
console.log(findMissingNumber([1,2,5,4,6]));