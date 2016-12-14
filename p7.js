/*
	What is the 10 001st prime number?
*/


function nthPrime(n) {
	let count = 0;
	let currentNum = 0

	while (count <= n) {
		if (isPrime(currentNum)) {
			currentNum++;
			count++;
		} else {
			currentNum++;
		}
	}
	return currentNum - 1
}

function isPrime(int) {
	if (int < 1) { return false }

	for (let i = 2; i < int; i++) {
		if (int % i == 0 ) { return false; }
	}

	return true;
}

console.log(nthPrime(10001))

