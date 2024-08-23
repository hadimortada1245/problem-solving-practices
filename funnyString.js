function funnyString(s) {
    const n = s.length;
    
    for (let i = 0; i < n - 1; i++) {
        const originalDiff = Math.abs(s.charCodeAt(i + 1) - s.charCodeAt(i));
        const reversedDiff = Math.abs(s.charCodeAt(n - i - 2) - s.charCodeAt(n - i - 1));

        if (originalDiff !== reversedDiff) 
            return "Not Funny";
        
    }

    return "Funny";
}

console.log(funnyString("bcxz"));