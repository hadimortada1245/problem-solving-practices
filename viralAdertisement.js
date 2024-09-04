function viralAdvertising(n) {
    let i=1;
    let shared=5;
    let liked=2;
    while(i<n){
        shared=Math.floor(shared/2)*3;
        liked+=Math.floor(shared/2);
        i++;
    }return liked;

}