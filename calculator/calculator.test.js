import { Calculator } from "./calculator";

test('Add Method', () => {
    expect(Calculator.add(1, 2)).toBe(3);
});

test('Add Method: Throw An Error', () => {
    expect(Calculator.add("String", 2)).toBe("ERROR");
});

test('Subtract Method', () => {
    expect(Calculator.subtract("2", 1)).toBe(1);
});

test('Subtract Method: Throw An Error', () => {
    expect(Calculator.subtract("String", 2)).toBe("ERROR");
});

test('Divide Method', () => {
    expect(Calculator.divide(10, 2)).toBe(5);
});

test('Divide Method: Throw An Error', () => {
    expect(Calculator.divide("String", 2)).toBe("ERROR");
});

test('Multiply Method', () => {
    expect(Calculator.multiply(11, -5)).toBe(-55);
});

test('Multiply Method: Throw An Error', () => {
    expect(Calculator.multiply(11, "String")).toBe("ERROR");
});