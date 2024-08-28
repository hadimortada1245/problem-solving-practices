function gridChallenge(grid) {
    let strings=new Array(grid.length).fill("");
    for(let i=0;i<grid.length;i++){
        grid[i]=grid[i].split('').sort().join('');
        for(let j=0;j<strings.length;j++)strings[j]+=grid[i].charAt(j);
    }
    for(let s of strings)if(s!=s.split('').sort().join(''))return"NO";
    return "YES";
}//we can do it o(n)..
console.log(gridChallenge(["abc","ade","efg"]));