/*
	There exists exactly one Pythagorean
	triplet for which a + b + c = 1000.
	Find the product abc.
*/


//start with 1 2 3
//raise c until sum = 1000
//then begin again with 1 4 5 = 1000
// until b = 500
//then increase 1 to 2 and start again

const sum = 1000;

function findTripletWithSumOf(sum) {
	let a = 1;
	let b = 2;
	let c = 3;


	for(a = 1; a <= 333; a++) {
		for (b = 2; b <= 500; b++) {
			for (c = 3; c <= 998; c++) {
				if (verifyPythagoreanTriplet(a, b, c) && tripletSumsToVal(a,b,c, sum)) {
					return multiplyTriplet(a,b,c);
				}
			}
		}
	}

}


function verifyPythagoreanTriplet(a,b,c) {
	const abSum = Math.pow(a, 2) + Math.pow(b, 2);
	if (abSum == Math.pow(c, 2)) {
		return true;
	} 
	return false;
};

function tripletSumsToVal(a,b,c, val) {
	if ((a + b + c) === val) {
		return true;
	} 
	return false;
}

function multiplyTriplet(a,b,c) {
	return a*b*c;
}

console.log(findTripletWithSumOf(sum));
