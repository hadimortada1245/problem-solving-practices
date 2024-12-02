var isPrefixOfWord = function(sentence, searchWord) {
    let words=sentence.split(' ');
    for(let i=0;i< words.length;i++){
        if(words[i].substring(0,searchWord.length)==searchWord)return i+1;
    }
    return -1;
};
console.log(isPrefixOfWord("i love eating burger","burg"))