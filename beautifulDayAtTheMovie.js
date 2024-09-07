function beautifulDays(i, j, k) {
    let count=0;
    while(i<=j){
        if(Math.abs(i-parseInt(i.toString().split('').reverse().join('')))%k==0)count++;
        i++;
    }return count;

}