function rotateLeft(d, arr) {
    let i=0;
    while(i<d){
        let temp=arr[0];
        arr.splice(0,1);
        arr.push(temp);
        i++;
    }
    return arr;

}
console.log(rotateLeft(4,[1,2,3,4,5]));