/*
	By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

const isPrime = (n) => {
	let divisor = 2;

	while(divisor < n){
		if(n % divisor === 0){
			return false;
		}
		divisor++;
	}
	return true;
}

const nPrime = (n) => {
	if(n === 1){
		return 2;
	}
	if(n === 2){
		return 3
	}

	let start = 5;
	let count = 2;

	while(count !== n){
		if(isPrime(start)){
			count++;
		}
		if(count < n){
			start +=2;	
		}
	}
	return start;
}

console.log(nPrime(10001));