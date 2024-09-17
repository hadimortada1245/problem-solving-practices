function balancedSums(arr) {
    if(arr.length==1)return "YES";
    let i=0;
    let boo=false;
    while(i<arr.length){
        let sum=0;
        let j=0;
    let k=i+1;
        while(j<i){
            sum+=arr[j];
            j++;
        }
        let sum2=0;
          while(k<arr.length ){
            sum2+=arr[k];
            k++;
        } if(sum==sum2)boo=true;
        i++;
    }return boo?"YES":"NO";

}
/*
function balancedSums(arr) {
    let totalSum = arr.reduce((a, b) => a + b, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let rightSum = totalSum - leftSum - arr[i];

        if (leftSum === rightSum) {
            return "YES";
        }

        leftSum += arr[i];
    }

    return "NO";
}

*/
console.log(balancedSums([1 ,2 ,3]));