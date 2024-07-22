import { caesarCipher } from "./caesarCipher";

test('Test wrapping from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('Test case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('Test punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})