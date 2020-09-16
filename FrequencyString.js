function frequency(str) {
	const obj={};
	for(let i=0;i<str.length;i++) {
		obj[str[i]-'']++;
	}
	return obj;
}

console.log(frequency('aaaabbbbcccccddd asd asdas asdas ef'));