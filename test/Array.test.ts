import { getRandomArrayFromObject, getRandomElement, getRandomObjectValues } from "../src/Array"

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

    const arrayObj = { test: 6, test2: 4, test6: 3, 5: 5, 6: 7, 9: 9, 0: 0, 3: 3, dsfgyh: 4, sdfg: 3456, regkm: 32 }
    it('check object to array is valid', () => {
        const objArray = Object.values(arrayObj)
        const array = getRandomArrayFromObject(arrayObj);
        expect(array.every(e => objArray.includes(e))).toBeTruthy();
        expect(array.length).toBeLessThanOrEqual(objArray.length);
    })
    it('check object to array length less than max', () => {
        const objArray = Object.values(arrayObj)
        const lengthy = objArray.length - 5
        const array = getRandomArrayFromObject(arrayObj, lengthy);
        expect(array.every(e => objArray.includes(e))).toBeTruthy();
        expect(array.length).toBeLessThanOrEqual(lengthy);
    })
    it('check object to array length greater than max', () => {
        const objArray = Object.values(arrayObj)
        const lengthy = objArray.length + 5
        const array = getRandomArrayFromObject(arrayObj, lengthy);
        expect(array.every(e => objArray.includes(e))).toBeTruthy();
        expect(array.length).toBeLessThanOrEqual(objArray.length);
    })
})