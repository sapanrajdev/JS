function pow(base, exponent) {
	let result = 1;
	if(exponent == undefined) {
		return 2;
	}
	for(let i=0;i<exponent;i++) {
		result = result * base;
	}
	return result;	 	
}

console.log(pow(2,-4));