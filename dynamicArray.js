function dynamicArray(n, queries) {
    let arr=[];
    let i=0;
    while(i<n){
        arr.push([]);
        i++
    }
    for(let query of queries){
        let tabQuery=query.split(' ');
        let first=tabQuery[0];
        let x=parseInt(tabQuery[1]);
        let y=parseInt(tabQuery[2]);
        if(first =='1'){
            
        }
    }
return arr;
}
console.log(dynamicArray(2,'aa'));