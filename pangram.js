function pangrams(s) {
    s = s.toLowerCase();
    let characteres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (let char of characteres) if (!s.includes(char)) return "not pangram";
    return 'pangram';
}
const testSentence = "The quick brown fox jumps over the lazy dog";
console.log(pangrams(testSentence));