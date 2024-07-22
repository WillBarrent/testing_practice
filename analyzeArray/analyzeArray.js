export function analyzeArray(array) {
    const length = array.length;
    const average = Math.round((array.reduce((prev, current) => prev + current, 0)) / 6);
    const min = Math.min(...array);
    const max = Math.max(...array);
    
    return {
        average,
        min,
        max,
        length
    };
}