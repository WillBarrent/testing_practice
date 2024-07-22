export function caesarCipher(string, shiftFactor) {
    const plainTextAlphabet = createPlainTextAlphabet();
    const cipherTextAlphabet = createCipherTextAlphabet(plainTextAlphabet, shiftFactor);
    let caesarCipherString = "";

    for (let i = 0; i < string.length; i++) {
        const letterIndex = findInAlphabet(plainTextAlphabet, string[i]);
        if (letterIndex !== null) {
            caesarCipherString += formatLetter(string[i], cipherTextAlphabet[letterIndex]);
        } else {
            caesarCipherString += string[i];
        }
    }

    return caesarCipherString;
}

function createPlainTextAlphabet() {
    let i = 0;
    return (new Array(26))
        .fill(null)
        .map(l => String.fromCodePoint(96 + ++i))
}

function createCipherTextAlphabet(plainTextAlphabet, shiftFactor) {
    const plainAlphabetLength = plainTextAlphabet.length;
    return [
        ...plainTextAlphabet.slice(shiftFactor).map(l => l.toUpperCase()),
        ...plainTextAlphabet.slice(0, shiftFactor).map(l => l.toUpperCase())
    ];
}

function findInAlphabet(plainTextAlphabet, letter) {
    let index = 0;

    while (plainTextAlphabet[index] !== letter.toLowerCase() && index < plainTextAlphabet.length) {
        index += 1;
    }

    return index === plainTextAlphabet.length ? null : index;
}

function formatLetter(original, letter) {
    if (original === original.toLowerCase() && original.toLowerCase() !== letter) {
        return letter.toLowerCase();
    }

    return letter.toUpperCase();
}