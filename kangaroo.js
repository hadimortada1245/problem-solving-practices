function kangaroo(x1, v1, x2, v2) {
    if(v1==v2 && x1!=x2)return "NO";
    if (x1==x2)return "YES";
   else if(x1<x2){
        while(x1<x2){
            x1+=v1;
            x2+=v2;
            if(x1==x2)return "Yes";
        }return "NO";
    }
    while(x2<x1){
        x1+=v1;
        x2+=v2;
        if(x1==x2)return "Yes";
    }return "NO";
    
   
}
console.log(kangaroo(0,2,5, 3));