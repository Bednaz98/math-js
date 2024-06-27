import { randomIntInRange } from "./mathFunctions"

export function getRandomElement<T = any>(array: T[]) {
    const index = randomIntInRange(0, (array.length > 0 ? array.length : -1));
    return (array?.[index] ?? undefined)
}

export function getRandomObjectValues<T = any>(object: { [key: string | number]: T }) {
    const values: T[] = Object.values(object);
    return getRandomElement<T>(values);
}