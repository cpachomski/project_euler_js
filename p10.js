/*
	Find the sum of all the primes below two million.
*/

const max = 2000000;


function sumOfPrimesTo(limit) {
	let sum = 0;
	for (i = 2; i < max; i++) {
		if (isPrime(i)) {
			sum += i
		}
		if (i % 100000 == 0) {
			console.log('a hundred thousand')
		}
	}
	return sum
}

function isPrime(int) {
	if (int < 1) { return false }

	for (let i = 2; i <= Math.sqrt(int); i++) {
		if (int % i == 0 ) { return false; }
	}

	return true;
};

console.log(sumOfPrimesTo(max));