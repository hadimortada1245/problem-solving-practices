function alternatingCharacters(s) {
    let counter=0;
    let i=0;
    while(i<s.length-1){
        if((s.charAt(i)=='A' && s.charAt(i+1)!='B')||(s.charAt(i)=='B' && s.charAt(i+1)!='A') ){
            i++;
        counter++;
        }
        else {
            i++;
        }
    }
    return counter;

}