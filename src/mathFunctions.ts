
export function clampValue(value: number, min: number, max: number) {
    if (Boolean(value < min)) return min;
    if (Boolean(value > max)) return max;
    return value;
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

export function randomInRange(min: number, max: number) {
    const temp = max - min
    return Math.random() * temp + min
}