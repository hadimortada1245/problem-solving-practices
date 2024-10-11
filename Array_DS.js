
function reverseArray(array) {
    for(let i=0,j=array.length-1;i<j;i++,j--){
        let temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }return array;
}
console.log(reverseArray([1,2,3]));
// function reverseArray(array) {
//     return array.reverse();
// }