
function maxMin(k, arr) {
    arr.sort((a, b) => a - b);
    let minDiff=Infinity;
    for (let i = 0; i <= arr.length - k; i++) {
        let currentDiff = arr[i + k - 1] - arr[i];
        minDiff = Math.min(minDiff, currentDiff);
    }
    return minDiff;

}
console.log(maxMin(5, [
    4504
    , 1520
    , 5857
    , 4094
    , 4157
    , 3902
    , 822
    , 6643
    , 2422
    , 7288
    , 8245
    , 9948
    , 2822
    , 1784
    , 7802
    , 3142
    , 9739
    , 5629, 5413, 7232]));