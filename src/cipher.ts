// * Contents originally copied from: https://github.com/tycrek-archive/rot-cipher/blob/master/app.js#L30-L85
// * It has been modified to work with this repo.

const Colours = {
	green: '\x1b[32m',
	turquoise: '\x1b[36m',
	blue: '\x1b[34m',
	grey: '\x1b[90m',
	yellow: '\x1b[33m',
	red: '\x1b[31m',
	RESET: '\x1b[0m',
};

/**
 * Rotation cipher (shift) letters in a string
 */
export function cipher(word: string, offset: number, displayOffset = true) {

	// Iterate over the whole length of the alphabet
	const shiftedLetters = [];

	// Iterate through each letter in the original word
	for (let i = 0; i < word.length; i++)
		shiftedLetters.push(word[i] === ' ' ? ' ' : String.fromCharCode(shiftCode(word.charCodeAt(i), offset)));

	// Print our shifted result
	console.log(''
		.concat(displayOffset ? `${offset < 10 ? ' ' : ''}${Colours.grey}${offset}: ` : '')
		.concat(`${Colours[offset % 26 === 0 ? 'green' : 'turquoise']}${shiftedLetters.join('')}${Colours.RESET}`));
}

/**
 * Shift an ASCII code (letters only) and return a new code
 */
function shiftCode(original: number, offset: number) {

	// Changes depending if letter is uppercase or lowercase
	const shiftSize = getShiftSize(original);

	// Subtract the shiftSize to get a "normal" value between A-Z (1-26)
	// Then add the offset for the cipher
	let newCode = (original - shiftSize) + offset;

	// Cycle from Z back to A if required
	if (newCode > 26) newCode -= 26;

	// Make our "normal" code back into an ASCII code
	newCode += shiftSize;

	return newCode;
}

/**
 * Returns the shift amount for a letter (upper/lower)
 */
function getShiftSize(code: number) {
	const U_SHIFT = 64; // ASCII 'zero' (before 'A')
	const L_SHIFT = 96; // ASCII 'grave' (before 'a')
	const U_RANGE = [64, 91]; // ASCII range for uppercase letters
	const L_RANGE = [96, 123]; // ASCII range for lowercase letters

	return (code > U_RANGE[0] && code < U_RANGE[1]) ? U_SHIFT
		: (code > L_RANGE[0] && code < L_RANGE[1]) ? L_SHIFT
			: 0;
}
