function sansaXor(arr) {
    const tab=[];
    let xorAll=arr.reduce((previous,curent)=>previous^curent);
    
    for(let i=0;i<arr.length-1;i++)
        for(let j=i+1;j<arr.length;j++)
            tab.push(arr.slice(i,j+1))
    for(let i=0;i<tab.length;i++)
        for(let j=0;j<tab[i].length;j++)
            xorAll^=tab[i][j];
     
     return xorAll;   

}
// console.log(sansaXor([1,2,3]));
console.log(5^5);//10
console.log(4^5);//9
console.log(3^5);//8
console.log(2^5);//7
console.log(1^5);//6
console.log(0^5);//5
