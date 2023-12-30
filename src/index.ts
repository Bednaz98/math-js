import { clampValue, interpolateLine, randomInRange } from "./mathFunctions";
import { factorial } from "./factorial";
import { convertStringToNumber } from "./misc"
import { compareRotaryNow, getRotaryString } from "./rotaryNumber"
import { gaussian, logisticFunction, logisticTimeStep, generateEmptyArray, division } from "./statistics"

export * from './misc';
export * from './rotaryNumber';
export * from './statistics';
export * from "./vector";
export * from './factorial';
export * from './mathFunctions';



const math = {
    convertStringToNumber,
    gaussian,
    logisticFunction,
    logisticTimeStep,
    generateEmptyArray,
    division,
    getRotaryString,
    compareRotaryNow,
    factorial,
    clampValue,
    interpolateLine,
    randomInRange
}

export default math