/*
	Find the difference between the sum of the squares
	of the first one hundred natural numbers and the 
	square of the sum.
*/

const max = 100;

function sumSquareDifference(int) {
	return Math.abs(squareOfSum(int) - sumOfSquares(int));
}

function sumOfSquares(int) {
	let s = 0;
	for (i = 1; i <= int; i++) {
		s += Math.pow(i, 2);
	}
	return s;
}

function squareOfSum(int) {
	let s = 0;
	for (i = 1; i <= int; i++) {
		s += i;
	}
	return Math.pow(s, 2);
}

console.log(sumSquareDifference(max));