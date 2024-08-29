function jumpingOnClouds(c){
    let i=0;
    let jumps=0;
    while(i<c.length){
        if(i+2<c.length && c[i+2]!=1)
            i+=2;
        else 
            i+=1;
        
        jumps+=1;

    }return jumps-1;
}
console.log(jumpingOnClouds([0,0,0,0,1,0]));