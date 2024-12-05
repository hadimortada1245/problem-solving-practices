var canChange = function(start, target) {
    const n=start.length;
       for(let i=0, j=0; i<n || j<n; i++, j++){
           while(i<n && start.charAt(i)=='_') i++;
           while(j<n && target.charAt(j)=='_') j++;
      
          let  c=start.charAt(i);
           if (c !=target.charAt(j)) return false;
           if (c =='L' && i<j) return false;
           if (c =='R' && i>j) return false;
       }

   return true;
};