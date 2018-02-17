/*

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const palindromeFinder = (val) => {
	let numString = val.toString().split('');
	let palindrome = val.toString().split('').reverse();

	for(let i = 0; i < numString.length; i++){
		if(numString[i] !== palindrome[i]){
			return false;
		}
	}

	console.log(`${numString}, numstring, ${palindrome}`)
	return true;
}

//console.log(palindromeFinder(1001));

const largestPalindromeProduct = (digits) => {
	if(digits <= 1){
		return 0;
	}

	let palindromeArray = [];
	let count = 1;
	let productStart = 9;
	let digitDecrease = digits;

	while(count < digits){
		productStart +=(9*Math.pow(10, digitDecrease-1));
		digitDecrease--;
		count++; 
	}

	let palindromeProduct;
	let max = Math.pow(productStart, 2);
	let min = Math.pow(10, digits-1);

	for(let i = productStart; i > min;i--){

		for(let j = productStart; j > min;j--){
			palindromeProduct = i * j;
			if(palindromeFinder(palindromeProduct)){
				console.log(palindromeProduct,j,productStart);
			  palindromeArray.push(palindromeProduct);
			}
		}
	}

	return Math.max(...palindromeArray); 
}

console.log(largestPalindromeProduct(3));




