function TripleDouble(num1,num2){
    num1=cutString(num1,3);
    num2=cutString(num2,2);
    for(let i=0;i<num2.length;i++)
        for(let j=0;j<num1.length;j++)
            if(num1[j].includes(num2[i]))return 1;
    return 0;
}

function cutString(n,k){
    n=n.toString();
    let tab=[];
    for(let i=0;i<n.length-k+1;i++)
        tab.push(n.substring(i,i+k));
    return tab;
}
console.log(TripleDouble(67844,66237));