import { convertStringToNumber } from "./misc"
import { compareRotaryNow, getRotaryString } from "./rotaryNumber"
import { gaussian, logisticFunction, logisticTimeStep, generateEmptyArray, division } from "./statistics"

export * from './misc';
export * from './rotaryNumber';
export * from './statistics';
export * from "./vector";



const math = {
    convertStringToNumber,
    gaussian,
    logisticFunction,
    logisticTimeStep,
    generateEmptyArray,
    division,
    getRotaryString,
    compareRotaryNow
}

export default math