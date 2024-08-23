function repeatedString(s, n) {
    if(!/[^a]/.test(s))return n;
    if(!/^[^a]$/.test(s))return 0 ;
    let tempS=s;
    let count=0;
    while(tempS.length<n)tempS+=tempS;
    console.log(tempS);
    tempS=tempS.substring(0,n);
    for(let char of tempS)if(char=='a')count++;
    return count;
}
console.log(repeatedString("bbbbbb",534802106762));