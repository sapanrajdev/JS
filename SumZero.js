function sumZero(array) {
	for (let i = 0; i < array.length; i++){
			let iter = i + 1;
			let reviter = array.length - 1;
			let tmp = 0;
			while ( reviter >= 0 && iter < array.length){
				tmp = array[iter] + array[reviter] + array[i];
				if( tmp > 0){
					reviter--;
				}
				else if( tmp < 0) {
					iter++;
				}
				else {
					console.log(array[i] + ", "+ array[iter] +", "+ array[reviter]  );
					break;
				}
			}
		}
}
const arr = [-7, -3, 2, 10, 3, 4, 6, 7, 0];
arr.sort((x,y)=>x-y);
sumZero(arr);