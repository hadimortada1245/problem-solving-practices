function minimumNumber(n, password) {
    let minNumberToAdd=0;
    if (!/(?=.*\d)/.test(password)) minNumberToAdd++;
    console.log(minNumberToAdd);
    if(!/^(?=.*[!@#$%^&*()\-\+]).+$/
.test(password))minNumberToAdd++;
    if(!/^(?=.*[a-z]).+$/.test(password))minNumberToAdd+=1;
    if(!/^(?=.*[A-Z]).+$/.test(password))minNumberToAdd+=1;
    console.log(minNumberToAdd);
    if(password.length+minNumberToAdd<6)minNumberToAdd+=6-(password.length+minNumberToAdd);
    return minNumberToAdd;
}
console.log(minimumNumber(5,"AUzs-nV"));


