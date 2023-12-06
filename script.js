function extendHex(shortHex) {
    // Remove the "#" if present and convert to lowercase
    const normalizedHex = shortHex.replace(/^#/, '').toLowerCase();

    // Validate the length of the short hex code
    if (normalizedHex.length !== 3) {
        throw new Error('Invalid short hex code. It should have exactly 3 characters.');
    }

    // Repeat each character to generate the full hex code
    const fullHex = normalizedHex
        .split('')
        .map(char => char.repeat(2))

		
        .join('');

    return `#${fullHex}`;
}

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
