export function gaussian(position: number, max: number = 1, center: number = 0.5, deviation: number = 0.2) {
    const num = Math.pow((position - center), 2)
    const dum = 2 * Math.pow(deviation, 2)
    return max * Math.pow(2.6, -(num) / dum)
}

export function logisticFunction(pop: number, limit: number, constant: number = 1) {
    return pop * constant * (1 - (pop) / (limit))
}

export function logisticTimeStep(pop: number, limit: number, constant: number = 1) {
    return pop + logisticFunction(pop, limit, constant)
}


export function generateEmptyArray(amount: number) {
    return Array.from(Array(amount).keys())
}


export function division(value: number, devisor: number) {
    return { whole: Math.trunc(value / devisor), remainder: value % devisor }
};