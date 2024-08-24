function twoArrays(k, A, B) {
    let i = 0;
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    while (i<A.length){
        let j=i;
        let boo=false;
        while(j<B.length)
            {
            if(A[i]+B[j]>=k){
                boo=true;
                break
            }else j++;
           }
        if(!boo)return "NO";
        i++;
    }
return "YES";
}
console.log(twoArrays(5, [1,2,2,1], [3,3,3,4]));