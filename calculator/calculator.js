export class Calculator {
    static add(a, b) {
        if (isNaN(a + b))
            return "ERROR";

        return a + b;
    }
    static subtract(a, b) {
        if (isNaN(a - b))
            return "ERROR";

        return +a - +b;
    }
    static divide(a, b) {
        if (isNaN(a / b))
            return "ERROR";

        return +a / +b;
    }
    static multiply(a, b) {
        if (isNaN(a * b))
            return "ERROR";

        return +a * +b;
    }
}