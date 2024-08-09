function marsExploration(s) {
    let count=0;
    let i=0;
    while(i<s.length){
        let temp=s.substring(i,i+3);
        if(temp=="SOS"){
            count+=3;
        }else{
            if(temp.charAt(0)==='S')count++;
            if(temp.charAt(1)==='O')count++;
            if(temp.charAt(2)==='S')count++;
        }
        i+=3;
    }return s.length -count;
}
console.log(marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS"));