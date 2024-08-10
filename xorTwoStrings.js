function xorTwoStrings(s1,s2){
    let result="";
    for(let i=0;i< s1.length;i++)
        result+=(s1.charAt(i)==s2.charAt(i))?"0":"1";
    return result;
}
console.log(xorTwoStrings("10101","00101"));