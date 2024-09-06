import { clampMax, clampMin, clampValue, randomIntInRange, randomNumberInRange, } from '../src/mathFunctions'

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
    it('test min clamp', () => {
        const threshold = 0
        expect(clampMin(threshold + 1, threshold) >= threshold).toBe(true)
        expect(clampMin(threshold, threshold) >= threshold).toBe(true)
        expect(clampMin(threshold - 1, threshold) >= threshold).toBe(true)
    })
    it('test max clamp', () => {
        const threshold = 0
        expect(clampMax(threshold + 1, threshold) <= threshold).toBe(true)
        expect(clampMax(threshold, threshold) <= threshold).toBe(true)
        expect(clampMax(threshold - 1, threshold) <= threshold).toBe(true)
    })
    it("clampValue", () => {
        const min = -3
        const max = 3
        for (let i = -10; i < 10; i++) {
            const result = clampValue(min - 1, min, max)
            expect(result >= min && result <= max).toBe(true)
        }
    })
})