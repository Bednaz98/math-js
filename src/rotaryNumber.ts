import hash from 'object-hash'
import { convertStringToNumber } from './misc';

/** default 5 minutes*/
export function getTFTimeDevisor(minutes?: number): number {
    return (minutes ?? 5) * 60;
}

/** input time in milliseconds, same as Date.now */
export function roundTime(inputTime: number, minutes?: number) {
    const seconds = ((inputTime / 1000)) / getTFTimeDevisor(minutes);
    return Math.trunc(seconds)
}

export function getTFKey(TwoFactory?: string) {
    const key = TwoFactory ?? 'default'
    return hash(key)
}

export interface RotaryNumberConfig {
    divisorMinutes?: number;
    TwoFactoryKey?: string;
    length?: number;
}

/**gets rotary number as array,
 * @input - string to get rotatory number for e.g userID, email
 * @time - input time to check, should be Date.now
 */
export function getRotaryNumberArray(inputTime: number, inputID: string, config?: RotaryNumberConfig) {
    const hashArray: number[] = []
    const lengthValue = config?.length ?? 6
    const roundedTime = roundTime(inputTime, config?.divisorMinutes)
    for (let i = 0; i < lengthValue ?? 6; i++) {
        const hashString = hash({ inputID, key: getTFKey(config?.TwoFactoryKey), rotary: roundedTime, i, change: i * roundedTime })
        hashArray.push(convertStringToNumber(hashString) % 10)
    }
    return hashArray;
}


export function getRotaryString(inputTime: number, inputID: string, config?: RotaryNumberConfig) {
    const array = getRotaryNumberArray(inputTime, inputID, config)
    array.reduce((p, c) => p + c, '');
    return array.reduce((p, c) => p + c, '');
}

export function compareRotaryNow(userString: string, inputID: string, config?: RotaryNumberConfig) {
    return userString === getRotaryString(Date.now(), inputID, config)
}