function parenthesis(paren) {
	let count=0;
	let method=0;
	for(let i=0;i<paren.length;i++){
		if(paren.length===0){
			break;
		}
		let com=paren.charAt(i);
		if(com=='('){
			count++;
			method=count;
		}
		else if(com==')'){
			count--;
		}
	}
	return method;
}

console.log(parenthesis('{{{({((}}}}'));