function processData(input) {
    let result="";
    input.trim();
    let inputs=input.split('\n');
    inputs.splice(0,1);
    for(let v of inputs){
        let count=0;
        for(let i=1;i<=parseInt(v);i++)if(parseInt(v)%i==0)count++;
        if(count%2==1)result+="YES\n";
        else result+="NO\n";
    }console.log(result.substring(0,result.lastIndexOf('\n')));
} 