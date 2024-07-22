import { analyzeArray } from "./analyzeArray";

test('First Array Analyze', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('Second Array Analyze', () => {
    expect(analyzeArray([10, 8, 5, 9, 8, 1])).toEqual({
        average: 7,
        min: 1,
        max: 10,
        length: 6
    });
});