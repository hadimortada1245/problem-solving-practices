function rotateLeft1(d, arr) {
    let i=0;
    while(i<d){
        arr=[...arr.slice(1),arr[0]];
        i++;
    }
return arr;
}
function rotateLeft2(d, arr) {//The optimized version
    d = d % arr.length;
    return [...arr.slice(d), ...arr.slice(0, d)];
}
function rotateLeft3(d, arr) {
    let i=0;
    while(i<d){
        let temp=arr[0];
        arr.splice(0,1);
        arr.push(temp);
        i++;
    }
    return arr;

}
console.log(rotateLeft(2,[1,2,3,4,5]));
