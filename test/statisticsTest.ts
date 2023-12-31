import { randomBoolean, randomIntInRange, randomNumberInRange } from '../src/mathFunctions';
import { generateEmptyArray } from '../src/misc';
import { multiLogisticStep, multiRandomLogisticsStep } from '../src/statistics'
import { Vector } from '../src/vector'
// internal testing for logic
const array = generateEmptyArray(20)
let pop: Vector = array.reduce((p, c) => ({ ...p, [c]: randomIntInRange(10, 50) }), {})
const rate: Vector = array.reduce((p, c) => ({ ...p, [c]: randomNumberInRange(0.04, 0.3) }), {})
const limits: Vector = array.reduce((p, c) => ({ ...p, [c]: randomIntInRange(1000, 10000) }), {})
const e = (prim: string, agent: string) => {

    return randomNumberInRange(0, 0.3)
}
const iterate = 600
for (let i = 0; i < iterate; i++) {
    pop = multiRandomLogisticsStep(pop, rate, limits, e, randomBoolean);
    console.log(array.map(k => `${pop[k] ?? 0}`).join(';'));

}



