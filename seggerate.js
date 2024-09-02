function seggerate(arr){
    let neg=[];
    let pos=[];
    for(let v of arr)
        if(v<0)neg.push(v);
        else pos.push(v);
    arr=[...neg,...pos];
    return arr;
    
}
console.log(seggerate([-1,3,-5,33,-2,10]));