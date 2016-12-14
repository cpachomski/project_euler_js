/*
	Find the sum of all the multiples of 3 or 5 below 1000.
*/

let max = 1000;

function sumMultiplesBelowLimit(limit) {
	let i = 0;
	let sum = 0;
	while (i < max) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
		i++;
	}
	return sum;
}

console.log(sumMultiplesBelowLimit(max));