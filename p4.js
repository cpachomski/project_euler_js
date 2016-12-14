/*
	Find the largest palindrome made from the product of two 3-digit numbers.
*/

const start = 100;
const end = 1000;

function largestPalindrome() {
	let i = start;
	let palInts = [];
	let largestPal = 0;

	while (i < end) {
		for (j = start; j < end; j++) {
			let prod = i * j
			if (isPalindromeInt(prod)) {
				palInts.push(prod);
			}
		}
		i++;
	}

	palInts.forEach((p) => {
		if (p > largestPal) { largestPal = p }
	});

	return largestPal;
}

function isPalindromeInt(int) {
	let str =  int+'';
	let mid = Math.floor(str.length / 2);
	let arr = str.split('');
	var firstHalf = arr.slice(0, mid).join('');
	var secondHalfReversed = arr.slice(mid, arr.length).reverse().join('');	
	if (firstHalf == secondHalfReversed) { return true; } 
	return false;
}

console.log(largestPalindrome())


