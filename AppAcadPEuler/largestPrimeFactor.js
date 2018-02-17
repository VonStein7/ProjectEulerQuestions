/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

const isPrime = (val) => {
	let divisor = 2;

	while(divisor < val) {
		if(val % divisor === 0){
			return false;
		}
		divisor++;
	}

	return true;
}

//console.log(isPrime(6));

const largestPrimeFactor = (num) => {
	let divisor = 2;

	if(num <= 3){
		return num;
	}

	while(divisor < num){
		if(num % divisor === 0){
			if(isPrime(num / divisor)){
				let lPF = num / divisor;
				return lPF;
			}
		}

		divisor++;
	}

	return num;
}

console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));




