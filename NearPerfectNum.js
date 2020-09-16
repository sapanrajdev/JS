function findclosestsquare(n) {
    let low = 0;
    let high = 100000;
    while(low < high){
        var mid = ((low + high) >> 1);
         if (mid * mid > n){
             high = mid - 1;
         } else if ( mid * mid < n){
             low = mid + 1;
         } else 
             return mid;
    }
    if (high*high > mid) {
        return (high*high - n< n - (high-1)*(high-1))?high:(high-1);
    } else{
        return ((high+1)*(high+1) - n < n - high*high)?(high+1):high;
    }
}
console.log(findclosestsquare(3));