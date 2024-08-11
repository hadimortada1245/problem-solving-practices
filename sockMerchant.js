function sockMerchant(n, ar) {
    let stock={};
    for(let v of ar )
        stock[v]=stock[v]+1 || 1;
    let count =0;
    for(let key in stock)
        if(stock[key]>1)count+=parseInt(stock[key]/2);
    return count;

}
console.log(sockMerchant(7,[1,2,1,2,1,3,2]));