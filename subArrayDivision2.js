function birthday(s, d, m) {
    let count=0;
    let i=0;
    while(i<s.length-m+1){
        let j=i;
        let sum=0;
        while(j<i+m){
            sum+=s[j];
            j++;
        }
        if(sum==d)count++;
        i++;
    }
return count;
}
console.log(birthday([2,2,1,3,2],4,2));