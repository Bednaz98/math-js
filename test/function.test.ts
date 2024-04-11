import { PiecewiseLineData, getLinearValue, piecewiseLine } from '../src';

describe("math functions getLinearValue", () => {
    it("getLinearValue general case 1", () => {
        const config = { xi: 0, yi: 0, xf: 1, yf: 1 }
        for (let i = -5; i < 5; i++) {
            expect(getLinearValue(i, config)).toBe(i)
        }
    })
    it("getLinearValue general case 2", () => {
        const config = { xi: -1, yi: -1, xf: 1, yf: 1 }
        for (let i = -5; i < 5; i++) {
            expect(getLinearValue(i, config)).toBe(i)
        }
    })
    it("getLinearValue 2x growth", () => {
        const config = { xi: 0, yi: 0, xf: 1, yf: 2 }
        for (let i = -5; i < 5; i++) {
            expect(getLinearValue(i, config)).toBe(i * 2)
        }
    })
    it("getLinearValue  negative slope", () => {
        const config = { xi: 0, yi: 1, xf: 1, yf: 0 }
        for (let i = -5; i < 5; i++) {
            expect(getLinearValue(i + 1, config)).toBe(-i ? -i : 0)
        }
    })
    it("getLinearValue  negative x2 slope", () => {
        const config = { xi: 0, yi: 2, xf: 1, yf: 0 }
        for (let i = -5; i < 5; i++) {
            expect(getLinearValue(i + 1, config)).toBe(2 * (-i ? -i : 0))
        }
    })

});

describe("math function piecewiseLine", () => {
    it("piecewiseLine under range", () => {
        const inputData: PiecewiseLineData = { 0: 0, 2: 2, 4: 4, 6: 6, 8: 8, 10: 10 }
        expect(piecewiseLine(-2, inputData)).toBe(0)
    })
    it("piecewiseLine over range", () => {
        const inputData: PiecewiseLineData = { 0: 0, 2: 2, 4: 4, 6: 6, 8: 8, 10: 10 }
        expect(piecewiseLine(11, inputData)).toBe(10)
    })
    it('piecewiseLine general case', () => {
        const inputData: PiecewiseLineData = { "-1": -1, 0: 0, 2: 2, 4: 4, 6: 6, 8: 8, 10: 10 }
        for (let i = 0; i < 5; i++) {
            expect(piecewiseLine(i, inputData)).toBe(i)

        }
    })
    it('piecewiseLine range test positive', () => {
        const min = -1
        const max = 50
        const inputData: PiecewiseLineData = { 0: min, 2: 10, 4: 20, 6: 30, 8: 40, 10: max }
        let previousValue = -10
        for (let i = -5; i < 15; i += 0.5) {
            const result = piecewiseLine(i, inputData);
            expect(result >= min && result <= max).toBeTruthy()
            expect(result >= previousValue).toBeTruthy()
            previousValue = result;
        }
    })
    it('piecewiseLine range test mixed', () => {
        const min = -1
        const max = 50
        const inputData: PiecewiseLineData = { 0: min, 2: 10, 4: 5, 6: 30, 8: 20, 10: max }
        for (let i = -5; i < 15; i += 0.5) {
            const result = piecewiseLine(i, inputData);
            expect(result >= min && result <= max).toBeTruthy()
        }
    })
});