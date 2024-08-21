function caesarCipher(s, k) {
    let enctryptedString="";
    k=k%26;
for(let char of s)
    if(/^[a-zA-Z]$/.test(char))
        enctryptedString+=String.fromCharCode(((char.charCodeAt(0)+k>122 && char.charCodeAt(0)<=122) || (char.charCodeAt(0)+k>90 && char.charCodeAt(0)<=90))?char.charCodeAt(0)-26+k:char.charCodeAt(0)+k);
    else enctryptedString+=char;

return enctryptedString;
}
console.log(caesarCipher("www.abc.xy",87));

