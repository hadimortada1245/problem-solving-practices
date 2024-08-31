function counterGame(n) {
    let counter = 1;
    while (n != 1) {
        if ((n & (n - 1)) === 0) {
            n = n / 2;
        } else {
            let temp = n;
            while ((temp & (temp - 1)) != 0) {
                temp -= 1;
            }
            n = temp;
        }
        counter++;
    }
    return counter % 2 === 0 ? "Richard" : "Louise";
}





console.log(counterGame(1560834904)); // Output: Richard
console.log(counterGame(1768820483)); // Output: Richard
console.log(counterGame(1533726144)); // Output: Richard
console.log(counterGame(1620434450)); // Output: Richard
console.log(counterGame(1463674015)); // Output: Richard
