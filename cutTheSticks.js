//cutTheSticks

function cutTheSticks(arr) {
    let tab=[];
    arr.sort((a,b)=>a-b);
    while(arr.length>0){
        tab.push(arr.length);
        let min=arr[0];
        let i=0;
        while(i<arr.length && min==arr[i])i++;
        arr.splice(0,i);
        for(let j=0;j<arr.length;j++)arr[j]-=min;
    }
    
return tab;
}
cutTheSticks([5, 4, 4, 2, 2, 8]);
