


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
    //Number.isNaN(m) ? (m = 0) : null;
    //Number.isFinite(m) ? m = 0 : null;
    const b = (xf * yi - xi * yf) / dX
    return (m * value) + b;
}

export interface PiecewiseLineData {
    [key: number]: number
}
export function piecewiseLine(value: number, scanData: number) {
    const xValues = Object.keys(scanData).map(e => (Number(e) ?? 0));
    const interLow = xValues.filter(e => e <= value)
    const lowestNumber = (interLow?.[interLow.length - 1] ?? value);
    const lowestY = (xValues[lowestNumber] ?? value);
    const hightNumber = (xValues.filter(e => e >= value)[0] ?? value);
    const highestY = (xValues[hightNumber] ?? value);
    const config: LinearValueConfig = {
        xi: lowestNumber,
        xf: hightNumber,
        yi: lowestY,
        yf: highestY,
    }
    return getLinearValue(value, config)
}