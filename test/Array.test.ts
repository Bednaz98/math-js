import { getRandomElement, getRandomObjectValues } from "../src/Array"

describe("Array Test", () => {

    it('check random element', () => {
        const obj = {
            "value": 0,
            check: "sfdhsF",
            val2: 3,
            bool1: true
        }
        const value = getRandomObjectValues(obj)
        const checkArray = Object.values(obj)
        //@ts-ignore
        expect(checkArray.includes(value)).toBeTruthy()
    })
    it('check empty object', () => {
        const obj = {}
        const value = getRandomObjectValues(obj)
        //@ts-ignore
        expect(value).toBeUndefined()
    })
    it('check empty array', () => {
        const value = getRandomElement([])
        //@ts-ignore
        expect(value).toBeUndefined()
    })
})