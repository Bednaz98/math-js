import { getLinearValue } from '../src';

describe("math functions", () => {


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

})