import { clampValue, randomIntInRange, randomNumberInRange, } from '../src/mathFunctions'

describe("mathFunctions", () => {
    const min = -10;
    const max = 10;
    it("randomInRange", () => {
        for (let i = 0; i < 100; i++) {
            const value = randomNumberInRange(min, max);
            expect(value).toBeGreaterThanOrEqual(min);
            expect(value).toBeLessThanOrEqual(max);
        }
    })
    it("clampValue", () => {
        for (let i = 0; i < 10; i++) {
            const value = clampValue(randomIntInRange(min - 10, max + 10), min, max);
            expect(value).toBeGreaterThanOrEqual(min);
            expect(value).toBeLessThanOrEqual(max);
        }
    })
})