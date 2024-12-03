// var addSpaces = function(s, spaces) {
//     let i=0;
//     let j=0;
//     let result="";
//     while(i<spaces.length){
//         while(j<spaces[i] && j<s.length){
//             result+=s.charAt(j);
//             j++;
//         }
//         result+=" ";
//         i++;
//     }
// return result+s.substring(j);
// };

var addSpaces = function(s, spaces) {
    let result = [];
    let prevIndex = 0;

    for (let space of spaces) {
        result.push(s.substring(prevIndex, space));
        result.push(" ");
        prevIndex = space;
    }

    result.push(s.substring(prevIndex));

    return result.join("");
};
console.log(addSpaces("EnjoyYourCoffee",[5, 9]));