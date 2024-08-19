function permutationEquation(p) {
    let arr=[];
    for(let i=1;i<=p.length;i++)
        for(let j=0;j<p.length;j++)
            if(p[j]==i){
                let v=j+1;
                for(let k=0;k<p.length;k++)
                    if(p[k]==v){
                        arr.push(k+1);
                        break;
                    }
                break;
            }

    return arr;    
    
}console.log(permutationEquation([5,2,1,3,4]));