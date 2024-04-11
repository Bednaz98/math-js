
export interface LinearValueConfig {
    xi: number,
    xf: number
    yi: number
    yf: number
}
export function getLinearValue(value: number, config: LinearValueConfig) {
    const { xi, xf, yi, yf } = config;
    const dY = (yf - yi)
    let dX = (xf - xi)
    dX === 0 ? dX = 1 : null;
    let m = dY / dX
    const b = (xf * yi - xi * yf) / dX
    return (m * value) + b;
}

export interface PiecewiseLineData {
    [key: number]: number
}

export function piecewiseLine(value: number, scanData: PiecewiseLineData) {
    const xValues = Object.keys(scanData).map(e => (Number(e) ?? 0));
    const yValues: number[] = Object.values(scanData)
    let xi: number | null = null
    let xf: number | null = null
    let yi: null | number = null
    let yf: null | number = null
    for (let i = 0; i < xValues.length; i++) {
        const current = xValues[i]
        if (current < value) {
            xi = xValues[i]
            yi = yValues[i]
        }
        else if (current > value) {
            xf = xValues[i]
            yf = yValues[i]
        }
    }
    if (xi === null || yi === null) return yValues[0] ?? value;
    else if (xf === null || yf === null) return yValues[yValues.length - 1] ?? value;
    const config: LinearValueConfig = { xi, xf, yi, yf, }
    return getLinearValue(value, config);
}