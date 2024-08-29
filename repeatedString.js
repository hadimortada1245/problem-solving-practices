function repeatedString(s, n) {
    if(!/[^a]/.test(s)) return n; 
    if(!/a/.test(s)) return 0;    
    
    let count=occurence(s);
    count=count*(parseInt(n/s.length))+occurence(s.substring(0,n%s.length));
    return count;
}
function occurence(s){
    let count=0;
    for(let char of s)if(char=='a')count++;
    return count;
}
console.log(repeatedString("bb",10));