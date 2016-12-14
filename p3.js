/*
	What is the largest prime factor of the number 600851475143 ?
*/


const num = 600851475143;

function largestPrimeFactor(num) {
	let primes = [];
	for (let i = 1; i < (num/2); i++ ) {
		if (isPrime(i) && num % i == 0) {
			primes.push(i);
		}

		if (i % 20000 == 0){
			console.log(primes[primes.length - 1])
		}
	}
	return primes[primes.length - 1];
}


function isPrime(int) {
	if (int < 1) { return false }

	for (let i = 2; i < int; i++) {
		if (int % i == 0 ) { return false; }
	}

	return true;
};

console.log(largestPrimeFactor(num));
