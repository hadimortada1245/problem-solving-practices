function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b);
    let min=Infinity;
    for(let i=1;i<arr.length;i++)
        min=Math.abs(arr[i]-arr[i-1])<min?Math.abs(arr[i]-arr[i-1]):min;
    return min;

}
console.log(minimumAbsoluteDifference([-2,2,4]));