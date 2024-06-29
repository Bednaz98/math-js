import { clampValue, randomIntInRange } from "./mathFunctions"

export function getRandomElement<T = any>(array: T[]) {
    const max = (array.length > 0) ? array.length : 0
    const index = randomIntInRange(0, max)
    return (array?.[index] ?? undefined) as T | undefined;
}

export function getRandomObjectValues<T = any>(object: { [key: string | number]: T }) {
    const values: T[] = Object.values(object);
    return getRandomElement<T>(values)
}

export function getRandomArrayFromObject<T = any>(object: { [key: string | number]: T }, length?: number): T[] {
    const values = Object.values(object);
    const temp = new Set<T>()
    for (let i = 0; i < clampValue(values.length, (length ?? Math.ceil(values.length / 2)), values.length); i++) {
        const rand = getRandomElement<T>(values)
        if (rand) temp.add(rand)
    }
    return [...temp.values()];
}