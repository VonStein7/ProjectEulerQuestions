/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const sumOfSquares = (n) => {
	return (n*(n+1)*(2*n+1))/6;
}

const sumOfPositiveInts = (n) => {
	return Math.pow((n*(n+1))/2, 2);
}

const SumSquareDifference = (n) => {
	return sumOfPositiveInts(n) - sumOfSquares(n);
}


console.log(SumSquareDifference(100));








