// var maxCount = function(banned, n, maxSum) {
    
//     let count=0;
//     let i=1;
    
//     let current =0;

//     while(i<=n){
//         while(i<=n &&!banned.includes(i) && i<=maxSum && current+i<=maxSum){
//             current+=i;
//             count++;
//             i++;
    
//         }i++;
//     }return count;
// };
var maxCount = function(banned, n, maxSum) {
    const bannedSet = new Set(banned); 
    let count = 0;
    let currentSum = 0;

    for (let i = 1; i <= n; i++) {
        if (bannedSet.has(i)) continue;
        if (currentSum + i > maxSum) break;

        currentSum += i;
        count++;
    }

    return count;
};
console.log(maxCount([11],7,50));