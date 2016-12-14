/*
	What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const max = 20

function smallestMultiple(limit) {
	let currVal = 0;
	let smallestFound = false;

	while( !smallestFound) {
		currVal++;
		for (let i = 1; i <= limit; i++) {
			if ( currVal % i != 0) {
				break;
			} else if(currVal % i == 0 && i == limit) {
				smallestFound = true;
			}
		}
	}
	return currVal;
}

console.log(smallestMultiple(20))
