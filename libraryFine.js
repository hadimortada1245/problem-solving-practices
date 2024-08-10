function libraryFine(d1, m1, y1, d2, m2, y2) {
    if(y1<y2)return 0;
    if(y2==y1){
        if(m1<m2)return 0;
        if(m1==m2){
            return d1<=d2?0:15*(d1-d2);
        }return 500*(m1-m2);    
        
    }return 10000;

}
console.log(libraryFine(6,6,2015,9,6,2015));