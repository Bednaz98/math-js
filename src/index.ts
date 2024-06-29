import { clampValue, division, interpolateLine, randomIntInRange, randomNumberInRange, } from "./mathFunctions";
import { factorial } from "./factorial";
import { convertStringToNumber, generateEmptyArray } from "./misc"
import { compareRotaryNow, getRotaryString } from "./rotaryNumber"
import { gaussian, logisticFunction, logisticTimeStep } from "./statistics"
import { addDay, subtractDay } from "./Date";
import { getLinearValue, piecewiseLine } from "./function";
import { getRandomArrayFromObject, getRandomElement, getRandomObjectValues } from "./Array";

export * from './misc';
export * from './rotaryNumber';
export * from './statistics';
export * from "./vector";
export * from './factorial';
export * from './mathFunctions';
export * from './Date';
export * from './function';
export * from "./Array";

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
    randomNumberInRange,
    randomIntInRange,
    addDay,
    subtractDay,
    getLinearValue,
    piecewiseLine,
    getRandomElement,
    getRandomObjectValues,
    getRandomArrayFromObject
}

export default math