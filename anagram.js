function anagram(s) {
    if (s.length % 2 === 1) return -1;
    
    let s1 = s.substring(0, s.length / 2);
    let s2 = s.substring(s.length / 2);
    let map1 = {};
    let count = 0;
    
    for (let char of s1) 
        map1[char] = (map1[char] || 0) + 1;   
    
    for (let char of s2) 
        if (map1[char]) 
            map1[char]--;  
        else 
            count++;
        
    return count;
}
console.log(anagram("abcdeeeb"));