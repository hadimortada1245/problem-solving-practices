function closestNumbers(arr) {
    arr.sort((a,b)=>a-b);
    // console.log(arr);
    let min=Math.abs(arr[1]-arr[0]);
    let array=[];
    for(let i=0,j=1;j<arr.length;i++,j++){
        if(Math.abs(arr[j]-arr[i])==min)array.push(...[arr[i],arr[j]]);
        else if(Math.abs(arr[j]-arr[i])<min){
            array=[];
            array.push(...[arr[i],arr[j]]);
            min=Math.abs(arr[j]-arr[i]);
        }
    }return array;
    
}
console.log(closestNumbers([-20 ,-3916237 ,-357920 ,-3620601 ,7374819 ,-7330761 ,30 ,6246457 ,-6461594 ,266854]));