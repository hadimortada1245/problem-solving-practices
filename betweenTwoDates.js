// Input: date1 = "2019-06-29", date2 = "2019-06-30"
// Output: 1
// Example 2:

// Input: date1 = "2020-01-15", date2 = "2019-12-31"
// Output: 15
 const betweenTwoDates=(s1,s2)=>{
    let d1=new Date(s1);
    let d2=new Date(s2);
    let oneDayInMs=24*60*60*1000;
    let diff=Math.abs(d1-d2);
    return parseInt(diff/oneDayInMs);
 }
console.log(betweenTwoDates("2020-01-15","2019-12-31"));