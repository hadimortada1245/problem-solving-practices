function designerPdfViewer(h, word) {
    const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
let tab=[];
for(let s of word)tab.push(h[alphabet.indexOf(s)]);
return Math.max(...tab)*word.length;


}
function designerPdfViewer(h, word) {
    let maxHeight = 0;
    
    for (let s of word) {
        // a is at 0 in h ===> a=97 and 97-97 is equat to zere, then we compare the max inside the loop
        const height = h[s.charCodeAt(0) - 97];
        if (height > maxHeight) {
            maxHeight = height;
        }
    }

    return maxHeight * word.length;
}
console.log(designerPdfViewer([1, 3 ,1 ,3, 1, 4, 1, 3, 2 ,5 ,5 ,5, 5, 5, 5, 5, 5, 5 ,5 ,5, 5 ,5, 5, 5, 5, 5],"abc"));