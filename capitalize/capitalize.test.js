import { capitalize } from "./capitalize";

test("Capitalize with lower case", () => {
    expect(capitalize("low")).toBe("Low");
});

test("Capitalize with upper case", () => {
    expect(capitalize("UPPER")).toBe("Upper");
});

test("Capitalize with random case", () => {
    expect(capitalize("rAndOm")).toBe("Random");
});