function marcsCakewalk(calorie) {
    calorie.sort((a,b)=>b-a);
    let min=0;
    for(let i=0;i<calorie.length;i++)
        min+=Math.pow(2,i)*calorie[i];
    return min;
}
console.log(marcsCakewalk([7,4,9,6]));