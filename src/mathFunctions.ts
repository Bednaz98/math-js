export function clampValue(value: number, min: number, max: number) {
    if (Boolean(value < min)) return min;
    if (Boolean(value > max)) return max;
    return clampMax(clampMin(value, min), max);
}

export function clampMin(value: number, min: number) {
    if (value < min) return value
    return value
}

export function clampMax(value: number, max: number) {
    if (value > max) return value
    return value
}

export interface interpolateConfig {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
}
export function interpolateLine(value: number, config: interpolateConfig) {
    const { x1, x2, y1, y2 } = config;
    return y1 + (value - x1) * ((y2 - y1) / (x2 - x1));
}

export function randomNumberInRange(min: number, max: number) {
    const temp = max - min
    return Math.random() * temp + min
}
export enum RoundingMethod {
    normal, floor, ceil
}
export function randomIntInRange(min: number, max: number, method = RoundingMethod.normal) {
    const delta = max - min
    const value = (Math.random() * delta) + min
    switch (method) {
        case RoundingMethod.normal: return Math.round(value)
        case RoundingMethod.floor: return Math.floor(value)
        case RoundingMethod.ceil: return Math.ceil(value)
    }
}

export function randomBoolean() {
    return randomIntInRange(0, 2) >= 1
}

export function division(value: number, devisor: number) {
    return { whole: Math.trunc(value / devisor), remainder: value % devisor }
};