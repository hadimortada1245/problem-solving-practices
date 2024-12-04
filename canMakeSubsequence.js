var canMakeSubsequence = function(str1, str2) {
   let [i,j]=[0,0];
   while(i<str1.length && j<str2.length){
    if(str1.charAt(i)==str2.charAt(j)){
        i++;
        j++;
    }else if((str1.charAt(i) =='z' && str2.charAt(j)=='a')||(str1.charAt(i).charCodeAt(0)+1==str2.charAt(j).charCodeAt(0))){
        i++;
        j++;
    }else{
        i++;
    }
   }
   return j==str2.length?true:false;
};
/*var canMakeSubsequence = function (str1, str2) {
    let [i, j] = [0, 0];

    while (i < str1.length && j < str2.length) {
        const char1 = str1.charAt(i);
        const char2 = str2.charAt(j);
        
        if (char1 === char2 || (char1 === 'z' && char2 === 'a') || char1.charCodeAt(0) + 1 === char2.charCodeAt(0)) {
            j++;
        }
        i++;
    }

    return j === str2.length;
};*/

console.log(canMakeSubsequence("ab","d"));
