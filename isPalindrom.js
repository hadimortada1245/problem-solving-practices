var isPalindrome = function(s) {
    let temp="";
    s=s.toLowerCase();
    for(let i=0;i<s.length;i++)
        if((s.charCodeAt(i)>=97&& s.charCodeAt(i)<=122)||(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57))temp+=s.charAt(i);
    return temp==temp.split('').reverse().join('');

};
console.log(isPalindrome("ab_a"))