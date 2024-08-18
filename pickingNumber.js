
function pickingNumbers(a) {
    
    let maxLength=0;
    for(let i=0;i<a.length;i++){
        let max=a[i];
        let min=a[i];
        
        let temp=1;
        for(let j=0;j<a.length;j++){
            if(Math.abs(a[j]-a[i])<=1 && Math.abs(a[j]-max)<=1 && i!=j && Math.abs(min-max)<=1){
                if(max<a[j])max=a[j];
                if(min>a[j])min=a[j];
                temp++;
            }else continue;
        }if(temp>maxLength){
            maxLength=temp;
                    }
        
    }return maxLength;
   
}


console.log(pickingNumbers([4,6,5,3,3,1]));