var isAnagram = function(s, t) {
    s=s.toLowerCase();
    t=t.toLowerCase();
    if(s.length != t.length)return false;
    let frequencies1={};
    for(let char of s){
        if(!t.includes(char))return false;
        frequencies1[char]=frequencies1[char]+1 || 1;
    }
    for(let char of t){
        frequencies1[char]=frequencies1[char]-1;
        if(!s.includes(char) || frequencies1[char]<0)return false;
    }
    return true;
};