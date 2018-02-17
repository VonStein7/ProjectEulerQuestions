/*

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/


/*
input range: 1,10
output: 2520

divisible by the range inclusive

start from 1 - 10 2520. Keep adding 10 till all 20 fit
*/

const isPrime = (val) => {
	let divisor = 2;

	while(divisor < val){
		if(val % divisor === 0){
			return false;
		}
		divisor++
	}
	return true;
}

const exists = (obj, key) => {
	for(let prop in obj) {
			if(prop === key.toString()){
			return true;
		}
	}
	return false;		
}

const primeFactors = (num) => {
	let divisor = 2;
	let primeFactors = new Object();

	while(num >= 2){
		if(num % divisor === 0){
			if(exists(primeFactors, divisor)){
				primeFactors[divisor]++;
				num = num / divisor;
			} else {
				primeFactors[divisor] = 1;
				num = num / divisor;
			}		
		}
		else {
			divisor++;
		}
	}
	return primeFactors;
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

const smallestMultiple = (start, end) => {
	let primeMultiples = new Object();
	if(start <= 1){
		start = 2;
	}

	while(start <= end){
		console.log(primeMultiples, 'top of while');
		if(isPrime(start)){
			primeMultiples[start] = 1;
		} else {
			let primes = primeFactors(start);
			console.log(start, 'in else start');
			console.log(primes, 'in else primes');
			//primeMultiples = Object.assign({}, primeMultiples, primes);

				for(let props in primes){
					console.log(props, 'props');
					console.log(getKeyByValue(primeMultiples, primeMultiples[props]), 'multiples props');
					let keys = getKeyByValue(primeMultiples, primeMultiples[props]);
					if(props === keys && primes[props] > primeMultiples[keys]){
						console.log('in heerrrrrr');
						primeMultiples[keys] = primes[props];
					}
					// for(let keys in primeFactors){
					// 	console.log(keys, 'keyssssssss');
						// if(prop === keys && primes[prop] > primeFactors[keys]){
						// 	primeFactors[keys] = primes.prop; 
						// }
				}
			}
			console.log('roooooooooooooooooooooooooooooooooooooooooooooooond');
			start++;
	}

	let value = 1;

	for(let data in primeMultiples){
		console.log(Math.pow(data, primeMultiples[data]),'value');
		value *= Math.pow(data, primeMultiples[data]);
		console.log(value);
	}
	return value;
}


console.log(smallestMultiple(1,20));
//console.log(isPrime(17));
//console.log(primeFactors(8)); fix with euclidean algorithm