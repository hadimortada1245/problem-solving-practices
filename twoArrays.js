function twoArrays(k, A, B) {
    A=A.reverse();
    B=B.reverse();
    for(let i=0;i<A.length;i++)
        if(A[i]+B[i]<k)return "NO"
    return "YES";
}
console.log(twoArrays(1,[0,1],[0,2]));