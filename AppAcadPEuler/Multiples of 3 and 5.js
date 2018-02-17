/*


If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

let multiplesOfThreeAndFiveUnderX = (x) => {
	let count = 3;
	let sum = 0;

	while(count < x) {
		if(count % 3 === 0 || count % 5 === 0) {
			sum +=count;
		};

		count++;
	}

	// if(sum > x){
	// 	sum = sum - count;
	// }
	
	return sum;
}

console.log(multiplesOfThreeAndFiveUnderX(1000));
