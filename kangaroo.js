function kangaroo(x1, v1, x2, v2) {
    
    if (v1 == v2) return x1 == x2 ? "YES" : "NO";
     
    let n = (x2 - x1) / (v1 - v2);

    return n > 0 && Number.isInteger(n) ? "YES" : "NO";
}
console.log(kangaroo(21, 6 ,47, 3));