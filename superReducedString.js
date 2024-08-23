function superReducedString(s) {
    let i=0;
    while(i<s.length-1){
        if(s.charAt(i)==s.charAt(i+1)){
          s=s.slice(0,i)+s.slice(i+2,s.length);
          i=0;
        }else i++;
    }
    return s.length>0?s:"Empty String";
}
console.log(superReducedString("aaabccddd"));