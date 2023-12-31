import { clampMin, clampValue } from "./mathFunctions"
import { Vector, vector } from "./vector"

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

export function multiLogisticStep(pop: Vector, rate: Vector, limits: Vector, effectFunction: (prim: string, agent: string) => number) {
    const param = (id: string) => {
        const effect = Object.keys(pop).map(k => ({ [k]: effectFunction(id, k) })).reduce((p, c) => ({ ...p, ...c }), {})
        const value = vector.dotProduct({ ...effect, [id]: 1 }, pop);
        const currentPop = limits[id];
        return (1 - (value / clampValue(currentPop, 1, currentPop)));
    };
    const expPop = (id: string) => {
        const p = pop[id];
        const r = rate[id];
        return r * p;
    };
    const keys = Object.keys(pop);
    const value = keys.map(k => {
        const newPop = Math.round(expPop(k) * param(k) + (pop?.[k] ?? 0));
        if (newPop < 1) return ({});
        return ({ [k]: newPop })
    }).reduce((p, c) => ({ ...p, ...c }), {});
    return value;
}


export function multiRandomLogisticsStep(pop: Vector, rate: Vector, limits: Vector, effectFunction: (prim: string, agent: string) => number, ranBool: () => boolean) {
    const param = (id: string) => {
        const popLimit = limits[id];
        const effect = Object.keys(pop).map(k => ({ [k]: effectFunction(id, k) })).reduce((p, c) => ({ ...p, ...c }), {})
        const value = vector.dotProduct({ ...effect, [id]: 1 }, pop);
        return (1 - (value / clampValue(popLimit, 1, popLimit)));
    };
    const expPop = (id: string) => {
        const p = pop[id];
        const r = rate[id];
        return r * p;
    };
    const keys = Object.keys(pop);
    const value = keys.map(k => {
        const rand = ranBool() ? expPop(k) * param(k) : - expPop(k) * param(k);
        const newPop = Math.round((rand * 0.5) + (pop?.[k] ?? 0));
        if (newPop < 1) return ({});
        return ({ [k]: newPop })
    }).reduce((p, c) => ({ ...p, ...c }), {});
    return value;
}