var generate = function(numRows) {
    if(numRows == 1)return [[1]];
    if(numRows == 2)return [[1],[1,1]];
    let first = 1;
    let end = 1; 
    let res=[[1],[1,1]];

    for(let i=2;i<numRows;i++){
        if(i==2){
            res.push([first,first+end,end]);
        }else {
            let left = 0;
            let right = 1;
            let arr=[];
            let temp=res[res.length-1];
            while(right<temp.length){
                arr.push(temp[left]+temp[right]);
                right++;
                left++;
            }res.push([first,...arr,end]);
        }
    }return res;
};
console.log(generate(5));