function pageCount(n, p) {
    if(p-1==0 || n-p==0)return 0;
    if(n-p==1 && n%2==1)return 0;
    else if(n-p==1)return 1; 
    if(n-p>p-1)return parseInt(p/2);
    return parseInt((n-p)/2);
}