/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
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

const primeSummation = (max) => {
	let start = 3;
	let sum = 2;

	while(start < max){
		console.log(start,'start');
		if(isPrime(start)){
			sum += start;
		}
		start += 2;
	}
	return sum;
}

console.log(primeSummation(2000000));
