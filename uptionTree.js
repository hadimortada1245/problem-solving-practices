function utopianTree(n) {
    let counter=1;
    let i=1;
    while(i<=n){
        if(i%2==0)counter++;
        else counter*=2;
        i++;
    }return counter;

}