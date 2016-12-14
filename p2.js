/*
	By considering the terms in the Fibonacci sequence whose 
	values do not exceed four million, 
	find the sum of the even-valued terms.
*/


const max = 4000000;

function sumEvenFibonaccis(limit) {
	let currFib = 1;
	let prevFib = 1;
	let evenFibs = [];
	let sum = 0;


	while(prevFib < max) {
		let holdFib = currFib;
		currFib = prevFib + currFib;
		prevFib = holdFib;

		if (currFib % 2 == 0) {
			evenFibs.push(currFib);
		}
	}

	evenFibs.forEach((f) => {
		sum += f;
	})

	return sum;
}

console.log(sumEvenFibonaccis(max))