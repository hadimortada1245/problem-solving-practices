var checkIfExist = function(arr) {
   let map = {};
   for (let i = 0; i < arr.length; i++) {
       if (map.hasOwnProperty(arr[i] * 2) || map.hasOwnProperty(arr[i] / 2)) {
           return true;
       }
      
       map[arr[i]] = i;
   }
   return false;
};
console.log(checkIfExist([10,2,5,3]));