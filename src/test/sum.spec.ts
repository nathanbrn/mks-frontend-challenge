import sum from "./sum";

describe("soma", () => {
    it("A soma deve dar 3", () => {
        expect(sum(1, 2)).toBe(3);
    });
});