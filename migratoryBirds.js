function migratoryBirds(arr) {
    const temp={};
    let  maxCount=0;
    let birdId=arr[0];
    for(let v of arr)temp[v]=temp[v]+1 || 1;
    for(let key in temp){
        if(maxCount < temp[key]){
            maxCount=temp[key];
            birdId=key;
        }else if (maxCount == temp[key] && key!= birdId){
            birdId=key>birdId?birdId:key;
        }
    }return birdId;
}
console.log(migratoryBirds([1,1,2,3,2]));