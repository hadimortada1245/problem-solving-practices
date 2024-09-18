function gamingArray(arr) {
    let maxSoFar = -Infinity;
    let counter = 0;

    for (let i = 0; i < arr.length; i++) 
        if (arr[i] > maxSoFar) {
            maxSoFar = arr[i];
            counter++;
        }

    return counter % 2 === 1 ? "BOB" : "ANDY";
}
//The brute force code 
// function gamingArray(arr) {
//     let counter=0;
//     while(arr.length>0){
//         arr=arr.slice(0,arr.indexOf(Math.max(...arr)));
//         counter++;
//     }return counter%2==1?"BOB":"ANDY";

// }
console.log(gamingArray([2,3,5,4,1]));