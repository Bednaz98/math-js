import { randomIntInRange } from "./mathFunctions"





export function getRandomElement(array: any[]) {
    const index = randomIntInRange(0, (array.length ?? -1));
    return array?.[index] ?? [];
}

export function getRandomObjectValues(object: any) {
    const values: any[] = Object.values(object)
    return getRandomElement(values)
}