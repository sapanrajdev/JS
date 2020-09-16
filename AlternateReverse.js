function alternateReverse(arr) {
	for(let i=0;i<arr.length-1;i++) {
		if(i%2===0){
			arr[i] = arr[i]+arr[i+1];
			arr[i+1] = arr[i]-arr[i+1];
			arr[i] = arr[i]-arr[i+1];
		}
	}
	return arr;
}
const arr = [10,8,7,6,5,4,3,2,3];
console.log('Input: ', arr);
console.log('Output: ', alternateReverse(arr));