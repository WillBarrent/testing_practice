import { reverseString } from "./reverseString";

test("Reverse String: 1 case", () => {
    expect(reverseString("reverse")).toBe("esrever");
});

test("Reverse String: 1 case", () => {
    expect(reverseString("Reverse String")).toBe("gnirtS esreveR");
});

test("Reverse String: 1 case", () => {
    expect(reverseString("This is another exampleE")).toBe("Eelpmaxe rehtona si sihT");
});