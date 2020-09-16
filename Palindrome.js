function palindrome(number) {
	var rem, temp, final = 0;
	temp = number;
	while (number>0) {
		rem = number%10;
		number = parseInt(number/10);
		final = final*10+rem;
	}
	return final===temp;
}

console.log(palindrome(121));