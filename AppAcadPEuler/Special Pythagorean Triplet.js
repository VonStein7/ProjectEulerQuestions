/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

const specialPythagTriplet = () => {
	let triplets = [[3,4,5],[6,8,10],[5,12,13],[9,12,15],[8,15,17],[12,16,20],[15,20,25]];
	let max = 1000;
	let factors = [];
	let divisors = 2;

	while(max >= 2){
		if(max % divisors === 0){
			let fact = max / divisors;
			factors.push(fact);
			max = max / divisors;
		}
		divisors++;
	}
	
	let finalProduct = 0;
	triplets.forEach((e,idx)=> {
		for(let i = 0; i < factors.length; i++){
			let sum = 0;
			let product = 1;
			for(let j = 0; j < e.length; j++){
				console.log(e[j], factors[i], sum);
				sum += e[j] * factors[i];
				product *= e[j] * factors[i];
				if(sum === 1000) {
					finalProduct = product;
					console.log(product);
				}
			}
		}
	});

	return finalProduct;

}

console.log(specialPythagTriplet());












